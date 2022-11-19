//reiniciar pagina
let botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener('click',reiniciarjuego)
function aleatorio (min, max){
return Math.floor(Math.random()*(max - min + 1) + min)}


//Apostar
let Apostar = 0
Apostar = prompt("cuanto deseas apostar?")
alert("haz apostado " + Apostar)



//jugador
function eleccion(jugada) {
let resultado = ""
if(jugada == 1) {
  resultado = "cara 😁"
} else if (jugada == 2) {
  resultado = "sello 💩"}
  else {
  resultado = "MAL ELEGIDO"
}
return resultado
}
 let jugador = 0
 let pc = aleatorio (1,2)
 let resultado = aleatorio (1,2)
 jugador = prompt ("Elige: 1 es cara y 2 es sello")    



//Pc
alert("Tu elijes: " + eleccion(jugador))
alert("tu enemigo elije: " + eleccion(pc))



//combate y resultado y ganancias
let ganancias = Apostar * 2
alert ("lanzamiento de moneda...");
alert ("El resultado del lanzamiento es " + resultado)
if (resultado==jugador){
alert("TU GANASTE")
alert("Ganaste "+ Apostar + " adicionales")
alert("En total ganaste " + ganancias)
}
else if (resultado != jugador){
alert("PERDISTE")
alert ("perdiste " + Apostar)
}

else if (resultado == pc){
alert("TU ENEMIGO GANO")
}
if(resultado == pc){
alert("EL ENEMIGO A GANADO")
perdidas = perdidas + 1
}
else if (resultado != pc ){
alert("EL ENEMIGO A PERDIDO")
}




function reiniciarjuego(){
location.reload()
}
