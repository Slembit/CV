<?php

class Content{

	public static function skills($token){
		$curl = new Curl();

		$curl->get("http://www.therewillbecode.se/slick2/?/skills/all/loadskills/&token=$token");
		// var_dump($curl->response);
		$response = json_decode($curl->response, true);		
		return $response;


	}

	public static function users($token){
		$curl = new Curl();

		$curl->get("http://www.therewillbecode.se/slick2/?/skills/all/loadskills/&token=$token");
		// var_dump($curl->response);
		$response = json_decode($curl->response, true);		
		return $response;
	}
	public static function updateUser($token){
		$curl = new Curl();

		$curl->get("http://www.therewillbecode.se/slick2/?/skills/all/loadskills/&token=$token");
		// var_dump($curl->response);
		$response = json_decode($curl->response, true);		
		return $response;
	}

}

	