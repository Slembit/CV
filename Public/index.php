<?php
session_start();
//require_once("DB.class.php");
require_once("user.class.php");
require_once("sql.class.php");
require 'curl.class.php';

error_reporting(0);

if(isset($_POST['killSession'])){
	session_unset();
}
var_dump($_POST);
//anropar getUrlParts och skickar in url. url_parts blir en array med uppstyckad url. 
$url_parts = getUrlParts($_GET); 

//array_shift lägger in första värdet i $class osv.
if($url_parts!= null){

	$class = array_shift($url_parts); 
	$method = array_shift($url_parts);

//skickar in class och anropar dess statiska metod.
	require_once($class.".class.php"); 

	$access = TRUE;
/*
    if($class != 'sql'){
        $_permissions = $class::check();
        if($_permissions[$method] == TRUE && $_SESSION['user']){
            $access = TRUE;
        }
        elseif($_permissions[$method] == FALSE){
            $access = TRUE;
        }
    }*/

	if($access == TRUE){

		$data = $class::$method($url_parts);
		$data['_session'] = $_SESSION;

		if($method ==  'myList' || $method ==  'getList'){
			$template = 'myList.html';

		}else if($method ==  'createUser'){
			echo "hej";
		}

	}	//ends access if
	else{

		require_once('login.html');
	}

	//redirectar sidan till valt destination.
	if(isset($data['redirect'])){
		header("Location: ".$data['redirect']);
	}
}	//ends if url_parts

else{
	echo "hej";
		require_once('login.html');
	
}
/*
$twig = startTwig();
echo $twig->render($template, $data);*/


function getUrlParts($get){
	$get_params = array_keys($get);//plockar key värden ur get-arrayen
	$url = $get_params[0];
	$url_parts = explode("/",$url);
	foreach($url_parts as $k => $v){
		if($v) $array[] = $v;
	}
	$url_parts = $array;
	return $url_parts; 
}

function startTwig(){
	require_once('Twig/lib/Twig/Autoloader.php');
	Twig_Autoloader::register();
	$loader = new Twig_Loader_Filesystem('templates/');
	return $twig = new Twig_Environment($loader);
}