<body>
    <div class="container">
        <?php
        require_once('menu.php');
        switch ($menuItem) {
            case 'home':
                require_once('home.php');
                break;
            case 'termekek':
                require_once('termekek.php');
                break;
            case 'login':
                require_once('login.php');
                break;

            default:
                echo "Üdvözöllek az oldalon";
                break;
        }
        ?>
    </div>
    <h1>Welcome</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>

</html>