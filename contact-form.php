<?php 

if(!empty($_POST["submit"])) {
    $name = $_POST["name"];
	$email = $_POST["email"];
    $content = $_POST["message"];
    
    $email_subject = "New form submission";
    $toEmail = "elma.mehmedic@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $email_subject, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-form.php";

?>