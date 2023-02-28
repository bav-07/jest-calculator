const {Calculator} = require('./calculator');

let calculator;

beforeEach(() => {
    calculator = new Calculator();
})

// AAA
// Arrange - the data
// Act - call the function we are actually testing
// Assert - check the value against our expectation

describe('testing addition', () => {
    test('can add two positive numbers', () => {
        const expected = 5;
        const actual = calculator.add(2, 3);
        expect(actual).toBe(expected);
    })
    test('can add a negative and a positive number', () => {
        const expected = -2;
        const actual = calculator.add(-5, 3);
        expect(actual).toBe(expected);
    })
    test('can add two negative numbers', () => {
        const expected = -9;
        const actual = calculator.add(-8, -1);
        expect(actual).toBe(expected);
    })
    test('can add two large positive numbers', () => {
        const expected = 1184854858;
        const actual = calculator.add(641341345,543513513)
        expect(actual).toBe(expected);
    })
    test('can add zero', () => {
        const expected = 15;
        const actual = calculator.add(15, 0);
        expect(actual).toBe(expected);
    })
})

describe('testing subtraction', () => {
    test('can subtract a positive number from a positive number', () => {
        const expected = 5;
        const actual = calculator.subtract(9, 4);
        expect(actual).toBe(expected);
    })
    test('can subtract negative number from a positive number', () => {
        const expected = 10;
        const actual = calculator.subtract(7,-3)
        expect(actual).toBe(expected);
    })
    test('can subtract positive number from a negative number', () => {
        const expected = -8;
        const actual = calculator.subtract(-5,3);
        expect(actual).toBe(expected);
    })
    test('can subtract negative number from a negative number', () => {
        const expected = -1;
        const actual = calculator.subtract(-8,-7);
        expect(actual).toBe(expected);
    })
    test('can subtract two large positive numbers', () => {
        const expected = 32755194372;
        const actual = calculator.add(23524959138,9230235234)
        expect(actual).toBe(expected);
    })
})

describe('testing multiplication', () => {
    test('can multiply two positive numbers', () => {
        const expected = 21;
        const actual = calculator.multiply(7, 3);
        expect(actual).toBe(expected);
    })
    test('can multiply positive number with negative numebr', () => {
        const expected = -72;
        const actual = calculator.multiply(8, -9);
        expect(actual).toBe(expected);
    })
    test('can multiply two negative numbers', () => {
        const expected = 12;
        const actual = calculator.multiply(-3, -4);
        expect(actual).toBe(expected);
    })
    test('can multiply positive number by zero', () => {
        const expected = 0;
        const actual = calculator.multiply(131, 0);
        expect(actual).toBe(expected);
    })
    test('can multiply negative number by zero', () => {
        const expected = -0;
        const actual = calculator.multiply(-235, 0);
        expect(actual).toBe(expected);
    })
    test('can multiply two large numbers', () => {
        const expected = 47276248492812;
        const actual = calculator.multiply(13413513,3524524);
        expect(actual).toBe(expected);
    })
})

describe('testing division', () => {
    test('can divide positive number by positive number', () => {
        const expected = 6;
        const actual = calculator.divide(42, 7);
        expect(actual).toBe(expected);
    })
    test('can divide positive number by negative number', () => {
        const expected = -5;
        const actual = calculator.divide(40, -8);
        expect(actual).toBe(expected);
    })
    test('can divide negative number by positive number', () => {
        const expected = -4;
        const actual = calculator.divide(-36, 9);
        expect(actual).toBe(expected);
    })
    test('can divide negative number by negative number', () => {
        const expected = 2;
        const actual = calculator.divide(-20, -10);
        expect(actual).toBe(expected);
    })
    test('can divide positive number by 0', () => {
        const expected = Infinity;
        const actual = calculator.divide(1423, 0);
        expect(actual).toBe(expected);
    })
    test('can divide negative number by 0', () => {
        const expected = -Infinity;
        const actual = calculator.divide(-23523, 0);
        expect(actual).toBe(expected);
    })
    test('can divide two large numbers', () => {
        const expected = 135654;
        const actual = calculator.divide(6361765638,46897);
        expect(actual).toBe(expected);
    })
    test('can divide by decimals', () => {
        const expected = 170;
        const actual = calculator.divide(34,0.2);
        expect(actual).toBe(expected);
    })
})

describe('testing modulus operator', () => {
    test('correctly finds remainder of positive number divided by positive number', () => {
        const expected = 5;
        const actual = calculator.modulus(33, 7);
        expect(actual).toBe(expected);
    })
    test('correctly finds remainder of positive number divided by negative number', () => {
        const expected = 6;
        const actual = calculator.modulus(69, -9);
        expect(actual).toBe(expected);
    })
    test('correctly finds remainder of negative number divided by positive number', () => {
        const expected = -5;
        const actual = calculator.modulus(-33, 7);
        expect(actual).toBe(expected);
    })
    test('correctly finds remainder of negative number divided by negative number', () => {
        const expected = -6;
        const actual = calculator.modulus(-69, -9);
        expect(actual).toBe(expected);
    })
})

describe('testing odd function', () => {
    test('correctly validates odd number', () => {
        const actual = calculator.odd(3);
        expect(actual).toBeTruthy();
    })
    test('correctly invalidates even number', () => {
        const actual = calculator.odd(1342516);
        expect(actual).toBeFalsy();
    })
    test('correctly validates negative odd number', () => {
        const actual = calculator.odd(-5);
        expect(actual).toBeTruthy();
    })
})

describe('testing even function', () => {
    test('correctly validates even number', () => {
        const actual = calculator.even(25354);
        expect(actual).toBeTruthy();
    })
    test('correctly invalidates odd number', () => {
        const actual = calculator.even(87643);
        expect(actual).toBeFalsy();
    })
    test('correctly validates negative even number', () => {
        const actual = calculator.even(-67466);
        expect(actual).toBeTruthy();
    })
})