<?php
include "dbConnection.php"; // Using database connection file here
include "getMail.php"; //getDatabase mail only, call function getMails()

if(isset($_POST['submit']))
{	
    $arrMail = array();
    getMails($arrMail);
    $email = $_POST['email'];
    $password = $_POST['password']; 
    //check valid e-mail or not
    $valid = checkValidMail($arrMail, $email);
    if(!$valid){
        echo "Ops sorry your email has been created!";
    }else {
        $insert = mysqli_query($db,"INSERT INTO `first`(`email`, `password`) VALUES ('$email', '$password')");

        if(!$insert)
        {
            echo mysqli_error($db);
        } else
        {
            echo "Sign Up Success";
        }
    }
}

if(isset($_POST['submitmailonly'])){
    $arrMail = array();
    $getMails($arrMail);
    $email = $_POST['email'];
    //check valid e-mail or not
    $valid = checkValidMail($arrMail, $email);
    if(!$valid)
    {
        echo "Ops sorry your email has been created!";
    } else{
        $insert = mysqli_query($db, "INSERT INTO `mailonly`(`mail`) VALUES ('$email')");
        if(!$insert)
        {
            echo mysqli_error($db);
        }
        else
        {
            echo "Success Subscribe!";
        }
    }
}

mysqli_close($db); // Close connection
?>