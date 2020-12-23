'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
/////////////////////////////////////////////////

console.log(23 === 23.0); // true
//Base 10 : 0 to 10
//Base 2 : 0 and 1
console.log(0.1 + 0.2); // 0.30000000000000004 what a joke 😂
console.log(0.1 + 0.2 === 0.3); //false

//Conversion
console.log(Number('23')); //Converting string to number 😀
console.log(+'23'); //When javascript saw the + sign it automatically convert the string to number 😀

//Parsing Integer
console.log(Number.parseInt('30px', 10)); //will give you 30
console.log(Number.parseInt('e23', 10)); //NaN

//Parsing decimals
console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

//Not a Number NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('23')); //false, its a string

//MATH ROUNDING:
//MATH √
console.log(Math.sqrt(16)); //4
//Square-root  of something
console.log(5 ** 2); //25
console.log(25 ** (1 / 2)); //5
//Cubic root
console.log(8 ** (1 / 3)); //2

//Math Maximum
console.log(Math.max(5, 18, 23, 11, 2)); //23

//Math Minimum
console.log(Math.min(5, 18, 23, 11, 2)); //2

//radius of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random number
console.log(Math.trunc(Math.random() * 6) + 1); //give a number between 0 to 6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min; //Math.trunc(Math.random() * (20 -10) + 1) + 10 👉🏽 10 to 20
console.log(randomInt(10, 20));

//rounding integer
console.log(Math.trunc(23.3));

console.log(Math.round(23.9)); //nearest number

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

//Remainder
console.log(5 % 2); //remainder = 1
console.log(5 / 2); //2.5

//even remainder is 0
console.log(6 % 2); //0
console.log(6 / 2); //3

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
console.log(isEven(28));

//BigInt
//Numbers are represented by 64 bit either 64 zeros or ones
console.log(2 ** 53 - 1); //biggest number that javascript can save it
console.log(Number.MAX_SAFE_INTEGER);

//ES20 we can save as number as a big as you want
console.log(43267317624282748637282734683273643728736437n); //we put n at the end
console.log(BigInt(56327846));

//operations
console.log(10000n + 10000n);

console.log(43267819346728912873645728913746728n * 53627183746572813647281n);

const huge = 5637289174628874654382n;
const num = 23;
// console.log(huge * num); //Can not mix BigInt with simple integer , Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num));

//Comparison
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigInt

//console.log(Math.sqrt(16n)); //Does not work on big int
