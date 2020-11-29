<nav id='main'>
    <img id="logo" src='../global/client/sweet-b-long.png' alt='sweet-b-long'>
    <ul id="nav-links">
        <li><a href='index.php'>HOME</a></li>
        <li>
            <div class="nav-separator"></div>
        </li>
        <li><a href='menu.php'>SHOP</a></li>
        <li>
            <div class="nav-separator"></div>
        </li>
        <li><a href='menu.php'>MENU</a></li>
        <li>
            <div class="nav-separator"></div>
        </li>
        <li><a href='contact.php'>CONTACT US</a></li>
        <li>
            <div class="nav-separator"></div>
        </li>
        <li><a href='about.php'>ABOUT</a></li>
    </ul>
    <div id='nav-icons'>
        <!--Shopping Cart SVG-->
        <a id="shopping-cart-nav-link" href="cart.php">

            <div id="shopping-cart-icon">
                <span id="cart-counter"><?= is_array(unserialize($_COOKIE["cart-order"])) ? count(unserialize($_COOKIE["cart-order"])) : 0 ?></span>
            </div>
        </a>
        <!--Profile SVG-->
        <a id="account-nav-link" href="#">
            <div id="account-icon"></div>
        </a>
    </div>
</nav>