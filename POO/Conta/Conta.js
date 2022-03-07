import { Cliente } from "../Cliente.js";

export class Conta {

    #agencia
    #cliente
    #saldo

    constructor(saldoInicial, cliente, agencia) {

        /**
         * Verificando a classe do construtor
         */
        if (this.constructor == Conta) {
            throw new Error("Conta é uma classe implicitamente abstrata");
        }

        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldoInicial; //atributo privado começa com #
    }

    /*A atribuição continua sendo Conta.cliente = x, mas tem essa checkagem*/
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    get saldo() {
        return this.#saldo;
    }

    get agencia() {
        return this.#agencia;
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