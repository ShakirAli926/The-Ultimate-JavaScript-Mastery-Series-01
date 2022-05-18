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
    - Speed Limit = 70
    - Extra 5 -> 1 Point increase panelty
    - Math.floor(1.3) > 1
    - 12 Points >   License Suspended

*/

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPeroint = 5;

  // if (speed < speedLimit + kmPeroint) {
  //   return "OK";
  // } else {
  //   const panelty = Math.floor((speed - speedLimit) / kmPeroint);
  //   if (panelty >= 12) {
  //     return "License Suspended";
  //   } else {
  //     return `Point : ${panelty}`;
  //   }
  // }

  if (speed < speedLimit + kmPeroint) {
    return "OK";
  }
  const panelty = Math.floor((speed - speedLimit) / kmPeroint);
  if (panelty >= 12) {
    return "License Suspended";
  } else {
    return `Point : ${panelty}`;
  }
}

console.log(checkSpeed(130));
// --------------------------------------------------

/*
    Exercise 5- Even and Odd Numbers   
*/

function showNumber(number) {
  for (var i = 0; i <= number; i++) {
    // i % 2 == 0 ? console.log(i, '"EVEN"') : console.log(i, '"ODD"');

    const message = i % 2 ? "EVEN" : "ODD";

    console.log(i, message);
  }
}

showNumber(10);
// --------------------------------------------------

/*
    Exercise 6- Count Truthy   

    * Falsy 
      - undefined
      - null
      - ''
      - false
      - 0
      - NaN
*/

const array = [undefined, 0, 1, "joker"];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  return count;
}
console.log(countTruthy(array));
