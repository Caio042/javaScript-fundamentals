export class Cliente { /*Módulo exporta definição da classe cliente*/
    nome;
    #cpf;
    #senha;

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }

    get cpf() {
        return this.#cpf;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }
}