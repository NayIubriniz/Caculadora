//seleção dos elementos

const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botaoOperadores = document.querySelectorAll(".operador");

//Variáveis globais

let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

//Funções 
function atualizaDisplay(){
    display.value = operacaoAtual;
}

function insereNumeros(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent;
        calculando = false;
    }else{
        operacaoAtual += evento.target.textContent;
    }
    atualizaDisplay();
}
function inserePontos(){
    if(operacaoAtual.indexOf('.') === -1){
        operacaoAtual += '.';
        atualizaDisplay();
    }
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando){
            if(operador !== null){
                calcula();
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = evento.target.textContent;
    }
}
function calcula(){
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch(operador){
        case '+':
        resultado = operandoAnterior + operandoAtual;
        break;

        case '-':
        resultado = operandoAnterior - operandoAtual;
        break;

        case '*':
        resultado = operandoAnterior * operandoAtual;
        break;

        case '/':
        resultado = operandoAnterior / operandoAtual;
        break;
    }
    operacaoAtual = String(resultado);
    valorAnterior = operacaoAtual;
    calculando = true;
    atualizaDisplay();
}

//Eventos
botaoPonto.addEventListener('click', inserePontos)
botoesNumeros.forEach((botao) => botao.addEventListener('click', insereNumeros));
botaoOperadores.forEach((botao)=> botao.addEventListener('click', insereOperador));
botaoIgual.addEventListener('click', calcula)