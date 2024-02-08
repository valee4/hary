function mostrarImagen() {
    window.location.href = "pagina_imagen.html";
}

function cambiarMensaje() {
    var mensajes = [
        "Are you sure?",
        "really sure",
        "think again!",
        "last chance Hary",
        "you might regret this"
    ];

    var botonNo = document.getElementById("no-btn");
    var index = Math.floor(Math.random() * mensajes.length);
    botonNo.textContent = mensajes[index];

    // Incrementa el tamaño del botón "Sí" cada vez que se presiona el botón "No"
    var botonSi = document.getElementById("si-btn");
    var estiloBotonSi = window.getComputedStyle(botonSi);
    var fontSize = parseInt(estiloBotonSi.fontSize); // Obtiene el tamaño actual del botón "Sí"
    botonSi.style.fontSize = (fontSize + 60) + 'px'; // Incrementa el tamaño del botón "Sí" en 2px
}
