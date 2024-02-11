<?php
    require_once("datebaseconnection.php");
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $email_in = $_POST["email"];
        $password = $_POST['password'];

        $sql = "SELECT id  FROM customer WHERE (email = '$email_in' AND passwordhashed = '$password');";
        $result = mysqli_query($connection , $sql);
        $row = mysqli_fetch_assoc($result);
        
        if($row != null )
            { 
                $id = $row['id'];
                $querySql  = "SELECT firstName FROM customer WHERE id = '$id';";
                $temp = mysqli_query($connection, $querySql);
                $arr = mysqli_fetch_assoc($temp);
                $name = $arr['firstName'];  
                setcookie("name" , $name ,strtotime("1 year"));
                setcookie("access" , $id ,strtotime("1 year")); //  for to get the data in profile page
            }
            else
            {
                echo "<script>window.alert(`your mail or password is wrong ! `); </script>";
            }    
    }
    // echo '<script>window.history.back();</script>'; // to go the previous page 
    // header("Location: {$_SERVER['HTTP_REFERER']}");
    header("Refresh:.01; url = {$_SERVER['HTTP_REFERER']}");
    // this is more better than history.back()  
    exit();
mysqli_close($connection);

