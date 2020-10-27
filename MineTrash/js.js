function iniciar(){
    var text = document.querySelector(".titul");
    text.innerText = "Escolha o seu personagem";
    document.getElementById("lixo").src="imagens/pp1.png";
    document.getElementById("lixox").src="imagens/pp2.png";
    var img2 = document.querySelector("#lixox");
    img2.style.width = "235px";
    var b = document.querySelector (".botao");
    b.remove();
}