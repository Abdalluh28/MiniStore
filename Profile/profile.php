<?php
    
    require_once("../datebaseconnection.php"); // strat DB connection
    include("profile.html");
    $id = $_COOKIE["access"];
    $querSql = "SELECT * FROM customer WHERE id = '$id' ;";
    $res = mysqli_query($connection , $querSql);
    if($res)
        {
            $record = mysqli_fetch_assoc($res);
            $fname = $record["firstName"];
            $lname = $record["lastName"];
            $email = $record["email"];
            $phone= $record["phone"];
            $address= $record["address"];
            $pass = $record["passwordhashed"];
            $gender = $record["gender"];
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    let gender = " <?php echo $gender ?>";
    if(gender == 0)
    {
      document.querySelector(".profile-image").src = "female.png";
    }
    document.querySelector(".user-heading>h1").innerHTML =" <?php echo $fname ?>";
    document.querySelectorAll(".info>div>span")[0].innerHTML =" <?php echo $fname ?>";
    document.querySelectorAll(".info>div>span")[1].innerHTML =" <?php echo $lname ?>";
    document.querySelectorAll(".info>div>span")[2].innerHTML =" <?php echo $pass ?>";
    document.querySelectorAll(".info>div>span")[3].innerHTML =" <?php echo $phone ?>";
    document.querySelectorAll(".info>div>span")[4].innerHTML =" <?php echo $address ?>";
    document.querySelectorAll(".info>div>span")[5].innerHTML =" <?php echo $email ?>";

</script>
</body>
</html>