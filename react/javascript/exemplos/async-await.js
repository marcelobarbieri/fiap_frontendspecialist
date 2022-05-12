const test1 = async () => {      
    let info = 0;
    for (let index = 0; index < 1000000000; index++) {        
        info++;
    }
    return info;
}

const test2 = async () => {
    let info = await test1();    
    console.log(`Retorno: ${info}`);
}

test2();
console.log('Spinner');

// ...

// Spinner
// Retorno: 1000000000