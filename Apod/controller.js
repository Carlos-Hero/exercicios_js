class Controller {
    constructor() {}
    acrescentar() {
        let date = document.getElementById('data')
        let modelo = new Model(date.value);
        console.log(modelo.getData())
        let mostra = new View();
        console.log(modelo.busca())
        console.log(mostra.recarrega(modelo))
    }
}
var botao = document.getElementById('botao');
let control = new Controller();
botao.addEventListener('click', control.acrescentar)