<?php
require_once("curl.class.php");
class User{
	//Returnerar array med permissions för varje metod. TRUE innebär att en måste vara inloggad för att få anropa den metoden
	public static function check(){
		$methods= [ 'login' => TRUE];
		return $methods;
	}

	//Skapar, tvättar, krypterar och sparar ner ny user till databasen
	public static function createUser(){
		if(isset($_POST['username'])){
			$mysqli = DB::getInstance();
			$usernameClean = $mysqli->real_escape_string($_POST['username']);
			$passwordClean = $mysqli->real_escape_string($_POST['password']);
			$password = crypt($passwordClean,'$2a$'.sha1($usernameClean));

			//Tar emot värde för lyckad registrering
			$message = Sql::insertUser($password, $usernameClean, date("Y/m/d"));
			}
		//Tar user id från databasen som just gjordes och kopplar det till listan
		$userId = $mysqli->insert_id;
		//Skapar en unik string på tecken som blir primärnyckel för listan
		$uniqueString = substr(md5(microtime()),rand(0,26),5);
			
		return ['redirect' => "index.html"];			
	}

	//Hanterar inloggning
	public static function login(){
		if(isset($_POST['username'])){
			$curl = new Curl();
			$curl->post('http://www.therewillbecode.se/slick2/?/auth/checkuser/',[
				'username' => $_POST['username'],
				'password' => $_POST['password']
				]);
			$response = json_decode($curl->response, true);		
			$user = $response[0];

			//Om inloggning lyckas sparas user id och role in i session
			if($user['id'] && $user['token']){
				$_SESSION['user']['id'] = $user['id'];
				$_SESSION['user']['token'] = $user['token'];
				setcookie("token", $_SESSION['user']['token'], time()+3600);

				echo '<script type="text/javascript">var logged_in=true;</script>';
				return ['redirect' => "start.php"];
			}else{
				return ['redirect' => "index.php"];
			}
		}

	}

	public static function skills($token){
		$curl = new Curl();
		$curl->get("http://www.therewillbecode.se/slick2/?/skills/all/loadskills/&token=$token");
		$response = json_decode($curl->response, true);	

		return $response;
	}
}