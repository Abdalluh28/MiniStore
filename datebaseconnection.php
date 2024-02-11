<?php 
    $server = "localhost";
    $user = "root";
    $pass = "";
    $name = "websiteecomm";
    $connection = "";
    try{
        $connection = mysqli_connect($server ,$user,$pass,$name);
    }
    catch(Exception ){
        echo "failed connection";
    }
