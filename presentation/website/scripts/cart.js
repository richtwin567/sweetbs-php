import {getCartCookie} from "../../../aggregation/shopping_cart/cart_agg.js"
import {getMenuItems} from "../../../aggregation/menu/menu_agg.js";
//console.log(document.cookie);

getCartCookie().then(res=>{console.log(res);
if (res.length>0){
    for (const oitem of res) {
        
    var string  = "?_id="+oitem["menuitemid"];
    console.log(string);
    getMenuItems(string).then(t=>console.log(t));
    }
}
});