function Inserir7(){
    document.getElementById("visor").value += 7;
}

function Inserir8(){
    document.getElementById("visor").value += 8;
}

function Inserir9(){
    document.getElementById("visor").value += 9;
}

function InserirMais(){
    document.getElementById("visor").value += "+";
}

function LimparVisor(){
    document.getElementById("visor").value = "";
}

function RaizQuadrada(){
    let numero = document.getElementById("visor").value;
    document.getElementById("visor").value = Math.sqrt(numero);
}

function Calcular(){
    //pegar o texto do visor
    let expressao = document.getElementById("visor").value;

    //converter em expressão numérica e calcular
    let resultado = eval(expressao);

    //mostrar o resultado do cálculo no visor no visor
    document.getElementById("visor").value = resultado;
}

function Apagar(){
    let conteudo = document.getElementById("visor").value;
    document.getElementById("visor").value = conteudo.substring(0, conteudo.length - 1);
}