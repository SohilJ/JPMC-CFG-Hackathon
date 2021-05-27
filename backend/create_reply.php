<?php

include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$userId = $inputData["User_ID"];
$reply = $inputData["Reply"];
$postId = $inputData["Post_ID"];
$replyId = 0;

// Init the amount of likes to 0.
$replyLikes = 0;

$sql = "INSERT INTO Post_Reply (Post_ID, User_ID, Reply, Reply_Like) VALUES ('" . $postId . "','" . $userId . "','" . $reply . "','" . $replyLikes . "')";

$result = $conn->query($sql);

if (!$result)
{
	returnErrorJSON($conn->error);
}
else
{
	$replyId = $conn->insert_id;
	returnInfo($replyId, $reply, $replyLikes);
}

$conn->close();

function returnErrorJSON($err)
{
	$ret = '{"Post_Reply_ID" : 0, "Reply" : "", "Reply_Like" : 0, "error" : "' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($replyId, $reply, $replyLikes)
{
	$ret = '{"Post_Reply_ID" : ' . $replyId . ',"Reply" : "' . $reply . '","Reply_Like":' . $replyLikes . ',"error" : ""}';
	sendResponse($ret);
}

?>