<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['comment'];

//send email
    mail("robert.a.lovin@gmail.com", "This is an email from:" .$email, $message);
}
?>