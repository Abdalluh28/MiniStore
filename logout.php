<?php   
    setcookie("access" , '' ,-3600);
    setcookie("name" , '' ,-3600);
    header("location:index.php");
    exit();
