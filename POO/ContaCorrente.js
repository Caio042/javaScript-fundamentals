import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static contasAbertas = 0; /*Variavel estático*/
    agencia;
    cliente;
    #saldo; //atributo privado

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this.#saldo = 0;
        ContaCorrente.contasAbertas++;
    }

    set cliente(cliente) { /*A atribuição continua sendo Conta.cliente = x, mas tem essa checkagem*/
        if (cliente instanceof Cliente) {
            this.cliente = cliente;
        }
    }

    get saldo() {
        return this.#saldo;
    }

    sacar(valor) {
        if (this.#saldo < valor && valor <= 0) {
            return;
        }
        this.#saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this.#saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }
}