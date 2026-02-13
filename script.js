const multiply = (a, b) => {
    return a * b;
}
function Calculator() {
    console.log(`multiply = ${multiply(10, 2)}`);    
}
Calculator();

module.exports = { multiply };