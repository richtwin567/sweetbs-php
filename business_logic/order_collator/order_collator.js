// Imports
window.addEventListener('load', function(){
    console.log('I work');
    updateCollator();
    // Refresh the data for the collator every minute
    setInterval(updateCollator, 60000);
});  


// This function exists solely to be exported to the dashboard
function getOrdersAmount(ordersARr){

}

/**
 * The main driver for the order collator. 
 * This function is run every minute to refresh the order collator with new orders
 */
async function updateCollator(){
    let orderCount = document.getElementById('order-count');
    let ordersArr = await fetchOrders();

    // Update the number of orders
    orderCount.innerHTML = ordersArr.length;

    // Display basic order
    let orders = document.getElementById('new-orders');
    orders.innerHTML = '';
    for(let index =0; index < ordersArr.length; index++){
        displayOrder(orders, index, ordersArr[index].customer);
    }
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

function displayOrder(ordersDiv, orderIndex, customerUsername){
    let orderHTML = `
    <div class='order' id='order-no-${orderIndex}'>
    <div class='order-grid-wrap'>
        <ul class='visible-order'>
            <li><input type='checkbox' class='check-off'></li>
            <li>${orderIndex}</li>
            <li>${customerUsername}</li>
        </ul>
        <ul class='visible-order'>
            <li><img src='../global/icons/grayed_checkmark.png'></li>
            <li class='show-hide'><img src='../global/icons/expand_more-black-48dp.svg'></li>
        </ul>
    </div>
</div>`;
    ordersDiv.innerHTML += orderHTML;
}

function displayOrderDetail