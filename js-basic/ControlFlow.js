/*
    For...in Loop
    it return the index number instead of items
*/

const person = {
  name: "Shakir",
  age: "20",
};

for (let key in person) {
  console.log(key, person[key]);
}

const arr = ["red", "blue", "green"];

for (let index in arr) {
  console.log(index, arr[index]);
}

// Access of peroperty

// Dot Notation
person.name;
// Bracket Notation
person["name"];

// ---------------------------------------

/*
    For...of Loop
    it return the item instead of index numbers in an Array
*/

for (let color of arr) {
  console.log(color);
}

// --------------------------------------------------

/*
    Exercise : Write a function that takes two numbers and return the maximum of the two.
*/

function maxNumber(x, y) {
  return x > y ? x : y;
}

console.log(maxNumber(55, 10));

// --------------------------------------------------

/*
    Exercise 2- Landscape or Portrait
*/

function isLandscape(width, height) {
  // return width > height ? true : false;
  return width > height;
}

let width = 1020;
let height = 720;

const checkScreen = isLandscape(width, height);

console.log(checkScreen);

// --------------------------------------------------

/*
    Exercise 3- FizzBuzz
    - Divisible by 3 > Fizz
    - Divisible by 5 > Buzz
    - Divisible by both 3 and 5  > FizzBuzz
    - Not divisible by 3 and 5   > input
    - Not a number >  "Not a number"

*/

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  }
  if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 == 0) {
    return "Buzz";
  } else return input;
}
console.log(fizzBuzz("37"));

// --------------------------------------------------

/*
    Exercise 4- Demerit Points
*/
