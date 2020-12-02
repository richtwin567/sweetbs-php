// Imports
import { MenuItem } from '../../aggregation/data_classes/menu_item.js';
import { OrderItem } from '../../aggregation/data_classes/order_item.js';

window.addEventListener('load', function () {
    console.log('I work');
    // Refresh the data for the collator every minute
    setInterval(updateCollator(), 60000);
});

/**
 * The main driver for the order collator. 
 * This function is run every minute to refresh the order collator with new orders
 */
async function updateCollator() {
    processCollapsibleOrders();

    // Initializing key variables
    let orderCount = document.getElementById('order-count');
    let ordersArr = await fetchOrders();
    let menuItems = await fetchMenuItems();

    // Update the number of orders
    orderCount.innerHTML = ordersArr.length;

    // Display basic order
    let orders = document.getElementById('new-orders');
    orders.innerHTML = '';
    for (let index = 0; index < ordersArr.length; index++) {
        // Create the array of order items to be displayed
        let orderItems = createOrderItemArray(ordersArr[index].items, menuItems);

        // Display the orders
        displayOrder(orders, index, ordersArr[index].customer, orderItems);
    }
}

function createOrderItemArray(orderItems, menuItems) {
    let orderItemArr = []
    for (let i = 0; i < orderItems.length; i++) {
        let menuItem = menuItemIdSearch(menuItems, orderItems[i].menuitem)
        if (menuItem !== null) {
            let orderItem = new OrderItem(menuItem, orderItems[i].qty);
            orderItemArr.push(orderItem);
        }
    }
    return orderItemArr;
}

function menuItemIdSearch(menuItems, desiredId) {
    for (const menuItem of menuItems) {
        if (menuItem.getId() === desiredId) {
            return menuItem;
        }
    }
    return null;
}

async function fetchMenuItems() {
    return await fetch("http://127.0.0.1:3000/menuitems", {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            var menulist = [];
            for (var el of data) {
                menulist.push(
                    new MenuItem(
                        el["_id"],
                        el["name"],
                        el["description"],
                        el["price"],
                        el["picturelink"],
                        el["ingredient_ids"]
                    )
                );
            }
            return menulist;
        })
        .catch((err) => console.log(err));
}

async function fetchOrders() {
    let response = await fetch('http://127.0.0.1:3000/orders');
    if (response.ok) {
        return response.json();
        // If any unexpected errors happen while fetching, an error is thrown
    } else {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}



/**
 * Displays the collapsible orders using event delegation
 */
function processCollapsibleOrders() {
    let newOrdersDiv = document.getElementById('new-orders');
    newOrdersDiv.addEventListener('click', function (event) {
        let element = event.target;
        // Traverse up the parent nodes
        let orderOverview = element.parentNode.parentNode.parentNode.nextElementSibling;
        if (element && element.classList.contains('show-hide')) {
            animateCollapsibleArrow(element);
            displayCollapsibleOrder(orderOverview);
        } else if (element.type === 'checkbox' && element.classList.contains('item-check')) {

            // Selecting the ul for the collapsible details
            let collapsibleDetails = element.parentNode.parentNode;
            let checkTick = collapsibleDetails.children[4].children[0];
            checkOffItem(element, checkTick);

        }else if (element.type == 'checkbox' && element.classList.contains('check-off')){
            let checkOffTick = element.parentNode.parentNode.nextElementSibling.children[0].children[0];
            checkOffOrder(element, checkOffTick);
        }

    });
}

function animateCollapsibleArrow(element) {
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        element.classList.add('unexpanded');
    } else {
        element.classList.remove('unexpanded');
        element.classList.add('expanded');
    }
}


function displayCollapsibleOrder(element) {
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + "px"
    }
}


/**
 * Checks off a menu item on the collator
 * @param {Number} itemNum The item number of the item being checked off.
 * @returns {Boolean} True if the item has been checked, and false if not
 */
function checkOffItem(checkbox, tick) {
    console.log('Im here');
    if (checkbox.checked) {
        tick.src = '../global/icons/done-24px.svg';
        return true;
    } else {
        tick.src = '../global/icons/grayed_done_check.png';
        return false;
    }
}

function checkOffOrder(checkbox, tick){
    if(checkbox.checked){
        tick.src = '../global/icons/done_all-black-48dp.svg'
    }else{
        tick.src = '../global/icons/grayed_checkmark.png'
    }
}


function createOrderBreakdown(orderItems) {
    let orderBreakdownHTML = ''
    for (const orderItem of orderItems) {
        orderBreakdownHTML += `
        <ul class='collapsible-details'>
            <li><input type='checkbox' class='item-check'></li>
            <li id='pastry'><img src='../global/images/cheesecake2.jpg'></li>
            <li>${orderItem.getMenuItem().getName()}</li>
            <li>${orderItem.getQty()}</li>
            <li><img src='../global/icons/grayed_done_check.png' class='order-tick'></li>
        </ul>`
    }

    return orderBreakdownHTML;
}


function displayOrder(ordersDiv, orderIndex, customerUsername, orderItems) {
    let orderBreakdownHTML = createOrderBreakdown(orderItems);
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
                <li class='show-hide'><img src='../global/icons/expand_more-black-48dp.svg' class='show-hide'></li>
            </ul>
        </div>
        <div class='collapsible-wrapper'>
            <ul class='collapsible-header'>
                <li>Pastry</li>
                <li>Description</li>
                <li>Quantity</li>
            </ul>
            <hr>
            ${orderBreakdownHTML}
        </div>
    </div>`;


    ordersDiv.innerHTML += orderOverviewHTML;
}