//belajar variable
// terdapat let dan const

//cara mendeklarasikan variable
let varible1 = "ini varible berisi";
let variable2; //ini variable tanpa isi jika di console berisi undifind
let variable3 = 1,
    variable4; //pendeklarasian multi variable

// variable var merupakan variable global dimana jika
// ada variable yang di assign dengan nama yang sama
// maka variable akan di replace

var nama = "anton";
var nilai = 56;
if (nilai > 34) {
    var nama = "dewi";
}

console.log(nama); //output dewi

//bagaimana let bekerja
let nama2 = "anton";
let nilai2 = 56;
if (nilai2 > 34) {
    let nama2 = "dewi"; // variable dewi tidak bisa diaksess di luar scope
}

console.log(nama2); //output tono

//const variable yang nilainya tidak bisa di ganti/ reassign

const name3 = "sanji";
// name3 ="dewi";//ini menyebabkan error karena const tidak bisa di assign ulang

//jika variable tidak diisi maka akan outputnya undifined
console.log("undifined variable");
let undifined1;

// tipe data
// primitif hanya dapat menyimpan satu nilai
let string = "ini string";
let number = 1; // ini number

// non-primitf itu dapat menyimpan lebih dari satu nilai
let array1 = ["1", "aa", { nama: "haaa", kelas: 1 }]; // typeof return object because array are objects in JS
const Object2 = {
    nama: "putri",
    kelas: "bisa masuk",
    fung: function (a, b) {
        // fungsi di dalam object
        console.log(a + b);
    },
};

//cara check tipe data
console.log(typeof array1);
console.log(array1.length);
console.log(Object2.length); //undifined because object dont have propertis length

//cara pemangilan data dalam object dan array
console.log(array1[2].kelas); // memanggil index ke 0
console.log(Object2.nama); // memanggil value dan key nama
Object2.fung(1, 2); // mengakses fungsi di dalam object

let siswa = {
    nama: "lili",
    kelas: "1A",
    nilai: 85,
    fung: function () {
        console.log(
            //dapat menggunakan kata kunci this
            `hallo nama saya ${this.nama}, 
            saya ada di kelas ${this.kelas} 
            saya dapat nilai ${this.nilai}`
        );
        // kata kunci this mengacu pada dirinya sendiri
    },
};
siswa.fung();

//operator aritmatika perperbandingan dan logika

// aritmatika
// +	(Penjumlahan)
// - 	(Pengurangan)
// * 	(Perkalian)
// / 	(Pembagian)
// % 	(Modulus, sisa hasil pembagian)

//operator perbandingan
// ==	(Sama dengan)
//- !=	(Tidak sama dengan)
// >	(Lebih besar dari)
// <	(Lebih kecil dari)
// >=	(Lebih besar dari atau sama dengan)
// <=	(Lebih kecil dari atau sama dengan)

//logika

// &&	(Logika AND, keduanya harus benar)
// ||	(Logika OR, salah satu harus benar)
//- !	(Logika NOT, membalik nilai kebenaran)

//increment decrement
//++
//--

let num = 1;
num += 5;
console.log("first");
console.log(num);
