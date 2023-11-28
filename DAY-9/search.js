// search with index of

const fruits = ["aple", "grape", "peer", "banana"];

let search = "peer";
let index = fruits.indexOf(search); // meriturn index dari yang dicari
console.log(index);

// search with find
let find = "banana";
// ketika kondisinya terpenui langsung dikembalikan
let finds = fruits.find((item) => item == find);
console.log(finds);

const findIndex = fruits.findIndex((item) => item == find);
console.log(findIndex); // mengembalikan index dari banana

// includs
// mencari apakah ada target yang dicari
// return nya true or folse
const includ = fruits.includes("watermelon");
console.log(includ);

//filter
// mengembalikan array
const filter = fruits.filter((a) => a != "banana");
console.log(filter);

//reverse ngak bias untuk array

//
