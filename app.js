let graczWynik = 0;
let computerWynik = 0;
const graczWynik_span = document.querySelector("#user-score");
const computerWynik_span = document.querySelector("#computer-score");
const opisWynikuGry = document.querySelector(".result > p");
const papier = document.getElementById("p");
const nozyce = document.getElementById("n");
const kamien = document.getElementById("k");
const godloGracz = document.getElementById("user-label");
const godloComp = document.getElementById("comp-label");

papier.addEventListener("click", () => gra("p"));
nozyce.addEventListener("click", () => gra("n"));
kamien.addEventListener("click", () => gra("k"));

function randomComp() {
  let compRandom = "";
  let losowanie = Math.floor(Math.random() * 3);
  switch (losowanie) {
    case 0:
      compRandom = "p";
      break;
    case 1:
      compRandom = "n";
      break;
    case 2:
      compRandom = "k";
      break;
  }
  return compRandom;
}

function gra(wybor) {
  let doPorownania = `${wybor}${randomComp()}`;
  if (doPorownania === "pk" || doPorownania === "np" || doPorownania === "kn") {
    graczWygrywa(wybor);
  } else if (
    doPorownania === "pp" ||
    doPorownania === "nn" ||
    doPorownania === "kk"
  ) {
    compWygrywa(wybor);
  } else remis(wybor);
}

function graczWygrywa(wybor) {
  graczWynik++;
  graczWynik_span.innerHTML = graczWynik;
  opisWynikuGry.innerHTML = "Wygrałeś!!! Tylko się nie zesraj :)";
  godloGracz.classList.add("big-badge");
  setTimeout(() => {
    godloGracz.classList.remove("big-badge");
  }, 300);
  document.getElementById(wybor).classList.add("przycisk-green");
  setTimeout(() => {
    document.getElementById(wybor).classList.remove("przycisk-green");
  }, 300);
}
function compWygrywa(wybor) {
  computerWynik++;
  computerWynik_span.innerHTML = computerWynik;
  opisWynikuGry.innerHTML =
    "Niestety Twój komputer okazał się od Ciebie lepszy. Znowu :)";
  godloComp.classList.add("big-badge");
  setTimeout(() => {
    godloComp.classList.remove("big-badge");
  }, 300);
  document.getElementById(wybor).classList.add("przycisk-red");
  setTimeout(() => {
    document.getElementById(wybor).classList.remove("przycisk-red");
  }, 300);
}
function remis(wybor) {
  opisWynikuGry.innerHTML =
    "Remis. Ty i Twój komputer jesteście tek samo żałośni.";
  godloGracz.classList.add("big-badge");
  godloComp.classList.add("big-badge");
  setTimeout(function () {
    godloGracz.classList.remove("big-badge");
  }, 300);
  setTimeout(function () {
    godloComp.classList.remove("big-badge");
  }, 300);
  document.getElementById(wybor).classList.add("przycisk-grey");
  setTimeout(() => {
    document.getElementById(wybor).classList.remove("przycisk-grey");
  }, 300);
}
