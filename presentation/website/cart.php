<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/cart.css">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script type="module" src="scripts/cart.js" defer></script>
</head>

<body>
    <?php include("../global/templates/header.php");?>
    <main>
        <!-- Dynamic Content goes here-->
        <?php include("../global/scripts/spinner.php");?>
        <div id="shopping-cart-div">
            <div id="page-title-div">
                <h2 id="page-title"></h2>
            </div>
            <table id="cart-list"></table>
            <div id="card-and-checkout">
                <div id="card"></div>
                <div id="checkout"></div>
            </div>
        </div>

    </main>
    <?php include("../global/templates/footer.php");?>
</body>

</html>