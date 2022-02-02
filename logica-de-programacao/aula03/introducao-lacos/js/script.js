function calcularTabuada() {

    let num = parseInt(document.getElementById("num").value);
    let cont = 1;
    let res;
    let texto="";
    
    texto = '<h3>while() { }</h3>';
        
    while (cont <= 10) {
        res=num*cont;
        texto += `${num.toString().padStart(2,0)} * 
                  ${cont.toString().padStart(2,0)} = 
                  ${res.toString().padStart(2,0)} <br/>`;
        cont++;
    }
    
    texto += '<br/>';
    
    texto += '<h3>do { } while()</h3>';
    cont = 1;
    do {
        res=num*cont;
        texto += `${num.toString().padStart(2,0)} * 
                  ${cont.toString().padStart(2,0)} = 
                  ${res.toString().padStart(2,0)} <br/>`;
        cont++;
    } while(cont<=10)
    
    texto += '<br/>';
    
    texto += '<h3>for() { }</h3>';
    for (let i = 1; i <= 10; i++) {
        res=num*i;
        texto += `${num.toString().padStart(2,0)} * 
                  ${i.toString().padStart(2,0)} = 
                  ${res.toString().padStart(2,0)} <br/>`;
    }    

    document.getElementById("resultado").innerHTML = texto;
}
