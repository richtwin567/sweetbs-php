<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/auth.css">
    <link rel='stylesheet' href="../styles/global.css">
    <script src="" defer></script>
</head>

<body>
    <?php include("../templates/header.php"); ?>
    <main>
        <!-- Dynamic Content goes here-->
        <div id='login'>
            <h1>Hey! Welcome back!</h1>

            <form>
                <label for='username'>Username</label><br>
                <input type='text' id='username' name="username"><br>
                <label for='password'>Password</label><br>
                <input type='password' id='password' name="password"><br>
                <label for='remember'>Remember Me</label>
                <input type="checkbox" id="remember" value="true">
                <input type='submit' class='btn btn-regular' value='sign-in'>
                <hr>
                <p>Don't have an account? <a href='register.html'>Sign Up</a></p>
                <p><a href='#'>Forgot password?</a></p>
            </form>

        </div>

        <div id="feature-img"></div>

    </main>
<?php include("../templates/footer.php");?>
</body>

</html>