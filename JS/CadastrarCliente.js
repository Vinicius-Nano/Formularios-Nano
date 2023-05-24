const inputs = document.querySelectorAll("[required]");


inputs.forEach((elemento) =>{
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        atualizaItem(evento.target.textContent,(evento.target.parentNode));
    })
    
    
});



/*function atualizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[required]");
    var str = item.value;
    if(str.includes('@') === false){
        item.value = "texto invalido";
    }
}*/