<?php

include 'db_connection.php';

$conn = db_connect();

$inputData = getRequest();
$postId = $inputData["Post_ID"];
$postText = "";
$postReplies = array();

$sql = "SELECT Post_Reply_ID, Reply, Reply_Like FROM Post
		INNER JOIN Post_Reply ON Post.Post_ID = Post_Reply.Post_ID
		WHERE Post.Post_ID = '" . $postId . "'";

$result = $conn->query($sql);

if (!$result)
{
	returnErrorJSON($conn->error);
}
else if ($result->num_rows == 0)
{
	// We didn't find any replies to the post, but load it's text.
	$sql = "SELECT Post FROM Post WHERE Post_ID = '" . $postId . "'";
	$result = $conn->query($sql);

	if (!$result)
	{
		returnErrorJSON("Could not find post.");
	}
	else
	{
		$postText = ($result->fetch_assoc())["Post"];
		returnInfo($postText, $postReplies);
	}
}
else if ($result->num_rows > 0)
{
	$postSql = "SELECT Post FROM Post WHERE Post_ID = '" . $postId . "'"; 
	$postTextRes = $conn->query($postSql);

	// Get the post text associated with the replies.
	$postText = ($postTextRes->fetch_assoc())['Post'];

	while ($rows = $result->fetch_assoc())
	{
		$postReplies[] = array('Post_Reply_ID' => $rows['Post_Reply_ID'], 'Reply' => $rows['Reply'], 'Reply_Like' => $rows['Reply_Like']); 
	}

	returnInfo($postText, $postReplies);
}

$conn->close();

function returnErrorJSON($err)
{
	$ret = '{"error" : "' . $err . '"}';
	sendResponse($ret);
}

function returnInfo($postText, $postReplies)
{
	$ret = '{"Post" : "' . $postText . '","Replies" : ' . json_encode($postReplies) . ', "error" : ""}';
	sendResponse($ret);
}

?>