const test = () => {
    console.log('Rodando callback - SetTimeout');
}

setTimeout(test, 3000);

setInterval(() => {
    console.log('Rodando callback - SetInterval');
},1000);

// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetTimeout
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval
// Rodando callback - SetInterval

