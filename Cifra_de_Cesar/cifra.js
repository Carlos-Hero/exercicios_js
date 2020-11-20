function cifra(desdobramento, mensagem ){
    var recebe = 0; 
    var encriptada = "";       
        
    for (var i = 0; i < mensagem.length; i++){               
        recebe = mensagem[i].charCodeAt(); 
        encriptada += String.fromCharCode(recebe + desdobramento) 
    }
    return encriptada;
}
    
function decifra( desdobramento, cifrada ){
    var recebe = 0; 
    var decifrada = "";
        
    for (var i = 0; i < cifrada.length; i++){               
            
        recebe = cifrada[i].charCodeAt(); 
        decifrada += String.fromCharCode(recebe - desdobramento) 
    }
    return decifrada;
}


function mostra(texto) {
    document.write (texto);
    document.write ("<br>")
    document.write ("<br>")
}

var perguntaCifra = prompt('Cifra!');
var perguntaDecifra = prompt('Decifra!')
mostra (cifra(1, perguntaCifra));
mostra (decifra(1, perguntaDecifra));