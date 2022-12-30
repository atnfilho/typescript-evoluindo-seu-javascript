export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    getData() {
        const data = new Date(this.data.getTime());
        return data;
    }
    get getVolume() {
        return this.quantidade * this.valor;
    }
}
