#!/usr/bin/env node

var args = process.argv[2].split(' ')
var num1 = args[0]
var operator = args[1]
var num2 = args[2]

if (operator === '+') {
    console.log(Number(num1) + Number(num2));
} else if (operator === '-') {
    console.log(Number(num1) - Number(num2));
} else if (operator === '*') {
    console.log(Number(num1) * Number(num2));
} else if (operator === '/') {
    console.log(Number(num1) / Number(num2));
}
