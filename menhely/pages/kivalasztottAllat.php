<?php
if (filter_input(INPUT_POST, "Adatmodositas", FILTER_VALIDATE_BOOL, FILTER_NULL_ON_FAILURE)) {
    $adatok = $_POST;
    var_dump($_FILES);
    if ($_FILES['kepfajl']['error'] == 0) {
        $kiterjesztes = null;
        switch ($_FILES['kepfajl']['type']) {
            case 'image/png':
                $kiterjesztes = ".png";
                break;
            case 'image/jpeg':
                $kiterjesztes = ".jpg";
                break;
            default:
                break;
        }
        $forras = $_FILES['kepfajl']['tmp_name'];
        $cel = dir(getcwd());
        var_dump($cel->path);
        $destination = $cel->path . DIRECTORY_SEPARATOR . "allatkepek" . DIRECTORY_SEPARATOR . $adatok['allat_neve'] . $kiterjesztes;
        copy($forras, $cel);
    }
} else {
    $adatok = $db->kivalasztottAllat($id);
}
?>
<!--<!-- array (size=8)
  'allatid' => string '7' (length=1)
  'allat_neve' => string 'Gazsi' (length=5)
  'faj' => string 'kutya' (length=5)
  'fajta' => string 'Mobsz' (length=5)
  'szuletesi_ido' => string '2021-01-11' (length=10)
  'nem' => string 'szuka' (length=5)
  'megjegyzes' => string 'csinos' (length=6)
  'nyilvantartasban' => string '2023-05-10' (length=10) -->
<form method="post" action="index.php?menu=home&id=<?php echo $adatok['allatid']; ?>" enctype="multipart/form-data">
    <input type="hidden" name="allatid" value="<?php echo $adatok['allatid']; ?>">
    <div class="mb-3">
        <label for="allat_neve" class="form-label">Állat neve</label>
        <input type="text" class="form-control" name="allat_neve" id="allat_neve" value="<?php echo $adatok['allat_neve']; ?>">
    </div>
    <div class="row">
        <div class="mb-3 col-6">
            <label for="fajSelect" class="form-label">Állatfaj</label>
            <select id="fajSelect" name="fajSelect" class="form-select">
                <?php
                foreach ($db->getFajok() as $value) {
                    if ($adatok['faj'] == $value[0]) {
                        echo '<option selected value="' . $value[0] . '">' . $value[0] . '</option>';
                    } else {
                        echo '<option value="' . $value[0] . '">' . $value[0] . '</option>';
                    }
                }
                ?>

            </select>
        </div>
        <div class="mb-3 col-6">
            <label for="fajtaSelect" class="form-label">Állatfajta</label>
            <select id="fajtaSelect" name="fajtaSelect" class="form-select">
                <?php
                foreach ($db->getFajtak() as $value) {
                    if ($adatok['fajta'] == $value[0]) {
                        echo '<option selected value="' . $value[0] . '">' . $value[0] . '</option>';
                    } else {
                        echo '<option value="' . $value[0] . '">' . $value[0] . '</option>';
                    }
                }
                ?>

            </select>
        </div>
    </div>
    <div class="row">
        <div class="mb-3 col-6">
            <label for="szuletesi_ido" class="form-label">Születési idő</label>
            <input type="date" class="form-control" name="szuletesi_ido" id="szuletesi_ido" max="<?php echo date("Y-m-d"); ?>" value="<?php echo $adatok['szuletesi_ido']; ?>">
        </div>
        <div class="mb-3 col-6">
            <label for="nem" class="form-label">Az állat neme</label>
            <select id="nemSelect" name="nemSelect" class="form-select">
                <option<?php echo ($adatok['nem'] == "kan" ? " selected " : ""); ?> value="kan">kan</option>
                <option<?php echo ($adatok['nem'] == "szuka" ? " selected " : ""); ?> value="szuka">szuka</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="mb-3 col-6">
            <label for="nyilvantartasban" class="form-label">Nyilvántartásba vétel</label>
            <input type="date" class="form-control" name="nyilvantartasban" id="szuletesi_ido" max="<?php echo date("Y-m-d"); ?>"  value="<?php echo $adatok['szuletesi_ido']; ?>">
        </div>
        <div class="mb-3 col-6">
            <label for="megjegyzes" class="form-label">Megjegyzés</label>
            <input type="text" class="form-control" name="megjegyzes" id="megjegyzes" value="<?php echo $adatok['megjegyzes']; ?>">
        </div>

    </div>
    <div class="row">
        <div class="mb-3 col-4">
            <label for="kepfajl" class="form-label">Képfájl</label>
            <input type="file" class="form-control" name="kepfajl" id="kepfajl" value="">
        </div>

    </div>
    <button type="submit" class="btn btn-success" value="1" name="Adatmodositas">Módosítás</button>
</form>
<?php ?>