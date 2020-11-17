class View {
    constructor() {}
    recarrega(v) {
        var imagem = $('imagem')
        imagem.innerHTML = ` <img src="${v.getImagem()}" alt="" class="imagem">`
    }
}