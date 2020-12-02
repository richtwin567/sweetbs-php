<?php
include("../global/data_classes/session.php");
$session = new Session();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Change your Password</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/register.css">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script src="../../aggregation/accounts/login.js" type="module"></script>
    <script src="../../aggregation/data_classes/user.js" type="module"></script>
    <script src="../../aggregation/accounts/auth.js" type="module"></script>
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <div id="sign-up-div">
            <h1 id="page-title">Change Your Password</h1>
            <!-- Dynamic Content goes here-->
            <form id="newPasswordform" action="" method="post">
                <div id="realname">
                    <div>
                        <label for="fname">New Password</label>
                        <input type="password" name="newpass" id="newpass">
                        <label for="lname">Confirm new Password</label>
                        <input type="password" name="cnewpass" id="cnewpass">
                        <input type="submit" id="submit" value="Change" class='btn btn-regular'>
                    </div>
                </div>
            </form>
    </body>

</html>