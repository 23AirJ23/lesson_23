"use strict"

// For While 
// Задача 3

let num = 0;
while (num < 3) {
   console.log(num);
   num++;
}

// Задача 4

Num1: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break Num1
      }
      console.log(size);
   }
}

// Number
// Завдання 1

let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Завдання 2

let value = "135.58px";
console.log(parseFloat(value));

// Завдання 3 

let value2 = 58 + "Фрилансер";
if (value2 !== NaN) {
   console.log("Результат NaN");
   console.log(isNaN(value2));
}

// Завдання 4 

console.log(Math.max(10, 58, 39, -150, 0));

// Завдання 5

console.log(Math.floor(58.858));


// String
// Завдання 2

let text = "фрилансер"
console.log(text[5]);

// Завдання 4

console.log(text.toUpperCase());

// Завдання 5

console.log(text.slice(3, 6));