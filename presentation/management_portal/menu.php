<?php
include("../global/data_classes/session.php");
$session = new Session();
$user = $session->whoIsLoggedIn();
?>
<?php if($user!=null && $user->getType()=="Admin"):?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Menu Manager</title>
    <meta name="description" content="">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./styles/main.css">
    
</head>

<body>

<!--Top navigation-->

<div class="topnav">
      <div class="top-navleft">
        <!--  <img src="https://www.kindpng.com/picc/m/276-2764257_instagram-logo-small-size-hd-png.png"> -->

      </div>
      <div class="name">
          <h6>Admin Portal</h6><br>
      </div>


     
     
     <div class="topnav-right">
         <a href="active"><i class="fa fa-bell"></i></a>
         <a href="#home"><i class="fa fa-home"></i></a>
         <a href="#user"><i class="fa fa-user-circle"></i></a>
         <a href="#signout"><i class="fa fa-power-off"></i></a>
     </div>
 </div>


  <!--Side navigation-->
  <div class="sidenav">
      <ul type="disk">

        <li><a href="#dashboard"><i class="fa fa-square"></i>Dashboard</a></li>
        <li><a href="#orders"><i class="fa fa-users"></i>Orders</a></li>
        <li><a href="#shoppinglist"><i class="fa fa-truck"></i> Shopping List</a></li>
        <li><a href="menumanager.html"><i class="fa fa-bars"></i> Menu Manager</a></li>

      </ul>
  </div>






</body>

</html>


<?php endif;?>

<?php 

if($user==null || $user->getType()=="Customer"){
    include("../global/templates/access_denied.php");
}

?>