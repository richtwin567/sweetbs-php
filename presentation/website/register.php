<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Register</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/register.css">
    <link rel="stylesheet" href="">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script src="../../aggregation/accounts/login.js"></script>
    <script src="../../aggregation/data_classes/user.js" type="module"></script>
</head>

<body>
    <?php include("../global/templates/header.php");?>
        <main>
            <!-- Dynamic Content goes here-->
            <form>

            <div id="register">
                <label>UserName</label><br />
                <input type="text" id="username" name="username" required aria-required="true" pattern="[A-Za-z0-9]+"><br />
                <label>Email</label><br />
                <input type="email" id="email" name="email" required aria-required="true"><br />
                <label>Password</label><br />
                <input type="password" id="password" name="password" required aria-required="true"></br />
                <label>Name</label><br />
                <input type="text" id="name" name="name" required aria-required="true"></br />
                <label>Default Delivery Address</label><br />
                <input type="text" id="address" name="address" required aria-required="true"></br />
                <input type="submit" id="submit" value="sumbit">
            </div>
            </form>
            <script>
                var username = document.getElementById("username")
                var email = document.getElementById("email")
                var password = document.getElementById("password")
                var name = document.getElementById("name")
                var address = document.getElementById("address")

                var ResgisteredCostumer = new Customer(username, email, password, name, address)
                console.log(ResgisteredCostumer.getRealName())
            </script>
        </main>
    <?php include("../global/templates/footer.php");?>
</body>

</html>