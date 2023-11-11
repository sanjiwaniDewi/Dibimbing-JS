//object dan array

// add value to array
//method push and unshift
const fruits = ["banana", "manggo"];
//menambah pada index paling belahang
fruits.push("peer");
// menambah pada index paling depan
fruits.unshift("apple");
//menambah di tengah tengah
fruits.splice(1, 0, "avocado");
// menambah pada index ke 1 dengan delete counting 0 (ngak ada di delete)

// delete value to array
fruits.shift(); // menghapus index paling depan
fruits.pop(); //menghapus index paling belakang

console.log(fruits);

//array multidimensi
const matrix = [
    [1, 10, 4],
    [2, 3, 7],
    [4, 5, 6],
];
//mengakses array multidimensi
console.log(matrix[1][2]);

//mencari nilai max pada array multidimensi

const max = (any) => {
    let maximum = 0;
    for (let i = 0; i < any.length; i++) {
        for (let j = 0; j < any[i].length; j++) {
            if (any[i][j] > maximum) {
                maximum = any[i][j];
            }
        }
    }
    return maximum;
};
console.log(max(matrix));

//Object

const person = {
    //properti
    name: "jhon",
    age: 24,
    city: "surabaya",

    //method
    //ngak bisa pake arrow function
    fuc: function () {
        return this.name;
    },
};
//untuk mengakses value
console.log(person.name);

person.age = 34; //mengganti value dari age
person.job = "IT"; // menambahkan key/properti job

console.log(person.fuc());

//object class
function Siswa(a, b, c) {
    this.name = a;
    this.class = b;
    this.nilai = c;
}
let siswa1 = new Siswa("budi", "1A", 34);
let siswa2 = new Siswa("Andi", "1B", 89);

console.log(siswa1);
console.log(siswa2);

// getter dan setter pada object

const myObj = {
    name: "busi",
    nilai: 75,

    get getName() {
        return this.name;
    },
    set setNilai(value) {
        return (this.nilai = value);
    },
};
//cara aksess setter
myObj.setNilai = 2;
console.log(myObj.getName);

const xo = (any) => {
    let x = 0;
    let o = 0;
    for (let index = 0; index < any.length; index++) {
        if (any[index] == "x") {
            x++;
        } else if (any[index] == "o") {
            o++;
        }
    }
    if (x == o) {
        return true;
    } else {
        return false;
    }
};
//TEST CASE
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
