// Imports
import { MenuItem } from '../../aggregation/data_classes/menu_item.js';
import { OrderItem } from '../../aggregation/data_classes/order_item.js';

// Declaring global variables
var completedCount = 0;
var pendingCount = 0;
var completed = document.getElementById('completed-orders');
var pending = document.getElementById('pending-orders');

window.addEventListener('load', function() {
    // Refresh the data for the collator every minute
    console.log('I still work');
    setInterval(updateCollator(), 5000);
});

/**
 * The main driver for the order collator. 
 * This function is run every minute to refresh the order collator with new orders
 */
async function updateCollator() {
    // Initializing key variables
    let orderCount = document.getElementById('order-count');
    let ordersArr = await fetchOrders();
    let menuItems = await fetchMenuItems();
    let totalOrders = ordersArr.length;
    pendingCount = totalOrders;

    // Update the number of orders
    orderCount.innerHTML = totalOrders;
    completed.innerHTML = completedCount;
    pending.innerHTML = pendingCount;

    // Handle the collapsible orders
    processCollapsibleOrders();

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
    return await fetch("https://sweetbs-backend.herokuapp.com/menuitems", {
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
    let response = await fetch('https://sweetbs-backend.herokuapp.com/orders');
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
    newOrdersDiv.addEventListener('click', function(event) {
        let element = event.target;
        // Traverse up the parent nodes
        let orderOverview = element.parentNode.parentNode.parentNode.nextElementSibling;

        // Select
        if (element && element.classList.contains('show-hide')) {
            animateCollapsibleArrow(element);
            displayCollapsibleOrder(orderOverview);
        } else if (element.type === 'checkbox' && element.classList.contains('item-check')) {

            // Selecting the ul for the collapsible details
            let collapsibleDetails = element.parentNode.parentNode;
            let checkTick = collapsibleDetails.children[4].children[0];
            // console.log(collapsibleDetails.parentNode);
            checkOffItem(element, checkTick);

        } else if (element.type == 'checkbox' && element.classList.contains('check-off')) {
            let tickParent = element.parentNode.parentNode;
            let checkOffTick = tickParent.nextElementSibling.children[0].children[0];
            checkOffOrder(tickParent, element, checkOffTick);
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
    if (checkbox.checked) {
        tick.src = '../global/icons/done-24px.svg';
        return true;
    } else {
        tick.src = '../global/icons/grayed_done_check.png';
        return false;
    }
}

function checkOffOrder(tickParent, checkbox, tick) {
    if (checkbox.checked) {
        completedCount += 1;
        console.log(completedCount);
        pendingCount -= 1;
        tickParent.classList.add('checked-off');
        tick.src = '../global/icons/done_all-blue-48dp.svg'
    } else {
        completedCount -= 1;
        pendingCount += 1;
        tick.src = '../global/icons/done_all-grey-48dp.svg'
        tickParent.classList.remove('checked-off');
    }

    // Update the values in the overview section
    completed.innerHTML = completedCount;
    pending.innerHTML = pendingCount;
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
                <li><img src="../global/icons/done_all-grey-48dp.svg" alt='done all'></li>
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