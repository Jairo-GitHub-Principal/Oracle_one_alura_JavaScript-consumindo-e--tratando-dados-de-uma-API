(function(){

    let body = document.querySelector('body')
    body.style.display="flex"
    body.style.flexDirection="column"
    body.style.alignItem = "center"
    body.style.ustifyContent="center"
    
    let hum = document.querySelector('#titulo')
    hum.textContent = "titulo"
    let hdois = document.getElementById('subtitulo')
    hdois.textContent="Subtitulo"
    
    let botao = document.querySelector('button')
    botao.textContent = "mudar";
    
    
    // cor de texto
    hum.style ="color:red";
    hdois.style = "color:blue";
    
    // alinhamento
    hum.style.display="flex"
    hum.style.justifyContent="center"
    
    hdois.style.display = "flex";
    hdois.style.justifyContent = "center";
    
    botao.style = "color:yellow;padding:30px;background:brown"
    
    botao.textAlign = "center"
    botao.style.fontSize = "20px";
    botao.style.fontWeight ="600"
    
    
    
    
    botao.addEventListener("click", function(){
        hum.style.color="blue"
        hdois.style.color = "red"
        botao.style.background ="yellow"
        botao.style.color = "green"
        botao.style.fontSize = "20px"
        botao.style.fontWeight ="600"
    })
    
   
})()

