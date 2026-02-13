const add = (a, b) => {
    return a + b;
}
function Calculator() {
    console.log(`add = ${add(10, 2)}`);
}
Calculator();
module.exports = { add};