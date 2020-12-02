<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Contact</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/contact.css">
    <link rel='stylesheet' href="../global/styles/global.css">
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <!-- Dynamic Content goes here-->
        <div id="contact">
            <h1 id="page-title">Contact Us</h1>
            <div id="contact-info">
                <img src="../global/icons/email-purple-48dp.svg" alt="email address">
                <a href="mailto:sweetbs@gmail.com">sweetbs@gmail.com</a>
                <img src="../global/icons/call-purple-48dp.svg" alt="phone number">
                <a href="tel:+18764552321">+1 (876) 455-2321</a>
            </div>
            <img id="contact-us-image" src="../global/images/contact.svg" alt="contact us">
        </div>
        <div id="send-message">
            <h2>Send Us a Message</h2>
            <form id="message-form">
                <label for="sender-name">Name</label>
                <input type="text" name="sender-name" id="sender-name" required>
                <label for="sender-email">Email</label>
                <input type="email" name="sender-email" id="sender-email" required>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            </form>
            <input form="message-form" id="message-submit-btn" type="submit" value="SEND" class="btn btn-outline">
        </div>

    </main>
    <?php include("../global/templates/footer.php"); ?>
</body>

</html>