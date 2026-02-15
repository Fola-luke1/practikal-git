const subtract = (a, b) => {
    return a - b;
}
function Calculator() {   
    console.log(`subtract = ${subtract(10, 2)}`);   
}
Calculator();

module.exports = {subtract};