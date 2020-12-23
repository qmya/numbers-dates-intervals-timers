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

//DATES AND TIME
//First way :

const now = new Date();
console.log(now); // today: Wed Dec 23 2020 10:06:17 GMT-0500 (Eastern Standard Time)

//❷ Way :
// Parsing the string
// console.log(new Date('Dec 23 2020 10:06:17'));
// console.log(new Date('August 11, 1995'));
// console.log(new Date('2019-11-18T21:31:17.178Z'));

// //Month is a 0 base 0 - 11
// console.log(new Date(2037, 11, 19, 15, 23, 19));

// //Javascript is so smart that it will change thatit dec because noov does have 31 days
// console.log(new Date(2020, 10, 31)); //Wed Dec 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)

// //The Unix epoch is the time 00:00:00 UTC on 1 January 1970.
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log(new Date(259200000));

//Working with dates
// const future = new Date(2037, 11, 19, 15, 23);
// console.log(future); //Whole date with time & day
// console.log(future.getFullYear()); //2037
// console.log(future.getMonth()); //December 👉🏽11
// console.log(future.getDate()); //19
// console.log(future.getDay()); //6 👉🏽 Sat (M, T, W, T, F, Sat, Sun)
// console.log(future.getHours()); //15
// console.log(future.getMinutes()); //23
// console.log(future.getSeconds()); //00

// //Some international time
// console.log(future.toISOString()); //2037-12-19T20:23:00.000Z

// console.log(future.getTime()); //2144866980000
// console.log(future.getDate(2144866980000)); //19

// future.setFullYear(2040);
// console.log(future);

const future = new Date(2037, 11, 19, 15, 23);
console.log(+future);

const numberOfDaysPassed = (date1, date2) => {
  if (date1 < date2) {
    const days = date2 - date1;
    console.log(`Number of ${days}`);
  } else {
    const days = (date1 - date2) / (24 * 60 * 60 * 1000);
    console.log(`Number of ${days}`);
  }
};

numberOfDaysPassed(
  new Date(2037, 11, 19, 15, 23),
  new Date(2037, 11, 10, 15, 23)
);

//Gives you these dividers according to the country
const numNew = 5643284376;
const options = {
  style: 'currency',
  currency: 'USD',
  // useGrouping: false, //number is shown with a separators
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(numNew)); //US: 5,643,284,376

console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(numNew)); //Germany: 5.643.284.376

console.log(
  'Pakistan:',
  new Intl.NumberFormat('ur-PK', options).format(numNew)
); //Pakistan: 5,643,284,376
