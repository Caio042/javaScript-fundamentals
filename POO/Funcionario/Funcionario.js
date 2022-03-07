export class Funcionario {
    #nome;
    #salario;
    #cpf;
    bonificacao;
    #senha;

    constructor(nome, salario, cpf) {
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;
        this.bonificacao = 1;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}