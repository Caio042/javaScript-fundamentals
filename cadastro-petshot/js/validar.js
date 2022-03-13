const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    CEP:input => recuperarEndereco(input)
}

const mensagensErro = {
    nome: {
        valueMissing: 'Nome obrigatório'
    },
    email: {
        valueMissing: 'Email obrigatório',
        typeMismatch: 'Email inválido'
    },
    senha: {
        valueMissing: 'Senha obrigatória',
        patternMismatch: 'Senha deve conter entre 6 a 12 caracteres. Deve conter no mínino uma letra maiúscula, uma letra minúscula, um número e um símbolo'
    },
    dataNascimento: {
        valueMissing: 'Data de nascimento obrigatória',
        customError: 'Deve ser maior que 18 para se cadastrar'
    },
    CEP:{
        valueMissing: 'CEP obrigatório',
        patternMismatch: 'Formato de CEP inválido',
        customError: 'Não foi posível buscar CEP'
    },
    numero: {
        valueMissing: 'Por favor coloque o número da casa'
    },
    preco: {
        valueMissing: 'Preço não pode estar vazio'
    },
    descricao: {
        valueMissing: 'Preço não pode estar vazio'
    }
}

const tiposErro = [
    'customError',
    'patternMismatch',
    'typeMismatch',
    'valueMissing'
]

export function validar(input) {
    const tipoInput = input.dataset.valid

    if (validadores[tipoInput]) {
        validadores[tipoInput](input)
    }

    const inputDiv = input.parentElement

    if (input.validity.valid) {
        inputDiv.classList.remove('input-container--invalido')
        inputDiv.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoInput, input)
    } else {
        inputDiv.classList.add('input-container--invalido')
        inputDiv.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tipoInput, input)
    }
}

function mostraMensagemErro(tipoInput, input) {

    let mensagem = ''

    tiposErro
        .filter(erro => input.validity[erro])
        .forEach(erro => mensagem = mensagensErro[tipoInput][erro])

    return mensagem;
}

function validaDataNascimento(input) {
    const data = new Date(input.value)
    if(!maiorQue18(data)) {
        input.setCustomValidity('Deve ser maior que 18 para se cadastrar')
    }
}

function maiorQue18(dataNascimento) {
    const nascimentoMaximo = new Date()
    nascimentoMaximo.setUTCFullYear(new Date().getUTCFullYear() - 18)

    return dataNascimento < nascimentoMaximo
}

function recuperarEndereco(input) {
    const cep = input.value.replace(/\D/g, '')

    const url = `https://viacep.com.br/ws/${cep}/json/`

    const options = {
        method: 'GET',
        mode: 'cors',
        header: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, options)
            .then(response => response.json())
            .then(dados => {
                if (dados.erro) {
                    console.log(dados)
                    input.setCustomValidity('Não foi posível buscar CEP')
                    return
                }
                input.setCustomValidity('')
                preencheEndereco(dados)
                return
            })
    }
}

function preencheEndereco(dados) {
    const logradouro = document.querySelector('#logradouro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')

    logradouro.value = dados.logradouro
    cidade.value = dados.localidade
    estado.value = dados.uf
}
