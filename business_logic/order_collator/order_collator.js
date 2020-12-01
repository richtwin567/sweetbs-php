// Imports
window.addEventListener('load', function(){
    console.log('I work');
    // Refresh the data for the collator every minute
    updateCollator()
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
    checkOffItem();
    displayCollapsibleOrder();
    let orderCount = document.getElementById('order-count');
    let ordersArr = await fetchOrders();

    // Update the number of orders
    orderCount.innerHTML = ordersArr.length;

    // Display basic order
    let orders = document.getElementById('new-orders');
    // orders.innerHTML = '';
    for(let index =0; index < ordersArr.length; index++){
        displayOrder(orders, index, ordersArr[index].customer, null, 0);
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

/**
 * Checks off a menu item on the collator
 * @param {Number} itemNum The item number of the item being checked off.
 * @returns {Boolean} True if the item has been checked, and false if not
 */
function checkOffItem(){
    let checkOffItem = document.getElementsByClassName(`item-check`);
    let checkOffTick = document.getElementsByClassName(`order-tick`);
    for(let i=0; i < checkOffItem.length; i++){
        checkOffItem[i].addEventListener('change', function(){
            if(this.checked){
                checkOffTick[i].src = '../global/icons/done-24px.svg';
                return true;
            }else{
                checkOffTick[i].src = '../global/icons/grayed_done_check.png';
                return false;
            }
        });
    }
}

async function displayCollapsibleOrder(){
    let showHide = document.getElementsByClassName('show-hide');
    let orderOverview = document.getElementsByClassName('order-grid-wrap');
    for(let i=0; i < showHide.length; i++){
        
        showHide[i].addEventListener('click', function (){
            // Rotate icon
            if(showHide[i].classList.contains('expanded')){
                showHide[i].classList.remove('expanded');
                showHide[i].classList.add('unexpanded');
            }else{
                showHide[i].classList.remove('unexpanded');
                showHide[i].classList.add('expanded');  
            }
            let content = orderOverview[i].nextElementSibling;
            console.log(content);
            console.log(content.style.maxHeight);
           // console.log(content);
            if(content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px"
            }
        });
    }
}

function createOrderBreakdown(menuItem, quantity){
    let orderBreakdownHTML= `
    <ul class='collapsible-details'>
        <li><input type='checkbox' class='item-check'></li>
        <li id='pastry'><img src='../global/images/cheesecake2.jpg'></li>
        <li>${menuItem.getName()}</li>
        <li>${quantity}</li>
        <li><img src='../global/icons/grayed_done_check.png' class='order-tick'></li>
    </ul>`
    return orderBreakdownHTML;
}

function displayOrder(ordersDiv, orderIndex, customerUsername, menuItem, quantity){
    let orderBreakdownHTML = '';
    let orderOverviewHTML = `
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
        <div class='collapsible-wrapper'>
            <ul class='collapsible-header'>
                <li>Pastry</li>
                <li>Description</li>
                <li>Quantity</li>
            </ul>
            <hr>
            ${orderBreakdownHTML};
        </div>
    </div>`;
    // Temporarily making this an empty string

    
    ordersDiv.innerHTML += orderOverviewHTML;
}