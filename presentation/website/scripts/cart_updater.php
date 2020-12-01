<?php
include("../../../aggregation/data_classes/order_item.php");
if (isset($_COOKIE["cart-order"])) {
    $orderlist = unserialize($_COOKIE["cart-order"]);

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data["newqty"])) {

        foreach ($orderlist as $oitem) {
            if ($oitem->getMenuItem() == $data["id"]) {
                $oitem->setQty($data["newqty"]);
            }
        }
        setcookie("cart-order", serialize($orderlist), 0, "/");
    }
    if (isset($data["remove"])) {

        foreach ($orderlist as $oitem) {
            if ($oitem->getMenuItem() == $data["id"]) {
                $index = array_search($oitem, $orderlist);
                unset($orderlist[$index]);
            }
        }
        setcookie("cart-order", serialize($orderlist), 0, "/");
    }

}
