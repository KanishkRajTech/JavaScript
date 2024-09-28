const marvel_heros = ["thor", "Ironman", "Spiderman" ]
const dc_heros =[ "Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'Batman' ] ]


// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros); // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'Batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'Batman' ]


// flat
const another_array =  [1, 2, 3, [ 4, 5, 6],7,[6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("kanishk")); // false
console.log(Array.from("kanishk")); // ['k', 'a', 'n', 'i', 's', 'h', 'k']

