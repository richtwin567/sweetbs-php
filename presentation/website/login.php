<?php
session_start();

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/auth.css">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script src="../../aggregation/accounts/login.js" type="module"></script>
    <script src="../../aggregation/data_classes/user.js" type="module"></script>
    <script src="../../persistence/db/documents.js" type="module"></script>
    <script src="" defer></script>
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <!-- Dynamic Content goes here-->
        <div id='login'>
            <h1>Hey! Welcome back!</h1>

            <form id="Loginform" action="" method="post">
                <label for='username'>Username</label><br>
                <input type='text' id='logusername' name="username"><br>
                <label for='password'>Password</label><br>
                <input type='password' id='logpassword' name="password"><br>
                <label for='remember'>Remember Me</label>
                <input type="checkbox" id="remember" value="true">
                <input type='submit' id='submit' class='btn btn-regular' value='sign-in'>
                <hr>
                <p>Don't have an account? <a href='register.php'>Sign Up</a></p>
                <p><a href='forgot_password.php'>Forgot password?</a></p>
            </form>

        </div>

        <img src="../global/images/login.jpg" id="feature-img">

    </main>
<?php include("../global/templates/footer.php");?>
</body>

</html>