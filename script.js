const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}


const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function Calculator() {
    console.log(`add = ${add(10, 5)}`);
    console.log(`subtract = ${subtract(10, 5)}`);
    console.log(`multiply = ${multiply(10, 5)}`);
    console.log(`divide = ${divide(10, 5)}`);
    
}
Calculator();

module.exports = { add, subtract, multiply, divide };