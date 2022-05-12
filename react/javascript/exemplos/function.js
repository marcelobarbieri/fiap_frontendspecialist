// --- ARROW FUNCTION

const fnc1 = (a,b) => {
    return a*b;
}
console.log(fnc1(2,3)); 
// 6

// --- OPERADOR REST

const fnc2 = (a, ...b) => {
    console.log(a);
    console.log(b);
}
fnc2(1, 2, 3, 4, 5);
// 1
// [2, 3, 4, 5]

// --- PARAMETRO PADRAO

const fnc3 = (a = 1) => {
    console.log(a);
}
fnc3(); // 1
fnc3(2); // 2
fnc3("a"); // a
fnc3({a:1, b:2}) // {a:1, b:2}

const fnc4 = (fn) => {
    switch (typeof fn) {
        case "function": fn(); break;    
        case "number": console.log(fn); break;
    }       
}
fnc4(fnc3); // 1
fnc4(2); // 2

// --- ESCOPO DE FUNÇÃO

const fnc5 = () => {
    let ax = 1;
    ay = 2;
}
//console.log(ax); // undefined
console.log(ay); // undefined