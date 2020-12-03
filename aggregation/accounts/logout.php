<?php
session_start();

include_once("../data_classes/user.php");
include_once("../../presentation/global/data_classes/session.php");

header("Access-Control-Allow-Methods: GET,POST, OPTIONS");
header("Access-Control-Allow-Origin: *");
try {
    session_destroy();
    echo "logout sucessful";
    die();    
} catch (\Throwable $th) {
    //throw $th;
}
?>