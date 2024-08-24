const marvel_heroes =  ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)  
// console.log(marvel_heroes[3][1]);

const all_heroes = marvel_heroes.concat(dc_heroes); // Concate alway returns a new array
// console.log(all_heroes);


// Spread two arrays
const all_new_heroes = [... marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);


// Flat -> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth(here depth is infinity)
const another_array = [1,2, 3,[4,5,6], 7, [5, 8,[4, 6]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array); // O/P -> [1,2,3,4,5,6,7,5,8,4,6]

console.log(Array.isArray("divmish"));
console.log(Array.from("divmish"));    // O/P -> ['d', 'i', 'v','m', 'i', 's','h']
console.log(Array.from({name:"divmish"}));    // O/P -> []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));





