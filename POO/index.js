import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Antônio", "944.545.632-98", "1234");
console.log(cliente);

const conta = new ContaCorrente("4465", cliente);

conta.depositar(150);
conta.sacar(50);
console.log(conta);

const outraConta = new ContaCorrente("4236", cliente);

conta.tranferir(75, outraConta);

console.log(SistemaAutenticacao.login(cliente, "1234"));

console.log(conta.saldo);
console.log(outraConta.saldo);
console.log(ContaCorrente.contasAbertas);