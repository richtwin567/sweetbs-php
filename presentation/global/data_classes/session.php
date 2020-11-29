<?php 
class Session{

    public function __constructor()
    {
        session_start();
    }

    public function isLoggedIn()
    {
        return isset($_SESSION["user_id"]);
    }

    public function login(string $uname)
    {
        if (!$this->isLoggedIn()){
            $_SESSION["user_id"] = $uname;
        }

    }

    public function logout()
    {
        if ($this->isLoggedIn()) {
            unset($_SESSION["user_id"]);
        }
    }
}
?>