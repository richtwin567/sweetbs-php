<?php 
/* Create a new order with attached customer id*/
$sql = "INSERT INTO `orders` (`id`, `customer`) VALUES (NULL, \'1\')";

/* Insert 2 orderitems attached to the same order but with different menuitem id's */
$sql = "INSERT INTO `orderitems` (`id`, `qty`, `menuItem`, `orderid`) VALUES (NULL, \'5\', \'6\', \'10\'), (NULL, \'2\', \'1\', \'10\')";

/* 
Get order details - orderItemId, menuItemId, qty, orderId, customer id

outputs something like this:

details
{"orderID": 10, "menuItems": [{"qty": 5, "menuItemId": 6}, {"qty": 2, "menuItemId": 1}], "customerId": 1}
*/
$sql = <<<EOT
SELECT
    JSON_OBJECT(
        "customerId",
        orders.customer,
        "orderID",
        orders.id,
        "menuItems",
        JSON_ARRAYAGG(
            JSON_OBJECT(
                "menuItemId",
                orderitems.menuItem,
                "qty",
                orderitems.qty
            )
        )
    ) as details
FROM
    orderitems
    JOIN orders ON orderitems.orderid = orders.id
GROUP BY
    orders.id
EOT;

/* Get the list of ingredients for each menu item */
$sql = <<<EOT
SELECT
      JSON_OBJECT(
        "menuItemId",
        menuitem_ingredients.menuItemId
        "ingredients",
        JSON_ARRAYAGG(menuitem_ingredients.ingredientId)
      ) as menuIngredients
FROM
      menuitems
      JOIN menuitem_ingredients ON menuitem_ingredients.menuItemId = menuitems.id
      JOIN ingredients ON menuitem_ingredients.ingredientId = ingredients.id
GROUP BY
      menuitem_ingredients.menuItemId
EOT;