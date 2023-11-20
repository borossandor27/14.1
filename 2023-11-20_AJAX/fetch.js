const inputid = document.querySelector("#id");
const inputUsername = document.querySelector("#username");
const inputDarab = document.querySelector("#darab");
const buttonCreate = document.querySelector("#create");
const buttonRead = document.querySelector("#read");
const buttonUpdate = document.querySelector("#update");
const buttonDelete = document.querySelector("#delete");
const cards = document.querySelector("#cards");

window.addEventListener("load", getAllUsers); //-- a lap betöltésekor is ...
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers() {
    let endpoint = "https://retoolapi.dev/Hfa9uy/data";
    try {
        const response = await fetch(endpoint); //-- head és body
        const users = await response.json(); //-- body to JSON
        showAllUsersCards(users);
    } catch (error) {
        console.log(error);
    }

}

function showAllUsersCards(params) {
    //--paraméter az összes felhasználó adata JSON-ben
    removeAllChild(cards);
    params.forEach(user => {
        appendCard(user);
    });
}

function appendCard(user) {
    //-- minden felhasználót egy új div-be helyezünk
    let userCard = document.createElement("div"); //-- alapértelmezett div-et hozunk létre
    userCard.className = "card"; //-- beáálítjuk a class tulajdonságot
    userCard.style.cssText = "width: 18rem;"; //-- beállítjuk a style tulajdonságot
    /* a card-on lévő többi elemet (h5, img, p, ...) nem egyenként hozzáadjuk, 
        hanem szövegként az innerHTML tulajdonság segítségével fogjuk 
        létrehozni és beállítani őket.
    */
    let tartalom = `<img src="noimage.jpg" class="card-img-top" alt="noimage.jpg">
    <div class="card-body">
        <h5 class="card-title">${user.id}. ${user.username}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <p>értéke: ${user.darab} db</p>
        <button class="btn btn-primary" value="${user.id}" onclick="kivalasztottFelhasznaloAdatainakBetolteseBeviteliMezokbe(this.value)">Kiválasztás</button>
    </div>`;
    userCard.innerHTML = tartalom;

    cards.appendChild(userCard); //-- létrehozott objektumot behelyezzük a DOM-ba
}
function removeAllChild(parent) {
    /*
    A DOM hierarchikus adatszerkezetben tárolja az elemeket,
    ezért egyszerre csak egy elemet tudunk elvenni, 
    olyat amelyet már nem követ a fában további elem. 
    (az eltávolítandó elem tartalmazhat további elemeket)
    */
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

async function kivalasztottFelhasznaloAdatainakBetolteseBeviteliMezokbe(id) {
    //-- az adatbázisból lekérjük az id-hoz tartozó adatokat
    beviteli_mezok_torlese();
    let url = "https://retoolapi.dev/Hfa9uy/data/" + id;
    console.log(url);
    try {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => inputMezokFeltoltese(data));
    } catch (error) {
        console.log(error);
    }
}

function beviteli_mezok_torlese() {
    inputid.value = "";
    inputUsername.value = "";
    inputDarab.value = "";
}
function inputMezokFeltoltese(adatok) {
    inputid.value = adatok.id;
    inputUsername.value = adatok.username;
    inputDarab.value = adatok.darab;
    location.href = "#adatokSzerkesztese"; //-- az oldal tetejére görget
}

//-- új felhasználó rögzítése
