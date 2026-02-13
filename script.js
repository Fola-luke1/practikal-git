const add = (a, b) => {
    return a + b;
}
function Calculator() {
    console.log(`add = ${add(10, 5)}`);
}
Calculator();
module.exports = { add};