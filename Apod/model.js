class Model {
    constructor(data) {
        this.data;
        if (data !== undefined) {
            this.data = data
        }
        this.titulo = " ";
        this.imagem = "";
        this.texto = "";
    }

    busca() {

        let request = new XMLHttpRequest();
        request.addEventListener('load', ()=> {
            if (request.status == 200) {
                let dadosS = this.processa(request.responseText)
                this.atualiza(dadosS)
            }
        })

        let segredo = "qcPijd0faCCqD2tFcev5nSLzXm77mzwsNBFI47q7";
        let novaData = this.data;
        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${segredo}&date=${novaData}`, false);
        request.send();
    }

    processa(v) {
        let res = JSON.parse(v);
        return res;
    }

    atualiza(v) {
        this.data = v.date;
        this.titulo = v.title;
        this.imagem = v.hdurl;
        this.texto = v.explanation;
    }

    getData() {
        return this.data;
    }

    getTitulo() {
        return this.titulo;
    }

    getTexto() {
        return this.texto;
    }
    getImagem() {
        return this.imagem;
    }
}