<?php

include_once("../data_classes/user.php");
include_once("../../presentation/global/data_classes/session.php");

header("Access-Control-Allow-Methods: GET,POST, OPTIONS");
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents('php://input'), true);
try {

    if ($data["type"] == "Customer") {
        $user = new Customer($data["username"], $data["email"], $data["password"], $data["card"], $data["realname"], "");
    }else{
        $user = new Admin($data["username"],$data["email"],$data["password"]);
    }

    $session=new Session();
    if(!$session->isLoggedIn()){
        $session->login($user);
    }

    echo "ok";
} catch (\Throwable $th) {
    //throw $th;
}
