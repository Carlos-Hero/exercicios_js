var $ = document.getElementById.bind(document);

class Controller {
    constructor() {}
    acrescentar() {
        let date = $('data')
        let modelo = new Model(date.value);
        console.log(modelo.getData())
        let mostra = new View();
        console.log(modelo.busca())
        console.log(mostra.recarrega(modelo))
    }
}
var botao = $('botao');
let control = new Controller();
botao.addEventListener('click', control.acrescentar)