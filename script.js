const inputTexto = document.querySelector("#input-texto");
const mensaje = document.querySelector("#mensaje");


function encriptar(texto){
    var vocales = ["e","i","a","o","u"];
    var vocalesEncriptadas = ["enter","imes","ai","ober","ufat"];
    texto = texto.toLowerCase();

    for(posicion = 0 ; posicion < vocales.length; posicion++){
        if (texto.includes(vocales[posicion])){
            texto = texto.replaceAll(vocales[posicion],vocalesEncriptadas[posicion]);
        }   
    }
    return texto; 
}
function btnEncriptar(){
    var textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}


function desencriptar(texto){
    var vocales = ["e","i","a","o","u"];
    var vocalesEncriptadas = ["enter","imes","ai","ober","ufat"];
    texto = texto.toLowerCase();

    for(posicion = 0 ; posicion < vocalesEncriptadas.length; posicion++){
        if (texto.includes(vocalesEncriptadas[posicion])){
            texto = texto.replaceAll(vocalesEncriptadas[posicion],vocales[posicion]);
        }   
    }
    return texto; 
}

function btnDesencriptar(){
    var textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
}

