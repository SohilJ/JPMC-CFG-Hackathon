<?php

include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$postId = $inputData["Post_ID"];
$post = $inputData["Post"];

$sql = "UPDATE Post SET Post = '" . $post . "' WHERE Post_ID = '" . $postId . "'";
$result = $conn->query($sql);

if (!$result)
{
	returnErrorJSON($conn->error);
}
else
{
	returnInfo($post);
}

function returnErrorJSON($err)
{
	$ret = '{"error" : "' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($post)
{
	$ret = '{"Post" : "' . $post . '"}';
	sendResponse($ret);
}

?>