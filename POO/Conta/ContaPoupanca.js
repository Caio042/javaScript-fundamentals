import { Conta } from "./Conta";

export class ContaPoupaca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }
}