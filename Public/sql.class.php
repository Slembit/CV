<?php

class Sql {

	public static function logIn($user, $pass){
		$mysqli = DB::getInstance();
		$query = 
			"SELECT id
			FROM user
			WHERE username = '$user'
			AND password = '$pass'
			LIMIT 1";
		$result = $mysqli->query($query);
		$user = $result->fetch_assoc();

		return $user;
	}

	public static function checkUserName($username) {
		$mysqli = DB::getInstance();

		$query = 
			"SELECT username
			FROM user
			WHERE username = '$username'";

		$result = $mysqli->query($query);
		
		if($row = $result->fetch_assoc()){
			$exists = TRUE;
			}
		else {
			$exists = NULL;
		}
		return $exists;
	}

	public static function insertUser($pass, $username, $date) {
		$mysqli = DB::getInstance();

		$exists = Self::checkUserName($username);
		if($exists === TRUE){
			return 'Exists';
		}
		else {
			$query = 
				"INSERT INTO user
				(password, username, registered)
				VALUES ('$pass','$username','$date')";
			$mysqli->query($query);

			return 'NewUserCreated';
		}
		
	}
}