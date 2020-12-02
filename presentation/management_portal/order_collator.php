<?php
session_start();
include_once("../../aggregation/data_classes/user.php");
$user = unserialize($_SESSION["user"]);
?>

<?php if($user!=null && $user->getType()=="Admin"):?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Management Portal</title>
    <meta name="description" content="">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./styles/portal.css">
    <link rel="stylesheet" href="./styles/order_collator.css">
    <script src='../../business_logic/order_collator/order_collator.js' type='module'></script>
</head>

<body>
    <?php include("../global/templates/portal_header.php") ?>
    <?php include("../global/templates/portal_sidebar.php") ?>
    <section id='portal-sections'>
        <div id='collator-grid'>
            <div id='overview'>
                <h1>Overview</h1>
                <ul id='order-stats'>
                    <li>Order Count:</li>
                    <li id='order-count'>0</li>
                    <li>Completed Orders:</li>
                    <li id='completed-orders'>0</li>
                    <li>Pending Orders:</li>
                    <li id='pending-orders'>0</li>
                </ul>
            </div>
            <div id='orders'>
                <div id='search-flex'>
                    <h2>Orders</h2>
                    <input type="text" placeholder="Search.." id='search'>
                    <button class='btn'>Show Completed</button>
                </div>
                
                <div id='order-breakdown'>
                    <div id='breakdown-header'>
                    <ul id='breakdown-list'>
                        <li>#</li>
                        <li>Order ID</li>
                        <li>Customer</li>
                    </ul>
                    <p>Completed</p>
                    </div>
                    <hr>
                    <div id='new-orders'>
                    </div>  
                </div>
            </div>
        </div>
    </section>
</body>

</html>

<?php endif;?>

<?php 

if($user==null || $user->getType()=="Customer"){
    include("../global/templates/access_denied.php");
}
?>