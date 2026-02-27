
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot be divided by zero, or will be undefined";
    }
    return a / b;
};
module.exports = { divide };