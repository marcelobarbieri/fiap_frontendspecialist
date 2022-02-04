/* OS RETORNOS NÃO FORAM VALIDADOS */

/* Date */

// let d = new Date();
// alert(d.toDateString());

// /* Number */

// let n1=new Number(1000);
// alert(n1.valueOf());

// let n2 = new Number("80.90674");
// alert (n2.toFixed()); 
// alert (n2.toFixed(3)); // arredonda

// alert (n2.toPrecision());
// alert (n2.toPrecision(1));
// alert (n2.toPrecision(5));

// alert (n2.toExponential());
// alert (n2.toExponential(5));

// /* String */

// let s1 = new String("Criando uma string");
// alert(s1.length());  // retorna 18, o tamanho da string
// alert(s1.charAt(4)); // retorna n, primeira posição é zero
// alert(s1.charCodeAt(0)); // retorna o código 67, tabela ascii
// alert(s1.concat(" e concatenando com outra")); // retorna "Criando uma string e concatenando com outra"
// alert(s1.indexOf("uma")); // retorna 8, início da cadeia "uma"
// alert(s1.lastIndexOf("a")); // retorna 10, início da última ocorrência da cadeia "a"

// let s2 = new String("Criando uma string");
// let s2=/i/;
// alert(n.match(s2)); // retorna a ocorrência encontrada: "i"

// let s2=/z/;
// alert(s2.match(s2)); // retorna nulo pois a ocorrência não foi encontrada

// alert(s2.replace("String","Teste")); // retorna "Criando uma Teste"
// alert(s2.substring(6,10)); // retorna "o um"
// alert(s2.substr(2,8)); // retorna "iando um"

let s3 = new String("String, Criando, uma String");
alert(s3.split(",")[0]); // retorna "String" 
alert(s3.split(",",2)); // retorna "String, Criando" 

alert(s3.toUpperCase()); // retorna "STRING, CRIANDO, UMA STRING"
alert(s3.toLowerCase()); // retorna "string, criando, uma string"