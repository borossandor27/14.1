<h1>Nyitólap</h1>
<div class="row">
    <?php
    foreach ($db->osszesAllat() as $row) {
        $card = '<div class="card" style="width: 18rem;">
                    <img src="./images/noimage.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">' . $row['allat_neve'] . '</h5>' .
                            '<p class="card-text">született: ' . $row['szuletesi_ido'] . '</p>' .
                            '<p class="card-text">nálunk: ' . $row['nyilvantartasban'] . '</p>' .
                            '<p class="card-text">' . $row['megjegyzes'] . '</p>' .
                            '<a href="index.php?menu=home&id='.$row['allatid'].'" class="btn btn-primary">Kiválaszt</a>
                    </div>
                </div>
            ';
        echo $card;
    }
    ?>

</div>