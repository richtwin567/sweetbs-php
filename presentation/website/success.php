<?php
include("../global/data_classes/session.php");
$session = new Session();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <meta name="description" content="">
    <link rel='stylesheet' href="../global/styles/global.css">
    <link rel='stylesheet' href="styles/success.css">

    <title>Order Sent Successfully</title>
</head>

<body>
    <?php include("../global/templates/header.php") ?>
    <main>
        <div id="success-div"><img src="../global/images/successful_purchase.svg" alt="success!">
            <h1>We have Received Your Order!</h1>
            <p>Your order will be delivered by Sunday, the latest.</p>
            <div id="next-actions"><a class="btn btn-call-to-action" href="menu.php">KEEP SHOPPING</a><a class="btn btn-regular" href="index.php">HOME</a></div>
        </div>
    </main>
    <?php include("../global/templates/footer.php"); ?>

</body>

</html>