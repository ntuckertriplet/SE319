const input = require('readline-sync')

let number1 = input.question("1st Number: ");
let number2 = input.question("2nd Number: ");
let number3 = input.question("3rd Number: ");
let number4 = input.question("4th Number: ");

console.log("Factorial of the first number is = " + factorial(Number(number1)));
console.log("The sum of all digits in the 2nd number is = " + sumDigits(Number(number2)));
console.log("The reverse of the 3rd number is = " + reverseString(number3));
console.log("Is the 4th number a palindrome (True/False)? = " + palindrome(number4));

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

function sumDigits(num) {
    let sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) return "True";
    return "False";
}
