<?php
//database name
$dbName = "myfirstdb";
//username server
$user = "root";
//password server
$pass = "";
//create connection with database
$db = mysqli_connect("localhost",$user,$pass,$dbName);
//if connection failed
if(!$db)
{
    //error connection message
    die("Connection failed: " . mysqli_connect_error());
}else{
    //succes message and continue
    //echo "succes connection";
}

?>