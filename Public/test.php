<?php
session_start();
require 'curl.class.php';
$token = $_SESSION['user']['token'];
			$curl = new Curl();
			$curl->get('http://www.therewillbecode.se/slick2/?/persons/4/loadnextprofile/1&token='.$token);
			echo "$token";

			$response = json_decode($curl->response, true);
			echo "<pre>";
			var_dump($response, $curl->response);