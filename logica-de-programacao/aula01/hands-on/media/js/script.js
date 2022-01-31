let ac=parseFloat(prompt("Nota AC (20%):"));
let ag=parseFloat(prompt("Nota AG (10%):"));
let at=parseFloat(prompt("Nota AT (70%):"));

document.getElementById("saida").innerHTML =
    `Nota AC (20%): ${ac}<br/>` +
    `Nota AG (10%): ${ag}<br/>` +
    `Nota AT (70%): ${at}<br/>` +
    `Média: ${(ac*0.20)+(ag*0.10)+(at*0.70)}`;
