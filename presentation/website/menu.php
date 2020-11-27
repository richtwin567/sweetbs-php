<?php

include("../../aggregation/data_classes/order_item.php");
//echo var_dump($_POST);
try {
    $mid = filter_var($_POST["itemid"], FILTER_SANITIZE_STRING);
    $qty = filter_var($_POST["qty"], FILTER_SANITIZE_NUMBER_INT);
    $isNewItem = TRUE;
    if (isset($_COOKIE["cart-order"])) {
        $orderlist = unserialize($_COOKIE["cart-order"]);
        //print_r ($orderlist);
        foreach ($orderlist as $oitem) {
            if ($oitem->getMenuItem() == $mid) {
                $oitem->setQty($oitem->getQty() + $qty);
                $isNewItem = FALSE;
            }
        }
        if ($isNewItem) {
            $newOrderItem = new OrderItem($mid, $qty);
            array_push($orderlist, $newOrderItem);
        }
        //print_r ($orderlist);
        setcookie("cart-order", serialize($orderlist), 0, "/");
    } else {
        $orderlist = array();
        $newOrderItem = new OrderItem($mid, $qty);
        array_push($orderlist, $newOrderItem);
        setcookie("cart-order", serialize($orderlist), 0, "/");
    }
    header("Location: menu.php");
    die();
} catch (\Throwable $th) {
    //throw $th;
    //echo var_dump($_COOKIE);
    //print_r($th);

}
?>

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