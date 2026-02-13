
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot be divided by zero";
    }
    return a / b;
};
function Calculator() {
   
    console.log(`divide = ${divide(10, 2)}`);
    
}
Calculator();
module.exports = { divide };