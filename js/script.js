const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit);


const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;

console.log(hoursInMonth); 
console.log(minutesInMonth);


const health = 100;
const energy = 100;

let healthDamag = health - 30;
let energyUse = energy - 50;

console.log(healthDamag, energyUse);


const totalPrice = 140;
const discount = 10;

let discountedPrice = totalPrice * discount;
console.log(discountedPrice);


const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);

console.log(roundedDown);


const floatString = "45.67";
const parsedFloat = parseFloat(floatString);

console.log(parsedFloat);


const intString = "123";
const parsedInt = parseInt(intString);

console.log(parsedInt);


const number = 100;
const sqrtNumber = Math.sqrt(number);

console.log(sqrtNumber);


const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(stringNumber);
console.log(convertedInt);

const convertedString = integer.toString();
console.log(convertedString);