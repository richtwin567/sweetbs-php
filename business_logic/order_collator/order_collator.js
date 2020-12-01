// Imports

import { OrderDocuments } from '../../persistence/db/documents.js';
import { MenuItem } from '../../aggregation/data_classes/menu_item';

window.addEventListener('load', function(){
    console.log('I work');
    updateCollator();
    // Refresh the data for the collator every two minutes
    setInterval(updateCollator, 120000);
});  


// This function exists solely to be exported to the dashboard
function getOrdersAmount(ordersARr){

}

async function updateCollator(){
    let orderCount = document.getElementById('order-count');
    let ordersArr = await fetchOrders();

    // Update the number of orders
    orderCount.innerHTML = ordersArr.length;
}

async function fetchMenuItem(itemID){
    let response = await fetch(`http://127.0.0.1:3000/?_id=${itemID}`);
    if (response.ok){
        return response.json();
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}

function parseMenuItemData(menuItem){

}

async function fetchOrders(){
    let response = await fetch('http://127.0.0.1:3000/orders');
    if (response.ok){
        return response.json();
    // If any unexpected errors happen while fetching, an error is thrown
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}
