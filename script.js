const multiply = (a, b) => {
    return a * b * b;
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}


const divide = (a, b) => {
    if (b === 0) {
        return "Cannot be divided by zero";
    }
    return a / b;
};

function Calculator() {
    console.log(`add = ${add(10, 2)}`);
    console.log(`subtract = ${subtract(10, 2)}`);
    console.log(`multiply = ${multiply(10, 2)}`);
    console.log(`divide = ${divide(10, 2)}`);
    
}
Calculator();

module.exports = { multiply };