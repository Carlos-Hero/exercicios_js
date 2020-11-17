class View {
    constructor() {}
    recarrega(v) {
        var imagem = document.getElementById('imagem')
        imagem.innerHTML = ` <img src="${v.getImagem()}" alt="" class="imagem">`
    }
}