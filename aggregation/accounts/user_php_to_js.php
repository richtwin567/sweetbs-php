<?php
session_start();

include("../data_classes/user.php");
include("../../presentation/global/data_classes/session.php");

header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Origin: *");


try {
    $session = new Session();
    if ($session->isLoggedIn()) {
        $user = $session->whoIsLoggedIn();
        if ($user->getType() == "Customer") {
            echo json_encode(array(
                "username" => $user->getUsername()
            ));
        }else{
            echo "";
        }
    }else{
        echo "";
    }
    die();
} catch (\Throwable $th) {
    //throw $th;
}
?>