<?php
session_start();
/*if(session.isLoggedin()){
    $user = $_SESSION["user"];
    $fname = $user.getRealname().getFirstName();
    $lname = $user.getRealname().getLastName();
    $email = $user.getEmail();
    $address = $user.getDeliveryAddress().getAddress();
    $cardname = $user.getCard().getNameOnCard();
    $cardnum = substr($user.getCard().getCardNumber(), -4); //Returns the last four digits of the card number
}*/
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Account Details</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/customer_account.css">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script src="../../aggregation/accounts/customer_accounts.js" type="module"></script>
    <script src="../../aggregation/data_classes/user.js" type="module"></script>
</head>

<body>
    <?php include("../global/templates/header.php"); ?>
    <main>
        <div id="mutli-section">
            <div id="nav-panel">
                <a href="#section1">Personal</a><br /><br />
                <a href="#section2">Card Info</a><br /><br />
                <a href="#section3">Saved Carts</a><br /><br />
                <a href="#section4">Account Actions</a><br /><br />
            </div>
            <div id="sign-up-div">
                <!-- Dynamic Content goes here-->
                <form id="Updateform" action="" method="post">
                    <section id="section1">
                        <div id="realname">
                            <div>
                                <label for="fname">First name</label>
                                <input type="text" name="fname" id="fname" value= "<?php //echo $fname; ?>">
                            </div>
                            <div>
                                <label for="lname">Last name</label>
                                <input type="text" name="lname" id="lname" <?php //echo $lname; ?>>
                            </div>
                        </div> 
                        <div id="email-pass-addr-group">
                            <label>Email</label>
                            <input type="email" id="email" name="email" required aria-required="true" value= "<?php //echo $email; ?>">
                            <label>Default Delivery Address</label>
                            <textarea name="address" id="address" cols="30" rows="10" value="<?php //echo $address; ?>"></textarea>
                            <label>Password</label>
                            <input type="password" id="password" name="password" required aria-required="true" value="**********">
                        </div>   
                    </section>
                    <section id="section2">
                        <h4>Card Information</h4>
                        <div id="card-num-name-group">
                            <div>
                                <label for="name-on-card">Name on Card</label>
                                <input type="text" name="name-on-card" id="name-on-card" value="<?php //echo $cardname; ?>">
                                <label for="card-num">Card number</label>
                                <input type="number" name="card-num" id="card-num" value="<?php //echo "(Last four digits)" . $cardnum; ?>">
                            </div>
                            <div>
                        
                            </div>
                        </div>
                        <div id="cvv-expiry-date-group">
                            <div>
                                <label for="expiry-date">Expiry Date</label>
                                <input type="date" me="expiry-date" id="expiry-date">
                            </div>
                            <div>
                                <label for="cvv">CVV</label>
                                <input type="number" name="cvv" id="cvv">
                            </div>
                        </div>
                    </section>
                    <section id="section3">
                        <div id="carts-table">
                            <h4>My Saved Carts</h4>
                            <table>
                                <tr>
                                <td id="td1">Cart 1</td>
                                <td id="td2">icons</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                    <section id="section4">
                        <h4>Account Actions</h4>
                        <div id="action-btn">
                            <div>
                                <input type="submit" id="delete" value="DELETE ACCOUNT" class="warning-btn">
                            </div>
                            <div>
                                <input type="submit" id="reset" value="RESET ACCOUNT" class="warning-btn">
                            </div>
                        </div>
                    </section>
                    <hr>
                    <!-- <div id="has-account">
                         <p>Already have an account? </p>
                        <a id="to-login-link" href="login.php">Login</a> 
                    </div> -->
                </form>
            </div>
        </div>
    </main>
    <?php include("../global/templates/footer.php"); ?>
</body>

</html>