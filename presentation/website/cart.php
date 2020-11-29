<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Shopping Cart</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/cart.css">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script type="module" src="scripts/cart.js" defer></script>
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <!-- Dynamic Content goes here-->
        <div id="shopping-cart-div">
            <div id="page-title-div">
                <h2 id="page-title">Your Cart</h2>
            </div>
            <?php include("../global/scripts/spinner.php"); ?>

            <div id="cart-list"></div>
            <div id="card-and-checkout">
                <div class="cpanel" id="card">
                    <h3 class="panel-title">Card Details</h3>
                    <form action="#">
                        <label for="name-on-card">Name on Card</label>
                        <input type="text" name="name-on-card" id="name-on-card" required>
                        <label for="card-num">Card Number</label>
                        <input type="number" id="card-num" name="card-num" required>
                        <div id="exp-cvv-group">
                            <label for="exp-date">Expiration Date</label>
                            <label for="cvv">CVV</label>
                            <input type="date" name="exp-date" id="exp-date" required>
                            <input type="number" name="cvv" id="cvv" max="999" required>
                        </div>
                    </form>
                    <div id="card-ok-div"><button id="card-ok" class="btn btn-regular">OK</button></div>
                </div>
                <div class="cpanel" id="checkout">
                    <h3 class="panel-title">Checkout</h3>
                    <div id="checkout-table">
                        <div>
                            <p>Subtotal</p>
                            <p class="subtotal"></p>
                        </div>
                        <div>
                            <p>Shipping</p>
                            <p id="shipping"></p>
                        </div>
                        <hr>
                        <div id="total-row">
                            <p>Total</p>
                            <p id="grand-total"></p>
                        </div>
                    </div>
                    <div id="checkout-btn-div">
                        <input type="submit" value="CHECKOUT" id="checkout-btn" name="checkout-btn" class="btn btn-regular"></div>
                </div>
            </div>
        </div>

    </main>
    <?php include("../global/templates/footer.php"); ?>
</body>

</html>