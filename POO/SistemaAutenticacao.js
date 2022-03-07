export class SistemaAutenticacao {

    static login (autenticavel, senha) {
        if (this.#isAutenticavel) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static #isAutenticavel(autenticavel) {
        /**
         * Js armazena seus objetos com chave e valor
         * Sendo atributos e métodos chaves.
         * Esse método verifica a existencia da chave autenticar no objeto
         * Para saber se assina o contrato autenticavel.
         */
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}