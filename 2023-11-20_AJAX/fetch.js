const inputid = document.querySelector("#id");
const inputUsername = document.querySelector("#username");
const inputDarab = document.querySelector("#darab");
const buttonRead = document.querySelector("#read");
const body = document.getElementsByTagName("body")[0];
const cards = document.querySelector("#cards");

body.addEventListener("load", getAllUsers, false); //-- a lap betöltésekor is ...
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
    //--paraméter az összes felhasználó adat a JSON-ben
    removeAllChild(cards);
    params.forEach(user => {
        appendCard(user);
    });
}

function appendCard(user) {

    let userCard = document.createElement("div");
    userCard.className = "card";
    userCard.style.cssText = "width: 18rem;";
    let tartalom = `<img src="noimage.jpg" class="card-img-top" alt="noimage.jpg">
    <div class="card-body">
        <h5 class="card-title">${user.username}</h5>
        <p class="card-text">${user.id}. Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <p>értéke: ${user.darab} db</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
    userCard.innerHTML = tartalom;
    cards.appendChild(userCard);
}
function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}