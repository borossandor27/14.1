const kep = document.querySelector("#teknos");
var maxX = window.innerWidth - kep.offsetWidth;
var maxY = window.innerHeight - kep.offsetHeight;
var irany = 0;
var aktX = 0,
  aktY = 0;

addEventListener("resize", (event) => {
  maxX = window.innerWidth - kep.offsetWidth;
  maxY = window.innerHeight - kep.offsetHeight;
  console.log("resize", maxX, maxY, window.innerWidth);
});

function mozgat() {
  switch (irany) {
    case 0:
      //-- fent - jobbra
      if (aktX < maxX) {
        aktX += 1;
      } else {
        irany = 1;
      }
      break;
    case 1:
      //-- lefele - jobb oldalt
      if (aktY < maxY) {
        aktY += 1;
      } else {
        irany = 2;
      }
      break;
    case 2:
      //-- lent - balra
      if (aktX > 0) {
        aktX -= 1;
      } else {
        irany = 3;
      }
      break;
    case 3:
      //-- felfelé - bal oldalon
      if (aktY > 0) {
        aktY -= 1;
      } else {
        irany = 0;
      }
      break;

    default:
      break;
  }

  kep.style.left = parseInt(aktX).toString() + "px";
  kep.style.top = parseInt(aktY).toString() + "px";
  console.log(kep.style.left, kep.style.top);
}
setInterval(mozgat, 10);
