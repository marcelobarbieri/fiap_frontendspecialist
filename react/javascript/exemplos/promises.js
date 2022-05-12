const test = async () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve('OK');
                //reject('NOK');
            }, 2000);
        }
    )
}

const info = test()
    .then(response => console.log(`THEN ${response}`))
    .catch(error => console.log(`CATCH ${error}`));

console.log(info); // Promise { <pending> }
console.log('Spinner');

// Promise { <pending> }
// Spinner
// THEN OK

// Promise { <pending> }
// Spinner
// CATCH NOK