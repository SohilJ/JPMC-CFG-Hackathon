<?php

// Connect to the database and return the connection.
function db_connect()
{
  $db_params = parse_ini_file( dirname(__FILE__).'/db_params.ini', false);
  $servername = $db_params['servername'] . ":" . $db_params['port'];
  $username = $db_params['username'];
  $password = $db_params['password'];
  $dbname = $db_params['dbname'];

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  } 

  return $conn;
}

// Parse the JSON request and return the object.
function getRequest()
{
	return json_decode(file_get_contents('php://input'), true);
}

function sendResponse($obj)
{
	header('Content-type: application/json');
	echo $obj;
}

?>