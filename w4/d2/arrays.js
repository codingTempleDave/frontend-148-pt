let heroes = ["hulk", "iron man", "black widow"];
console.log(heroes[0]);
heroes.push("spiderman");
console.log(heroes);
console.log(heroes.length);
console.log(heroes[heroes.length - 1])

let lastHero = heroes.pop();
console.log(lastHero);
console.log(heroes.length);
console.log(heroes);

// loops through heroes, hero is the temp variable that will equal each individual
// item in the array.
heroes.forEach( hero => {
  console.log(hero);
})

let heroesMap = ["hulk", "iron man", "black widow"];

// map loops through the array like forEach but it returns a new array
// everything that is returned inside of the arrow function in map
// is placed in the new array.  Does not affect the original array.
let amazingHeroes = heroesMap.map( hero => "The amazing " + hero );
console.log(amazingHeroes);
console.log(heroesMap);

// creates new array as well
// everything that is true in the condition gets put in the new array
let scores = [75, 80, 65, 90, 85, 20, 60];
let cOrAbove = scores.filter( score => score >= 70 );
console.log(cOrAbove);


let expenses = [100, 50, 200, 150];

// returns a single value
// accumulator is the parameter that holds the returned compounding value
// the 0 is where it starts accumulating
// expense is the temp var that holds all the values of the array
let total = expenses.reduce((accumulator, expense) => accumulator + expense, 100);
console.log(total);


let numbers = [33, 3, 1, 6098354, 5, 2, 4, 42, 57, 5756];
let heroesSort = ['hulk', 'iron man', 'black widow'];

console.log(heroesSort.sort());

console.log(numbers.sort()); // this doesn't work ):


/* Compare Function
 Sorts the values according to the returned (negative, zero, positive) value.
 If the result is negative, a is sorted before b.
 If the result is positive, b is sorted before a.
 If the result is 0, no changes are done with the sort order of the two values.
*/
numbers.sort(
  function(a, b){
    return a - b;
  }
)

console.log(numbers);


// destructuring
let arr = ['hulk', 'iron man', 'black widow', "thor", "spiderman"];
let [hero1, hero2, hero3, hero4] = arr;
console.log(hero1);
console.log(hero2);
console.log(hero3);
console.log(hero4);


// spread operator
// spreads or unpacks values from an array
let originalHeroes = ['hulk', 'iron man', 'black widow'];
let spreadHeroes = [...originalHeroes, "thor", "black panther"];
let copyOfHeroes = [...originalHeroes]; // makes a copy of originalHeroes
console.log(spreadHeroes);
console.log(originalHeroes);
console.log(copyOfHeroes);


// rest parameter
// condenses multiple values into an array
function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3,4,5,98,9,12,355,677));