a = "1"
b = 0
if(a === 1){
    b = 2    
    c = 2    
} else {
    b = 3
}
console.log(a);
console.log(b);

c = "3"
if(c !== 3){
    d = 0        
} else {
    d = 1
}
console.log(c);
console.log(d);


c = 2
if(c <= 3){
    d = 0
} else {
    d = 1
}
console.log(c);
console.log(d);

c = 2
if(c < 3){
    d = 0
} else if(c === 3){
    d = 1
} else { 
    d = 2   
}
console.log(c);
console.log(d);

e = new Date()
if(e instanceof Date){
    f = 1
} else {
    f = 2
}

g = 5
h = 7
if(g === 5 && h < 10 ){
    i = 0
} else {
    i = 1
}

console.log(g);
console.log(h);
console.log(i);

if(g === 5 || h > 10 ){
    i = 0
} else {
    i = 1
}
console.log(g);
console.log(h);
console.log(i);

j = 3
switch (j) {
    case 1:
        h = 8
        break;

    case 2:
    case 3:
        h = 9
        break;
        
    case 4:
        h = 5
        break;

    default:
        break;
}
console.log(h);


ind = 0
while(ind < 10){
    console.log(ind);
    ind++;
}

ind = 0
do {
    console.log(ind);
    ind++
} while (ind < 10)

for (let index = 0; index < 10; index++) {
    console.log(index);
}

ind = 0
while(ind < 10){
    console.log(ind);
    ind++;
}

ind = 0
do {
    console.log(ind);
    ind++
} while (ind < 10)

for (let index = 0; index < 10; index++) {
    console.log(index);
}


let var1 = 2
const var2  = 3

var1 = 2
var2 = 4
