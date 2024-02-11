<?php //  for index only
        if(isset($_COOKIE["name"])) {
            $name = $_COOKIE["name"];
            echo <<< displaying
            <div class="d-flex forsiging">
                <a href="Profile/profile.php" class="btn btn-outline-primary btn-lg ms-3 mb-2">
                    $name
                </a>
                <form action = "deleter.php" method = "post">
                    <input type = "submit" value = "Log Out" class="btn btn-outline-primary btn-lg ms-3 mb-2">
                </form>
            </div>
            displaying ;
        }
        else {
            echo'<div class  = "forsiging">
                <button type="button" class="btn btn-outline-primary btn-lg ms-3 mb-2" data-bs-toggle="modal" data-bs-target="#modalId">
                    Sign In
                </button>
                <a href="sign_up/sign_up.php" class="btn btn-outline-primary btn-lg ms-3 mb-2">
                    Sign Up
                </a>
            </div>';
        }
?>   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @media screen and (max-width: 767px)  {
            .forsiging{
                flex-direction: column;
                align-items : center;
                justify-content: center;
                margin-bottom: 10px;
            }
        }
    </style>
</head>
<body>
    
</body>
</html>             
