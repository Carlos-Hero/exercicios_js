function iniciar(){
    let text = document.querySelector(".titul");
    text.innerText = "Escolha o seu personagem";
    var img1 = document.getElementById("lixo").src="imagens/pp1.png";
    var img2 = document.getElementById("lixox").src="imagens/pp2.png";
    var img2 = document.querySelector("#lixox");
    var img1 = document.querySelector("#lixo");
    var titulo = document.getElementById("titule");
    var textoPrinc = document.querySelector(".text");
    var corpo = document.querySelector("body")
    img2.style.width = "235px";
    var b = document.querySelector (".botao");
    b.remove();

    function historia1 (){
        console.log("fui clicado");
        img2.remove();
        img1.remove();

        textoPrinc.style.color = "black";
        textoPrinc.style.webkitTextStrokeColor = "black";

        text.innerText = "Você escolheu o Seninha!";
        textoPrinc.innerHTML = "O Seninha não tem uma arma para continuar. Deseja sair de casa ou estudar?";
        textoPrinc.style.textAlign = "50px";
        textoPrinc.style.fontSize = "50px";

        var novobotões = document.createElement("button");
        var novobotões2 = document.createElement("button");
        novobotões2.innerText = "Estudar";
        novobotões.innerText = "Sair";
        novobotões.style.padding = "10px";
        novobotões.style.fontSize = "20px";

        novobotões2.style.padding = "10px";
        novobotões2.style.fontSize = "20px";
        novobotões.style.color = "green";
        novobotões2.style.color = "green";

        corpo.appendChild(novobotões);
        corpo.appendChild(novobotões2);

        novobotões.addEventListener("click", ()=>{
            textoPrinc.innerText = "Nesse mundo tão perigoso você foi morto!";
            novobotões.remove();
            novobotões2.remove();
        })

        novobotões2.addEventListener("click", ()=>{
            textoPrinc.innerText = "Para um medroso, o melhor jeito é programar. Deseja ler artigos para implementar no código ou simplesmente deixar desse jeito?";
            novobotões.innerText = "Ler";
            novobotões2.innerText = "Deixar";

            novobotões2.addEventListener("click", ()=>{
                textoPrinc.innerText = "Seu código ficou horrivel!"
                novobotões2.remove();
                novobotões.remove();
            })

            novobotões.addEventListener("click", ()=>{
                textoPrinc.innerText = "Após ler a documentação, Seninha ficou fera em JavaScript e se tornou o maior progamador em JS do mundo!"
            })
        })
        

        
    }


    function historia2 (){
        console.log("fui clicado");
        img2.remove();
        img1.remove();

        textoPrinc.style.color = "black";
        textoPrinc.style.webkitTextStrokeColor = "black";

        text.innerText = "Você escolheu o Alex!";
        textoPrinc.innerHTML = "Alex gosta de aventura e tem um arco. Deseja sair de casa ou ficar?";
        textoPrinc.style.textAlign = "50px";
        textoPrinc.style.fontSize = "50px";

        var novobotões = document.createElement("button");
        var novobotões2 = document.createElement("button");
        novobotões2.innerText = "Ficar";
        novobotões.innerText = "Sair";
        novobotões.style.padding = "10px";
        novobotões.style.fontSize = "20px";

        novobotões2.style.padding = "10px";
        novobotões2.style.fontSize = "20px";
        novobotões.style.color = "green";
        novobotões2.style.color = "green";

        corpo.appendChild(novobotões);
        corpo.appendChild(novobotões2);

        novobotões2.addEventListener("click", ()=>{
            textoPrinc.innerText = "Decidiu ficar em casa e acabou morrendo de tédio!";
            novobotões2.remove();
            novobotões.remove();
        })

        novobotões.addEventListener("click", ()=>{
            textoPrinc.innerText = "Você saiu para uma aventura, assim dando de cara com um virus chamado Covid-19. Deseja atirar suas flechas ou lutar?";
            novobotões.innerText = "Lutar";
            novobotões2.innerText = "Flechar";


            novobotões2.addEventListener("click", function() {
                textoPrinc.innerText = "Suas flechas fizeram efeito contra o covid. Deseja aplicá-las ou continuar flechando?";
                corpo.appendChild(novobotões);
                corpo.appendChild(novobotões2);
                novobotões.innerText = "Aplicar";
                novobotões2.innerText = "Continuar";

                novobotões2.addEventListener("click", ()=>{
                    textoPrinc.innerText = "Suas flechas acabaram e você acabou sendo morto pela Covid.";
                    novobotões2.remove();
                    novobotões.remove();
                })

                novobotões.addEventListener("click", ()=>{
                    textoPrinc.innerText = "Suas flechas surtiram efeito e agora você esta imune ao Covid podendo se aventurar. Parabéns!";
                    novobotões2.remove();
                    novobotões.remove();
                })

                
            })

            novobotões.addEventListener("click", ()=>{
                textoPrinc.innerText = "Você lutou contra o Covid e acabou falecendo!";
                novobotões.remove();
                novobotões2.remove();
            })
        })

    }



    img1.addEventListener("click", historia1);

    img2.addEventListener("click", historia2);
}
