<?php
session_start();
include("../global/data_classes/session.php");
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>About</title>
    <meta name="description" content="">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='stylesheet' href="../global/styles/global.css">
    <link rel="stylesheet" href="styles/about.css">
</head>


<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <div id="story-logo"><img src="../global/client/Logo no bg.png" alt="sweetb's logo"></div>
        <div id="story-details">
            <h1 id="page-title">Our Story</h1>
            <p></p>
        </div>
    </main>
    <?php include("../global/templates/footer.php"); ?>
</body>

</html>