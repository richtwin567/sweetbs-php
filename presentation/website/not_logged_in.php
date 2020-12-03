<?php
session_start();
include_once("../../aggregation/data_classes/user.php");
$user = unserialize($_SESSION["user"]);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Not Logged In</title>
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../global/styles/global.css">
    <link rel="stylesheet" href="styles/not_logged_in.css">
</head>

<body>
    <?php include("../global/templates/header.php") ?>

    <main>
        <div id="who-are-you">
            <img src="../global/images/who_are_you.svg" alt="who are you?">
            <h1 id="page-title">Hold on, who is placing this order?</h1>
            <p>Please login first, if you have an account, or sign up.</p>
            <?php
            if ($user != null && $user->getType() == "Admin") :
            ?>
                <p>(You may also be seeing this if you are logged in as admin, Login as a customer to place an order)</p>
            <?php endif; ?>
            <div id="account-action-btns">
                <a href="register.php" class="btn btn-call-to-action">SIGN UP</a>
                <a href="login.php" class="btn btn-call-to-action">LOGIN</a>
            </div>
        </div>
    </main>
    <?php include("../global/templates/footer.php") ?>
</body>

</html>