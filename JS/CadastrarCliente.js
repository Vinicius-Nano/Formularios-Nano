const inputs = document.querySelectorAll("[required]");


inputs.forEach((elemento) =>{
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        atualizaItem(evento.target.textContent,(evento.target.parentNode));
    })
    
    
});

inputs.forEach((elemento) =>{
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        validaCampo(evento.target);
    })
    
    
});

function validaCampo(campo){
 const msnErro = campo.parentNode.querySelector("[data-erro]");
 if(campo.name === "nome"){
    if(campo.value.length<5){
        msnErro.textContent = "Digite o nome completo";
    }else{
        msnErro.textContent = "";
    }
 }
}



function atualizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[required]");
    var str = item.value;
    if(str===""){
        item.value = "texto invalido";
    }
}

