import { validar } from "./validar.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', event => validar(event.target))
})

const preco = document.querySelector('#preco');

const args = {
    afterFormat(e) { console.log('afterFormat', e); },
    allowNegative: false,
    beforeFormat(e) { console.log('beforeFormat', e); },
    negativeSignAfter: false,
    prefix: 'R$ ',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
};

SimpleMaskMoney.setMask(preco, args)
