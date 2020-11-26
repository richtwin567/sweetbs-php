<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/menu.css">
    <link rel='stylesheet' href="../global/styles/global.css">
    <script type="module" src="scripts/menu.js" defer></script>
</head>

<body>
    <?php include("../global/templates/header.php") ?>

    <main>
        <?php include("../global/scripts/spinner.php") ?>

        <!-- Dynamic Content goes here-->
        <div id="menu-content">
            <section id="filter"></section>
            <section id="menu"></section>
        </div>
    </main>
    <?php include("../global/templates/footer.php") ?>
</body>

</html>