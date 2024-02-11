<?php   
    if($_SERVER['REQUEST_METHOD'] == "POST")
        {
            setcookie("access" , '' ,-3600);
            setcookie("name" , '' ,-3600);
            header("Location: {$_SERVER['HTTP_REFERER']}"); 
            exit();
        }