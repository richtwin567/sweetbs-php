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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./styles/main.css">
    
</head>

<body>

<div class="navbar">
      <img src="logo.jpg" alt="logo">
      <div class="right">
        <a href="#"><i class="fa fa-bell"></i></a> 
        <a href="#"><i class="fa fa-home"></i></a> 
       <a href="#"><i class="fa fa-user-circle-o"></i></a> 
        <a href="#"><i class="fa fa-power-off"></i></a>
      </div>
    </div>

    <div class="row">
      <div class="leftcolumn">
        <a href="#"><i class="fa fa-th-large" aria-hidden="true"></i> <span>Dashboard</span></a>
        <a href="#"><i class="fa fa-users" aria-hidden="true"></i> <span>Orders</span></a>
        <a href="#"><i class="fa fa-truck" aria-hidden="true"></i> <span>Shopping List</span></a>
        <a href="#"><i class="fa fa-list-ul" aria-hidden="true"></i> <span>Menu Manager</span></a>
      </div>
      <div class="rightcolumn">
        <h2>Menu Manager</h2>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>

        <div class="card">
          <div class="card-top">
            <a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <img src="cheesecake1.jpg" alt="cheese cake" >
          <p>Item name</p>
          <p>Item Description</p>
          <p><button>$###.##</button></p>
        </div>
        
        <div class="card-plus">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    





</body>

</html>


<?php endif;?>

<?php 

if($user==null || $user->getType()=="Customer"){
    include("../global/templates/access_denied.php");
}

?>
