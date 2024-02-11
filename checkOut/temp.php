<?php
    // Check if the server request method is "GET"
    if($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Check if the "name" cookie is set (user is signed in)
        if(isset($_COOKIE["name"])) {
            // Display an alert indicating that the order is coming soon
            
        } else {
            // Display an alert indicating that the user needs to sign in or sign up before placing an order
            echo "<script>window.alert(`Sign in or sign up before placing the order`)</script>";
        }
        
        // Redirect to the checkout.php page after a short delay
        header("Refresh: 0.001; url=checkout.php");
        // Terminate the script to ensure no further code is executed
        exit();
    }
?>
