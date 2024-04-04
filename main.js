const form = document.getElementById('form-atividade')
const formRemocao = document.getElementById('form-remocao')
let linhas = '';
const contatos = [];
const numeros = [];



form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

formRemocao.addEventListener('submit', function(e){
    e.preventDefault();

    removeLinha();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');   


    if ((numeros.includes(inputNumeroContato.value))){

        alert(`O numero: ${inputNumeroContato.value} já foi adicionado.`) 
    } else{
        
   
    
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputNumeroContato.value}</td>`
        linha += '</tr>'
        linhas += linha 
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
   
    corpoTabela.innerHTML = linhas;
}

function removeLinha() {
    const inputRemoverNumero = document.getElementById('numero-remocao');
    const numeroParaRemover = inputRemoverNumero.value;
    const indice = numeros.indexOf(numeroParaRemover);

    if (indice > -1) {
        
        contatos.splice(indice, 1);
        numeros.splice(indice, 1);

       
        linhas = '';
        for (let i = 0; i < contatos.length; i++) {
            let linha = '<tr>';
            linha += `<td> ${contatos[i]}</td>`
            linha += `<td> ${numeros[i]}</td>`
            linha += '</tr>'
            linhas += linha;
        }

        atualizaTabela();
    } else {
        alert(`O número: ${numeroParaRemover} não foi encontrado.`);
    }

    inputRemoverNumero.value = '';
}