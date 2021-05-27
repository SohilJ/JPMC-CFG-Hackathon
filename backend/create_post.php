<?php
include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$userId = $inputData["User_ID"];
$post = $inputData["Post"];
$postId = 0;

// Insert the post text into the Post table.
$sql = "INSERT INTO Post (User_ID, Post) VALUES ('" . $userId . "','" . $post . "')";
$result = $conn->query($sql);

if (!$result)
{
	returnErrorJSON($conn->error);
}
else
{
	// Get the resulting Post_ID
	$postId = $conn->insert_id;
	returnInfo($postId, $post);
}

$conn->close();

function returnErrorJSON($err)
{
	$ret = '{"Post" : "", "error" : "' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($postId, $postText)
{
	$ret = '{"Post_ID" : ' . $postId . ', "Post" : "' . $postText . '","error":""}';
	sendResponse($ret);
}

?>