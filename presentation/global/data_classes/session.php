<?php 
include_once("../../aggregation/data_classes/user.php");
class Session{

    public function __constructor()
    {
        session_start();
    }

    public function isLoggedIn()
    {
        return isset($_SESSION["user"]);
    }

    public function login(User $user)
    {
            $_SESSION["user"] = serialize($user);
    }

    public function logout()
    {
            unset($_SESSION["user"]);
            session_destroy();
    }

    public function whoIsLoggedIn(){
        return unserialize($_SESSION["user"]);
    }

}
