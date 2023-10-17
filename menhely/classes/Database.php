<?php

class Database {

    private $db = null;

    public function __construct($host, $username, $pass, $db) {
        $this->db = new mysqli($host, $username, $pass, $db);
    }

    public function login($name, $pass) {
        //-- jelezzük a végrehajtandó SQL parancsot
        $stmt = $this->db->prepare('SELECT * FROM users WHERE users.user LIKE ?;');
        //-- elküldjük a végrehajtáshoz szükséges adatokat
        $stmt->bind_param("s", $name);

        if ($stmt->execute()) {
            //-- sikeres végrehajtás után lekérjük az adatokat
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            echo '<pre>';
            var_dump($row);
            var_dump(password_hash($pass, PASSWORD_ARGON2I));
            echo '</pre>';
            if ($pass == $row['password']) {
                //-- felhasználónév és jelszó helyes
                $_SESSION['username'] = $row['name'];
                $_SESSION['login'] = true;
            } else {
                $_SESSION['username'] = '';
                $_SESSION['login'] = false;
            }
            // Free result set
            $result->free_result();
            header("Location:index.php");
        }
        return false;
    }
    public function register($name, $pass) {
        //$password = password_hash($pass, PASSWORD_ARGON2I);
        $stmt = $this->db->prepare("INSERT INTO `users` (`name`, `password`) VALUES (?, ?);");
        $stmt->bind_param("ss", $name, $pass);
        if ($stmt->execute()) {
            //echo $stmt->affected_rows();
            $_SESSION['login'] = true;
            //header("Location: index.php");
        } else {
            $_SESSION['login'] = false;
            echo '<p>Rögzítés sikertelen!</p>';
        }
    }
    public function osszesAllat() {
        $result = $this->db->query("SELECT * FROM `allat`");
        return $result->fetch_all(MYSQLI_ASSOC);
    }
    public function kivalasztottAllat($id) {
        $result = $this->db->query("SELECT * FROM `allat` WHERE allatid=".$id);
        return $result->fetch_assoc();
    }
    public function getFajok() {
        $result = $this->db->query("SELECT DISTINCT `faj` FROM `allat`;");
        return $result->fetch_all();
    }
       public function getFajtak() {
        $result = $this->db->query("SELECT DISTINCT `fajta` FROM `allat`;");
        return $result->fetch_all();
    }
}
