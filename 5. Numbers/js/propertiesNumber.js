// PROPERTIS OF THE NUMBERS IN JAVASCRIPT

// .MAX_VALUES: The maximus value than can be represent in JavaScript (Syntax: Number.MAX_VALUES)
const valueMaximus = Number.MAX_VALUE;
console.log(valueMaximus); // 1.7976931348623157e+308

const valueMaximus2 = 500;
console.log(valueMaximus2.MAX_VALUE); // Return Undefined because is a properties of the class Number

// .MIN_VALUES: The minimum value than can be represent in JavaScript (Syntax: Number.MIN_VALUES)
const valueMinimum = Number.MIN_VALUE;
console.log(valueMinimum); // 5e-324

// .EPSILON: A number than is used for represented quantities math very small (Syntax: Number.EPSILON)
const a = Number.EPSILON;
console.log(a); // 2.220446049250313e-16

// .MAX_SAFE_INTEGER: Is the value maximus for carry out calculations with safe in JavaScript (Syntax: Number.MAX_SAFE_INTEGUER)
const b = Number.MAX_SAFE_INTEGER;
console.log(b); // 9007199254740991

// .MIN_SAFE_INTEGER: Is the value minimus for carry out calculations with safe in JavaScript (Syntax: Number.MIN_SAFE_INTEGUER)
const c = Number.MIN_SAFE_INTEGER;
console.log(c); // -9007199254740991

// .POSITIVE_INFINITY: Represent the positive infinity (Syntax: Number.POSITIVE_INFINITY)
const infinityPositive = Number.POSITIVE_INFINITY;
console.log(infinityPositive); // Infinity

// .NEGATIVE_INFINITY: Represent the negative infinity (Syntax: Number.NEGATIVE_INFINITY)
const infinityNegative = Number.NEGATIVE_INFINITY;
console.log(infinityNegative); // -Infinity

// .NaN: Represent numeric values than are impossible of represent as numbers (Syntax: Number.NaN)
const notNumber = Number.NaN;
console.log(notNumber); // NaN