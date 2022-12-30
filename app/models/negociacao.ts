export class Negociacao {

    constructor(private data: Date, public readonly quantidade: number, public readonly valor: number) {}

    getData(): Date {
        const data = new Date(this.data.getTime());
        return data;
    }

    get getVolume(): number {
        return this.quantidade * this.valor;
    }
}