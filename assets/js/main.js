const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso) {
        definirResultado ('Peso invalido' , false)
        return 
    }
    if(!altura) {
        definirResultado ('Altura invalida' , false)
        return 
    }

    const imc = definirImc(peso, altura)
    const imcNivel = definirImcNivel(imc)

    const msg = `Seu IMC é: ${imc} (${imcNivel})`

    definirResultado(msg, true)

})


const definirImc = (peso, altura) => {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

const definirImcNivel = (imc) => {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

const criarParagrafo = () => {
    const p = document.createElement('p')
    return p
}

const definirResultado = (msg, isValid) => {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';
    const p = criarParagrafo();


    if(isValid) {
        p.classList.add('resultado-positivo')
    }else {
        p.classList.add('resultado-negativo')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)

}