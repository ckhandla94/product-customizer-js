<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', 1);
error_reporting(E_ALL);

$targetPath = "images/temp_images/";

$copyPath = "images/uploaded_images/";
$post = $_POST;

if(isset($post['action']) && $post['action'] == 'pc_added_uploaded_image'){
	if(file_exists($post["file"]['path'])){
		$filename = pathinfo($post["file"]['path']);
		$filename = $filename['basename'];
		if(copy($post["file"]['path'], $copyPath.$filename)){
			unlink($post["file"]['path']);

			$success['message'] = "Image Uploaded Successfully";
			$success['url'] = $copyPath.$filename;
			$success['path'] = $copyPath.$filename;
			$success['status'] = 'success';
			echo json_encode($success);
			exit();
		}else{
			$erorr = "File is not moved. Please try again.";
		}
	}else{
		$erorr = "File not found.";
	}
	
	if($error){
		echo json_encode(array('status'=>'error','message' => $error));
		exit();
	}
}elseif(isset($post['action']) && $post['action'] == 'pc_remove_uploaded_image'){
	if (isset($post["file"])) {
		if(file_exists($post["file"]['path'])){
			unlink($post["file"]['path']);
		}
		$success['status'] = 'success';
		echo json_encode($success);
		exit();
	}else{
		echo json_encode(array('status'=>'error','message' => "File not found."));
		exit();
	}
}elseif(isset($post['action']) && $post['action'] == 'pc_upload_image'){
	$error = false;
	$file = $_FILES['image'];
	if (isset($file["type"])) {
		$validextensions = array("jpeg", "jpg", "png");
		$temporary = explode(".", $file["name"]);
		$file_extension = end($temporary);

		$file_types = array("image/png", "image/jpg", "image/jpeg");

		if ( in_array($file["type"], $file_types) && ($file["size"] < (1024*1024)) && in_array($file_extension, $validextensions)) {
				
			if ($file["error"] > 0) {
				$error = "Return Code: ".$file["error"];
			} else {
				if (file_exists($targetPath.$file['name'])) {
					$targetPath = $targetPath.time()."-".$file['name'];
				}else{
					$targetPath = $targetPath.$file['name'];
				}

				if(move_uploaded_file($file['tmp_name'], $targetPath)){
					$success['message'] = "Image Uploaded Successfully";
					$success['url'] = $targetPath;
					$success['path'] = $targetPath;
					$success['status'] = 'success';
					echo json_encode($success);
					exit();
				}else{
					$error = "Error while uploading image.";
				}
			}
			
		} else {
			$error = "Invalid file Size or Type, File size must be grater then 1MB";
		}
	}else{
		$error = "File not found.";
	}

	if($error){
		echo json_encode(array('status'=>'error','message' => $error));
		exit();
	}
}