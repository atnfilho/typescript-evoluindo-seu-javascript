import { Negociacao } from "./negociacao";

export class Negociacoes {

    private listaDeNegociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.listaDeNegociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.listaDeNegociacoes;
    }

}

