
const { add, subtract, multiply, divide } = require('./script');

function test(name, actual, expected) {
    if (actual === expected) {
        console.log(`PASS: ${name}`);
        return true;
    } else {
        console.log(` FAIL: ${name}`);
        console.log(`   Expected: ${expected}`);
        console.log(`   Got:      ${actual}`);
        return false;
    }
}


let passed = 0;
let failed = 0;

// ADDITION TESTS 
console.log(' Addition Tests:');

if (test('add(2, 3)', add(2, 3), 5)) {
    passed++;
} else {
    failed++;
}

if (test('add(10, 5)', add(10, 5), 15)) {
    passed++;
} else {
    failed++;
}

if (test('add(-2, -3)', add(-2, -3), -5)) {
    passed++;
} else {
    failed++;
}
if (test('add(5, 0)', add(5, 0), 5)) {
    passed++;
} else {
    failed++;
}
// SUBTRACTION TESTS 

console.log(' Subtraction Tests:');

if (test('subtract(10, 5)', subtract(10, 5), 5)) {
    passed++;
} else {
    failed++;
}

if (test('subtract(5, 10)', subtract(5, 10), -5)) {
    passed++;
} else {
    failed++;
}

if (test('subtract(0, 5)', subtract(0, 5), -5)) {
    passed++;
} else {
    failed++;
}
// MULTIPLICATION TESTS
console.log('Multiplication Tests:');
if (test('multiply(4, 5)', multiply(4, 5), 20)) {
    passed++;
} else {
    failed++;
}

if (test('multiply(5, 0)', multiply(5, 0), 0)) {
    passed++;
} else {
    failed++;
}

if (test('multiply(-3, 4)', multiply(-3, 4), -12)) {
    passed++;
} else {
    failed++;
}

//  DIVISION TESTS
console.log(' Division Tests:');

if (test('divide(10, 2)', divide(10, 2), 5)) {
    passed++;
} else {
    failed++;
}

if (test('divide(7, 2)', divide(7, 2), 3.5)) {
    passed++;
} else {
    failed++;
}

if (test('divide(5, 0)', divide(5, 0), "Error: Cannot divide by zero")) {
    passed++;
} else {
    failed++;
}

console.log(' Results: ' + passed + ' passed, ' + failed + ' failed');


