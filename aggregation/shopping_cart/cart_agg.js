
class OrderItem
{
    constructor(id, qty = 1)
    {
        this.qty = qty;
        this.menuitemid = id;
    }

    get getQty()
    {
        return this.qty;
    }

    get getMenuItemId()
    {
        return this.menuitemid;
    }
}

async function getCartCookie() {
	return await fetch("../../aggregation/shopping_cart/cart_php_to_js.php")
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.log(err));
}

export {getCartCookie,OrderItem};