<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$username = $inputData["Username"];
$password = $inputData["Psword"];
$firstName = $inputData["First_Name"];
$lastName = $inputData["Last_Name"];
$age = $inputData["Age"];

$userId = 0;
$error = false;

// Check if user already exists in db.
$sql = "SELECT User_ID FROM Users WHERE Username = '" . $username . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
	$error = true;
	returnErrorJSON("Username already exists.");
}
else
{
	// Insert the user into the table.
	$sql = "INSERT INTO Users (First_Name, Last_Name, Age, Username, Psword) VALUES
	('" . $firstName . "','" . $lastName . "','" . $age . "','" . $username . "','" 
	. $password . "')";

	if ( !$result = $conn->query($sql) )
	{
		$error = true;
		returnErrorJSON($conn->error);
	}
	else
	{
		// Get the User_ID of the new user to send over JSON as a response.
		$sql = "SELECT User_ID FROM Users WHERE Username = '" . $username . "'";
		$result = $conn->query($sql);
		$userId = ($result->fetch_assoc())["User_ID"];
	}
}

$conn->close();

if (!$error)
{
	returnInfo($userId, $username);
}

function returnErrorJSON($err)
{
	$ret = '{"User_ID":0,"Username":"","error":"' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($userId, $username)
{
	$ret = '{"User_ID":' . $userId . ',"Username":"' . $username . '","error":""}';
	sendResponse($ret);
}

?>