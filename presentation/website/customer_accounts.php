<?php
include("../global/data_classes/session.php");
$session = new Session();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Register</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/register.css">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script src="../../aggregation/accounts/login.js" type="module"></script>
    <script src="../../aggregation/data_classes/user.js" type="module"></script>
    <script src="../../persistence/db/documents.js" type="module"></script>
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <div id="sign-up-div">
            <!-- Dynamic Content goes here-->
            <form id="Updateform" action="" method="post">
                <section>
                    <div id="realname">
                        <div>
                            <label for="fname">First name</label>
                            <input type="text" name="fname" id="fname">
                        </div>
                        <div>
                            <label for="lname">Last name</label>
                            <input type="text" name="lname" id="lname">
                        </div>
                    </div>
                        

                <h4>Card Details</h4>
                <div id="card-num-cvv-group">
                    <div>
                        <label for="card-num">Card number</label>
                        <input type="number" name="card-num" id="card-num">
                    </div>
                    <div>
                        <label for="cvv">CVV</label>
                        <input type="number" name="cvv" id="cvv">
                    </div>
                </div>
                <div id="name-expiry-date-group">
                    <div>
                        <label for="name-on-card">Name on Card</label>
                        <input type="text" name="name-on-card" id="name-on-card">
                    </div>
                    <div>
                        <label for="expiry-date">Expiry Date</label>
                        <input type="date" me="expiry-date" id="expiry-date">
                    </div>
                </div>
                <input type="submit" id="submit" value="Sign up" class="btn btn-regular">
                <hr>
                <div id="has-account">
                    <p>Already have an account? </p>
                    <a id="to-login-link" href="login.php">Login</a>
                </div>
            </form>
        </div>

    </main>
    <?php include("../global/templates/footer.php"); ?>
</body>

</html>