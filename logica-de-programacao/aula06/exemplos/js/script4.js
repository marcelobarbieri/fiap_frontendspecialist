// -----------------------------------------------------------------
// Object Arguments
// -----------------------------------------------------------------

// argumentos dinâmicos

function frutas() { 
    let texto="";
    for(let i=0;i<arguments.length;i++){
        texto += (arguments[i] + "\n");        
    }        
    alert(texto);
}

frutas("Laranja","Maçã","Kiwi","Mamão","Pera");

// Laranja
// Maçã
// Kiwi
// Mamão
// Pera