import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static contasAbertas = 0; /*Atributo estático*/

    constructor(cliente, agencia) {
        super(0, agencia, cliente);
        ContaCorrente.contasAbertas++; /*Uso de atributo estático*/
    }

    /*Sobrescrita de método*/
    sacar(valor) {
        /**
         * Taxa de 10% ao sacar de conta corrente
         */
        const taxa = 0.1;
        const valorComTaxa = valor + valor * taxa;

        if (super.saldo < valorComTaxa && valor <= 0) {
            return;
        }
        super.sacar(valorComTaxa);
        return valor;
    }
}