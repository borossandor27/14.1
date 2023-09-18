//-- globális konstansok és változók megadása
const kep = document.querySelector('#kep');
const gomb = document.querySelector('#szinesGomb');
var allapot = "feketefeher";
//-- események hozzárendelése
gomb.addEventListener('click', kepcsere);
kep.addEventListener('mouseenter',szinesbe);
//-- eseménykezelő függvények
function kepcsere() {
    console.log(allapot);
    if (allapot == "feketefeher") {
        kep.src = "szines.png";
        gomb.innerHTML = "fekete fehér";
        allapot = "szines";
    } else {
        kep.src = "feketefeher.png";
        gomb.innerHTML = "szines";
        allapot = "feketefeher";
    }
}

function szinesbe() {
    if (allapot == "feketefeher") {
        kep.src = "szines.png";
        gomb.innerHTML = "fekete fehér";
        allapot = "szines";
    } else {
        kep.src = "feketefeher.png";
        gomb.innerHTML = "szines";
        allapot = "feketefeher";
    }
}