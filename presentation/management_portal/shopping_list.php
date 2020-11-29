<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Management Portal</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./styles/portal.css">
    <link rel="stylesheet" href="./styles/shopping_list.css">
</head>

<body>
    <?php include("../global/templates/portal_header.php") ?>
    <?php include("../global/templates/portal_sidebar.php") ?>
    <div id="portal-sections">
        <section id='shopping-list' class='visible'>
            <div id="shopcont">
                <h1>Shopping List</h1>
                <div id="innercont">
                    <div id="header">
                        <h2>Item</h2>
                        <h2>Description</h2>
                        <h2>Quantity</h2>
                    </div>
                </div>
                <button id="genbtn">Generate List</button>
            </div>
        </section>
        <section id='menu-manager'>

        </section>
    </div>
</body>

</html>