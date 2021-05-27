<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$login = $inputData["Username"];
$password = $inputData["Psword"];

$userId = 0;
$error = false;
$firstName = "";
$lastName = "";

$sql = "SELECT User_ID, First_Name, Last_Name FROM Users WHERE Username = '" . $login . "' AND Psword = '" . $password . "'";
$result = $conn->query($sql);

// If the number of rows fetched is positive, get the user's id, first name, and last name.
if ($result->num_rows > 0)
{
	$row = $result->fetch_assoc();
	$userId = $row["User_ID"];
	$firstName = $row["First_Name"];
	$lastName = $row["Last_Name"];
}
else
{
	$error = true;
	returnErrorJSON( "User and Password Combination does not match." );
}
$conn->close();

if (!$error)
{
	returnInfo($firstName, $lastName, $userId);
}


function returnErrorJSON($err)
{
	$ret = '{"User_ID":0,"First_Name":"","Last_Name":"","error":"' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($firstName, $lastName, $userId)
{
	$ret = '{"User_ID":' . $userId . ',"First_Name":"' . $firstName . '","Last_Name":"' . $lastName . '","error":""}';
	sendResponse($ret);
}

?>
