function activarInput() {
    // Obtén el input por su ID
    var input = document.getElementById('input-text');

    // Activa el input
    input.focus();
}



function encriptarMensaje() {
    var mensajeOriginal = document.getElementById('input-text').value;

    let text = mensajeOriginal.split("");

	for (let i = 0; i < text.length; i++) {
		switch (text[i]) {
			case "a": text[i] = "ai"; break;
			case "e": text[i] = "enter"; break;
			case "i": text[i] = "imes"; break;
			case "o": text[i] = "ober"; break;
			case "u": text[i] = "ufat"; break;
			default: break;
		};
	};

	let encrypted = text.join("");

    var mensajeEncriptado = document.getElementById('mensajeEncriptado');
    var errorMessageDiv = document.getElementById('error-message');

    // Limpia el contenido existente en los divs y oculta los divs
    var noTextDiv = document.getElementById('no-text');
    mensajeEncriptado.innerHTML = "";
    noTextDiv.style.display = 'none';
    errorMessageDiv.style.display = 'none';
    var TextDiv = document.getElementById('text');
    TextDiv.style.display = '';

    // Verifica si el mensaje original está vacío
    if (mensajeOriginal.trim() === "") {
        // Muestra el mensaje de error si el mensaje original está vacío
        errorMessageDiv.style.display = 'block';
        noTextDiv.style.display = '';
        TextDiv.style.display = 'none';
    } else {
        // Muestra el mensaje letra por letra si el mensaje original no está vacío
        for (var i = 0; i < encrypted.length; i++) {
            setTimeout(function (index) {
                // Agrega cada letra al div con un pequeño retraso
                mensajeEncriptado.innerHTML += encrypted[index];
            }, i * 100, i); // El retraso aumenta con cada letra
        }
    }
}

function desencriptarMensaje() {
    const regexp = /(?<=ai|enter|imes|ober|ufat)|(?=ai|enter|imes|ober|ufat)/
    var mensajeOriginal = document.getElementById('input-text').value;

    let text = mensajeOriginal.split(regexp);

	for (let i = 0; i < text.length; i++) {
		switch (text[i]) {
			case "ai": text[i] = "a"; break;
			case "enter": text[i] = "e"; break;
			case "imes": text[i] = "i"; break;
			case "ober": text[i] = "o"; break;
			case "ufat": text[i] = "u"; break;
			default: break;
		};
	};

	let encrypted = text.join("");

    var mensajeEncriptado = document.getElementById('mensajeEncriptado');
    var errorMessageDiv = document.getElementById('error-message');

    // Limpia el contenido existente en los divs y oculta los divs
    var noTextDiv = document.getElementById('no-text');
    mensajeEncriptado.innerHTML = "";
    noTextDiv.style.display = 'none';
    errorMessageDiv.style.display = 'none';
    var TextDiv = document.getElementById('text');
    TextDiv.style.display = '';

    // Verifica si el mensaje original está vacío
    if (mensajeOriginal.trim() === "") {
        // Muestra el mensaje de error si el mensaje original está vacío
        errorMessageDiv.style.display = 'block';
        noTextDiv.style.display = '';
        TextDiv.style.display = 'none';
    } else {
        // Muestra el mensaje letra por letra si el mensaje original no está vacío
        for (var i = 0; i < encrypted.length; i++) {
            setTimeout(function (index) {
                // Agrega cada letra al div con un pequeño retraso
                mensajeEncriptado.innerHTML += encrypted[index];
            }, i * 100, i); // El retraso aumenta con cada letra
        }
    }
}

function cerrarError() {
    var errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.style.display = 'none';
}

// Función para borrar el texto
function borrarTexto() {
    var mensajeEncriptado = document.getElementById('mensajeEncriptado');
    mensajeEncriptado.textContent = ''; // Borra el texto
    var TextDiv = document.getElementById('text');
    TextDiv.style.display = 'none';
    var noTextDiv = document.getElementById('no-text');
    noTextDiv.style.display = '';
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    var mensajeEncriptado = document.getElementById('mensajeEncriptado');

    // Crear un elemento de texto temporal
    var tempElement = document.createElement('textarea');
    tempElement.value = mensajeEncriptado.textContent;

    // Añadir el elemento al DOM
    document.body.appendChild(tempElement);

    // Seleccionar y copiar el texto al portapapeles
    tempElement.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);
}