// Crie uma aplicação WEB na qual o visitante realiza um login e deve,
// então, inserir um texto para autenticar o usuário e outro para
// autenticar a senha. Se o usuário digitado for igual a "adm" e a senha
// for igual a "123", mostre uma mensagem em um parágrafo com o texto
// "Seja bme-vindo" na cor verde. Caso contrário, mostre a mensagem
// "Login incorreto" na cor vermelha. Dica: Você pode usar operadores
// de conjunção &&

function login() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if ( (usuario === "adm") && (senha === "123") ) {
        // mostrar mensagem com o texto "Seja bem-vindo" na cor verde
        element = document.getElementById("saida");
        element.innerHTML = "Seja bem-vindo!";
        element.style.color = "#00FF00"
        
    } else {
        // mostrar mensagem "Login incorreto" na cor vermelha
        element = document.getElementById("saida");
        element.innerHTML = "Login incorreto!";
        element.style.color = "#FF0000"
    }
}