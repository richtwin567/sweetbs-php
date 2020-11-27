<?php
include("../data_classes/order_item.php");

header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Origin: *");


function toArray(OrderItem $oitem)
{
    return array("menuitemid"=>$oitem->getMenuItem(), "qty"=>$oitem->getQty());
}

try {
    //code...
//echo var_dump($_COOKIE);
//echo "json3\n";
echo json_encode(array_map('toArray',unserialize($_COOKIE['cart-order'])));
//echo "works";

} catch (\Throwable $th) {
    echo var_dump($th);
}

?>