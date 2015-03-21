var num1 = process.argv[2]
var operator = process.argv[3]
var num2 = process.argv[4]

if (operator === '+') {
    console.log(Number(num1) + Number(num2));
} else if (operator === '-') {
    console.log(Number(num1) - Number(num2));
} else if (operator === '*') {
    console.log(Number(num1) * Number(num2));
} else if (operator === '/') {
    console.log(Number(num1) / Number(num2));
}
