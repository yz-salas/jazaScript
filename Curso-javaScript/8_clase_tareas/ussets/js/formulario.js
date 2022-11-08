const formaContenedor = document.getElementById("formaContenedor");
const altura = document.getElementById("altura");
const ancho = document.getElementById("ancho");
const color = document.getElementById("color");
const pantalla = document.getElementById("pantalla")
const tamañoText = document.getElementById("tamañoText")
const parrafo = document.getElementById("pantallaTex")

formaContenedor.addEventListener("submit", function (event) {
  event.preventDefault();
  const valorDetexto = tamañoText.value + "rem"
  const valorDealtura = altura.value + "px";
  const valorDeancho = ancho.value + "px";
  const valorDecolor = color.value;
  pantalla.style.height = valorDealtura
  pantalla.style.width = valorDeancho
  pantalla.style.background = valorDecolor
  parrafo.style.fontSize = valorDetexto

});
