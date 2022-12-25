/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(){
    var texto = document.getElementById("txtTexto").value.toLocaleLowerCase();
    // /palabla que se desea encontrar/ pasa por o lee todos los string
    // i afecta a mayusculas y minusculas del string
    // g toda la linea del string
    // m es para multiples lineas o parrafos
    // /e/igm aplica todo lo anterios
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenMensaje").style.display="none";
    document.getElementById("tituloMensaje").style.display="none";
    document.getElementById("textoResultado").innerHTML=txtCifrado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";

    
}

function desencriptar(){
    var texto = document.getElementById("txtTexto").value.toLocaleLowerCase();
    // /palabla que se desea encontrar/ pasa por o lee todos los string
    // i afecta a mayusculas y minusculas del string
    // g toda la linea del string
    // m es para multiples lineas o parrafos
    // /e/igm aplica todo lo anterios
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenMensaje").style.display="none";
    document.getElementById("tituloMensaje").style.display="none";
    document.getElementById("textoResultado").innerHTML=txtCifrado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";

    
}
function copy(){
    var contenido = document.querySelector("#textoResultado");
    contenido.select();
    document.execCommand("copy");
    //alert("!Se copió exitosamente!");
}