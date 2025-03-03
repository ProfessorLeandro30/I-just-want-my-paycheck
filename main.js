let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "mysterious and curious person who is looking at my little project!";
}else{
    elemento.textContent = nomeUsuário;
}