let numero_max = 100;
let numero_min = 1;

let numero_random = Math.floor(Math.random()*numero_max) + numero_min;

let contador_clicks = 0;

let correcto = false;

console.log("El numero a adivinar es: "+numero_random);
		
let info = "Introduce un numero entre el "+numero_min+" y el "+numero_max+" para adivinar el numero.";		
				
function check_numero()
{

contador_clicks++;
let clicks = document.getElementById("contador");


clicks.value = "Clicks: "+contador_clicks;

let resultado = document.getElementById("resultado");

let valor = document.getElementById("juego_numero").value;

if (valor < numero_min){

resultado.value = "El numero debe ser "+numero_min+" o mayor";
return;

}
else if (valor > numero_max)
{

resultado.value = "El numero debe ser "+numero_max+" o menor";
return;

}

let text = "";

if(valor > numero_random)
{

text = "El numero a adivinar es menor que "+valor;

}
else if(valor < numero_random)
{

text = "El numero a adivinar es mayor que "+valor;

}
else
{

text = "Slay!!, lo adivinaste!";
correcto = true;

}


resultado.value = text;

if(correcto == true){

document.getElementById("adivina").disabled = true;
}

}