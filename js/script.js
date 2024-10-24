console.log("oi")

function mandarmsg(){
    console.log("oi")
    console.log("tudo bem")
    console.log('solicitação recebida')
}

setTimeout(mandarmsg,3000);

function nome3(nome){ // criei uma função nome3 que recebe um parametro
    let n1 = nome // o valor do parametro vai ser atribuido a let n1
    return n1   // essa funão vai retornar um variavel contendo o valor do parametro que ela recebeu
}

imprimir(nome3) // chamei a function imprimir e  passei a fun nome3 como argumento da função imrimir
function imprimir(N){  // cirei uma function imprimir recebi a fun nome3 como parametro
    let n = "jairo cesar"; // criei um let n e passei um valor para ela
     N = n;  // a função que imprimir() recebeu como parametro retorna a variavel n1, e em imprimir nos atribuimos a ela o vlor de let n
    return N; // pegamos o retorno da function nome3() definimos ela como retorno da funcion imprimir()
 }
 fun = imprimir();// criei um variavel global atribui a ela a function imprimir() que retorna a function nome3() 

 setTimeout(function(){ // chamei uma função setTimeout que imprime a variavel fun depois de 5s
    console.log(fun);
 },5000);





console.log("tchau")


function exibirMensagem(nome) {
    console.log("Olá, " + nome);
  }

  function processarEntrada(callback) {
    let nome = "Carlos";
    callback(nome); // A função callback é chamada aqui
  }
  processarEntrada(exibirMensagem)

