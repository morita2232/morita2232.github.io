function procesa_envio(event)
{

event.preventDefault();

console.log("Procesando envio!!!");

let salida = document.getElementById("salida");

let nombre = document.getElementById("name");

let email = document.getElementById("email");

let mensaje = document.getElementById("message");


	if(nombre.value.length < 2){

		salida.value = "El nombre debe tener al menos 2 caracteres";
		
		salida.style.color = "#ff0000";
		nombre.style.border = "1px solid #ff0000";
		nombre.style.color = "#ff0000";
		
		nombre.focus();
		
		return false;

	}
	else
	{		
		nombre.style.border = "1px solid #22ff00";
		nombre.style.color = "#22ff00";
	}
	
	if(mensaje.value.length < 5) 
	{
		salida.value = "El mensaje debe tener al menos 5 caracteres!";
		salida.style.color = "#ff0000";
		mensaje.style.border = "1px solid #ff0000";
		mensaje.style.color = "#ff0000";
		
		mensaje.focus();
		
		return false;
	
	}
	else
	{
		mensaje.style.border = "1px solid #22ff00";
		mensaje.style.color = "#22ff00";	
		
	}
	
	if(!validarMail(email.value)){

		salida.value = "El email es incorrecto";
		
		salida.style.color = "#ff0000";
		email.style.border = "1px solid #ff0000";
		email.style.color = "#ff0000";
		
		email.focus().
		
		return false;

	}
	else
	{
		email.style.border = "1px solid #22ff00";
		email.style.color = "#22ff00";
	
	}
	
	document.getElementById("form_contacto").submit();
	
}

function validarMail(email){
	
	let expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
	
	return expresion.test(email);
	
}