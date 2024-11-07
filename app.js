
function sortear() {
    let quantidadeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);

    if(numeroMinimo >= numeroMaximo) {

        alert('O número do campo "Do número" precisa ser menor que o número digitado no Campo "Até o Número". Preste atenção!!')
        
        return;
        
    }

    let numerosSorteados = [];
    let numeroAleatorio
    if (quantidadeNumeros > (numeroMaximo - numeroMinimo + 1)) {

        alert('Campo "quantidade de números" precisa ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Preste atenção!! ')
        return;

    }

    for (let i = 0; i < quantidadeNumeros; i++) {

        numeroAleatorio = obterNumeroAleatorio(numeroMinimo, numeroMaximo)


        while (numerosSorteados.includes(numeroAleatorio)) {

            numeroAleatorio = obterNumeroAleatorio(numeroMinimo, numeroMaximo)

            
            
        }
        
        
        numerosSorteados.push(numeroAleatorio)
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo sorteio">Número(s) sorteado(s): ${numerosSorteados} </label>`
    alterarClasseBotao();
}

function alterarClasseBotao() {
    
    let botaoReiniciar = document.getElementById("btn-reiniciar")
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {

        botaoReiniciar.classList.remove("container__botao-desabilitado")
        botaoReiniciar.classList.add("container__botao")
        
    } else {

    botaoReiniciar.classList.remove("container__botao")
    botaoReiniciar.classList.add("container__botao-desabilitado")
    
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
     quantidadeNumeros = document.getElementById("quantidade").value = '';
     numeroMinimo = document.getElementById("de").value = '';
     numeroMaximo = document.getElementById("ate").value = '';
     n = document.getElementById("resultado").innerHTML =  `<label class="texto__paragrafo sorteio">Número(s) sorteado(s): nenhum até agora</label>`;
     alterarClasseBotao()

}