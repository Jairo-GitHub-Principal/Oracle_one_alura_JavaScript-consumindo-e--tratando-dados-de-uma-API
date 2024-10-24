// consumir api

/**
 * A principal utilidade de uma IIFE é criar um escopo isolado, 
 * o que ajuda a evitar conflitos de variáveis globais, 
 * protegendo as variáveis definidas dentro da função.
 * e impede que as funções e variaveis do nosso codigo
 * sejam acessadas atravéz do navegador
 */
(function () { /* função IIFE (function(){...})() ou  (function(){...}())
             Immediately Invoked Function Expression alto executavel
             garante segurança uma vez que não pode ser chamada pelo navegador, e 
            não pode ser executado a não ser por ela mesma de forma automatica*/

    class endereco { // criei uma classe chamada endereco
        bairro = '';
        cep = '';
        complemento = '';
        ddd = '';
        estado = '';
        gia = '';
        ibge = '';
        localidade = '';
        logradouro = '';
        regiao = '';
        siafi = '';
        uf = '';
        unidade = '';
    }

    var uf = '';
    var regiao = '';
    var localidade = '';

    console.log("teste fetch api")
    let pessoa;

    // cep valido: 01001000
    // cep errado: 12312313
    console.log(" assincrono, primeira função assincrona escrita");
    var consultarCep = fetch('https://viacep.com.br/ws/12312313/json/')
        .then(res => res.json()) // observe essa linha de codigo, ela poderia ter sido escrita assim:then((res)=>{res.json()})  ou assim: then(function(res){res => res.json()}) , a forma escrita atualmente em uso é uma arraw function mais abreviada atualmente
        .then(r => {
            if (r.erro) {
                throw Error('Esse cep não existe \n(na função con then)') // aqui foi definida a msg de erro caso ele aconteça
            } else {
                localizacao = new endereco(); // criei uma instancia da classe endereco

                localizacao = r; // armazenamos o objeto jsom, que é a resposta da nossa requisição na api viacep em um objeto instanciado da classe endereco
                console.log("Primeira função do curso\n Sem o async e awayt", localizacao) // imprimindo o objeto da resposta da requisição
                // o codigo  a baixo seria uma forma de atribuir os dados recebidos da requisição 
                // como valor a variaveis criada  para receber esses dados
                uf = r.uf;
                regiao = r.regiao;
                localidade = r.localidade;


                // na linha abaixo estamos imprimindo as dados da resposta da requisição que foram armazenados no objeto da classe endereço
                console.log("Cep: " + localizacao.cep + "\n" + "rua: " + localizacao.logradouro + "\n" + "bairro: " + localizacao.bairro);

                // nas proximas tres linhas de codigo abaixo, estamos imprimindo a resposta da requisição que armazenamos nas variaveis
                // uf,regiao e localidade
                console.log("UF: " + uf)
                console.log("Regiao: " + regiao)
                console.log("localidade: " + localidade)
            }
        })
        .catch(err => console.log(err)) // aqui o catch pega a ocorrencia de erro, e imprime a msg de erro
        .finally(msg => console.log('Processamento concluido'))                                // que definimos no .then na exeção throw Error()



    console.log(consultarCep)





    // melhorando a funcção assincrona do curso
    console.log("melhorando a funcção assincrona do curso");

    async function buscarEndereco(cep) { // aqui nos estamos passando um parametro pra função
        try {
            // na linha de baixo pegamos o parametro recebido na função e passamos na url                                                                                               
            var consultarCep2 = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            var consultarCepConvertida = await consultarCep2.json();
            if (consultarCepConvertida.erro) {
                throw Error("Cep não existe \n(na função assincrona do curso)");
            }
            console.log("Função da aula do curso melhorada\n e convertida para json\n", consultarCepConvertida);
            //console.log("Função da aula do curso melhorada\n não convertida\n", consultarCep2);
            return consultarCepConvertida;
        } catch (erro) {
            console.log(erro);

        }

    }

    let cep = ['01001000', '01001001'];  // criamos array de ceps para simular varias consulatas simultaneas
    /** na linha abaixo criamos uma propriedade que vai receber um  conjunto de valores, que é 
     * um resultado da busca feita pela função buscarEndereco(), que usa os valores de array cep[] para fazer 
     * essas buscas, com cada resultado é criado um novo array, por conta do functon .map() e esse array
     * sera armazenado na let conjuntoCeps, esses resultados são promessas ou "promises".
     * com a classe Promise.all vamos resolver as promises
     */
    let conjuntoCeps = cep.map(parametroComDadosDeArrayCep => buscarEndereco(parametroComDadosDeArrayCep));
    Promise.all(conjuntoCeps).then(respostas =>
        console.log("Resolução das promessas, com a classe Promise\n imprime o array retornado em conjuntosCeps\n", respostas));



})() // até aqui nos fizemos um requisição e , implementamos de uma forma que ela pegue varias requisiições 
// porem isso não é muiito util, pra quando uma pessoa esta preenchendo um formulario 


// abaixo vamos implemetar um requição que vai pesquisar um cep , pra nos ajudar a preencher um formulario de cadastro
// muito parecido com o que fizemos acima, mais buscara apenas um cep por vez e exibira o resultado no navegador
// ajudando o usuario a prencher um formulario:





async function buscarEnderecoPeloCep(cep) { // aqui nos estamos passando um parametro pra função
    var msgErro = document.querySelector('#erro');// selecionar a div onde sera colocado a msg de  erro
        msgErro.innerHTML=""; //  atribui um valor vazio 
    try {
        // na linha de baixo pegamos o parametro recebido na função e passamos na url                                                                                               
        var consultarCep2 = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultarCepConvertida = await consultarCep2.json();
        if (consultarCepConvertida.erro) {
            throw Error("Cep não existe \n(na função assincrona do curso)");
        }

        // selecionar os campos para o prencimento automatico
        const bairro = document.getElementById('bairro');
        const estado = document.getElementById('estado');
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        
        
        // add os valores resultado da pesquisa pelo cep aos campos correspondente que selelcionamos acima
        bairro.value = consultarCepConvertida.bairro;
        estado.value = consultarCepConvertida.uf;
        cidade.value = consultarCepConvertida.localidade;
        logradouro.value = consultarCepConvertida.logradouro;


        console.log("Função da aula do curso melhorada\n e convertida para json\n", consultarCepConvertida);
        return consultarCepConvertida;
    } catch (erro) {
        // quando o erro é capturado , atribuimos o conteudo abaixo informando sobre o erro
        msgErro.innerHTML=`<h2>CPF invalido tente novamente</h2>`
        console.log(erro);

    }

}
// abaixo selecionamos o campo cep , e implementamos um evento focusout, pra quando o usuario tirar o focu 
// do campo cep apos prencher o mesmo, esse evento chamara a função buscarEnderecoPeloCep() e prenchera 
// os campos relacionado a endereço
var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => {
 buscarEnderecoPeloCep(cep.value);
});


