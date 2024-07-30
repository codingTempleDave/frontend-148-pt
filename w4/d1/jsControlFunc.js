const age = 25;

if (age >= 21) {
  console.log("behave");
}

let time = 22;

if (time < 12) {
  console.log("Good morning!");
}
else if (time < 18) {
  console.log("Good afternoon!");
}
else {
  console.log("Good evening!");
}

let isRaining = true;
let umbrellaAvailable = false;

if (isRaining) {
  if (umbrellaAvailable) {
    console.log("Don't forget your umbrella!");
  }
  else {
    console.log("It's raining, but you don't have an umbrella.");
  }
}
else {
  console.log("No need for an umbrella today!");
}

// ++ -- operators - when things happen
let num = 5;
console.log(num++);
console.log(num--);
console.log(num);

let num2 = 5;
console.log(++num2);
console.log(--num2);

// LOOPS

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let count = 0;
while (count < 5){
  count++;
  console.log("Count:" , count);
}

// runs at least once no matter what
let whileNum = 8;
do {
  console.log("Number:", whileNum);
  whileNum++;
} while(whileNum <= 5);

// nested loops and template literals/strings
// allows you to insert variables into a string without using +
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    // not a single quote ' its a tick mark ` ${varName}
    console.log(`(${x},${y})`);
  }
}

// For In loop.  Great for looping through objects and arrays
const fruits = ["apple", "banana", "cherry"];

// fruitIndex - temp variable that will be the index position
for (const fruitIndex in fruits) {
  if(fruits[fruitIndex] === "banana") {
    console.log("WE FOUND A BANANA!!!!");
  }
  else{
    console.log("Fruit:", fruits[fruitIndex]);
  }
}

// puts value at the end of the array
fruits.push("kiwi");

for (const fruitIndex in fruits) {
  console.log("Fruit:", fruits[fruitIndex]);
}


//// FUNCTIONS

function greet(name) { // parameter
  return "Hello " + name + "!";
  // this is ignored because its after the return
  console.log("I will not run");
}

console.log(greet("George")); // argument

// closures - likely interview question
// closures are the child function retaining the
// varaibles/values of the parent function
function outer() {
  let message = "I am from the outer function";

  // child functions have access to parent variables
  function inner() {
    console.log(message); // Accesses 'message' from outer scope after it's done executing
  }

  return inner; // returning the actual inner() function
}

let closureFunc = outer(); // outer() runs, returns the inner function, keeps value of message
console.log(closureFunc);
closureFunc(); // this runs the inner function and it retains the value of message


function add(a, b){
  return a + b;
}

console.log(add(3, 4));

// the return is implied/built in
const addArrow = (a, b) => a + b;

console.log(addArrow(3,5));


// Regular Function vs arrow functions and this.
var checkThis = {

  str: "sup",
  normalFunction: function() { console.log("In normal function:", this, this.str); },
  arrowFunction: () => console.log("In arrow function:", this, this.str)

};

checkThis.normalFunction(); // scoped from where the function was called from
                            // within (the checkThis object)
checkThis.arrowFunction();  // scoped from the function where it's been defined - wasn't
                            // defined in a func so its the window object

var checkThis2 = {
  str: "sup",
  normalFunction:
    function normFunc(){
      setTimeout( function() { console.log("In normal function:", this, this.str) }, 1000 )
    },
  arrowFunction:
    function arrFunc(){
      setTimeout( () => console.log("In arrow function:", this, this.str), 1000 )
    }

};

checkThis2.normalFunction();// scoped from where the function was called from within
                            // (setTimeout, the window object)
checkThis2.arrowFunction(); // scoped from where it's been defined (arrFunc) which is in
                            // the object so this is the object