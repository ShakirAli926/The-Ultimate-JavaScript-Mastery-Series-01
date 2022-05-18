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
