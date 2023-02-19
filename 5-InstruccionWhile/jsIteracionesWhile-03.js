/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

//con do while
function mostrar() {
	let passwordIngresado;

	do {
    passwordIngresado = prompt("ingrese contraseña");
	} while (passwordIngresado != "utn750");
	alert("Bienvenido");
} //FIN DE LA FUNCIÓN







/*
//con do while, inicializando el valor contraseña a la variable password.
function mostrar() {
	let password;
	let passwordIngresado;

	password = "utn750";

	do {
		passwordIngresado = prompt("ingrese contraseña");
	} while (passwordIngresado != password);
		alert("Bienvenido");


	}//FIN DE LA FUNCIÓN
	*/




	/*
	// con while y validando que sea correcto sino aviso que es incorrecta y pido ingrese contraseña valida.
	function mostrar(){
		let password;
		let passwordIngresado;

		passwordIngresado = prompt("ingrese contraseña");

		while(passwordIngresado != "utn750"){
			passwordIngresado = prompt("incorrecto, ingrese contraseña valida");
		}

		alert("Bienvenido");
	}
	*/