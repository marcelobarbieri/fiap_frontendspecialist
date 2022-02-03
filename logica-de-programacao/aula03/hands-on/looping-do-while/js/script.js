function quantidade() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num=num1;
    let res = 0;    

    do{
        num++;
        if(num%2==0){
            res++;
        }
    } while(num<num2);
    
    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}
