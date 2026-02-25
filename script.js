
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot be divided by zero";
    }
    return a / b;
};
module.exports = { divide };