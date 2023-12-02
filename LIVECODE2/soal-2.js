/*
  Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/

const customSlice = (arr, start, end) => {
    // tulis code di sini
    let newArr = [];
    //cara lebih elegan hahaha
    start = start < 0 ? 0 : start;
    end = end > arr.length - 1 ? arr.length - 1 : end;
    for (let index = start; index <= end; index++) {
        // if (index < arr.length) {
        newArr.push(arr[index]);
        // }
    }
    return newArr;
};

let data = [
    "nol",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
];

console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
