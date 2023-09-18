const g5 = document.querySelector("#g5");
const szelesseg = window.innerWidth;
const magassag = window.innerHeight;
console.log(szelesseg, magassag);
g5.addEventListener("mouseenter", mozgat);

function mozgat() {
    x = parseInt(Math.random() * szelesseg);
    y = parseInt(Math.random() * magassag);
    console.log(x, y);

    g5.style.left = x + "px";
    g5.style.top = y + "px";

}