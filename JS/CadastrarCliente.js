const textbox = document.querySelectorAll("[data-txt]");

textbox.forEach((elemento) =>{
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        atualizaItem(evento.target.textContent,(evento.target.parentNode));
    })
    
    
});



function atualizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[data-txt]");
    if(acao.includes('@') === false){
        item.value = "texto invalido";
    }
}