// Soal:
// Pada suatu toko terdapat beberapa kaos kaki
// warna biru dinyatakan dengan 1
// warna hijau dinyatakan dengan 3
// warna hitam dinyatakan dengan 5
// warna merah dinyatakan denga 8
// koleksi kaos kaki pada toko dinyatakan dengan array [1, 1, 3, 3, 5, 5, 5, 5]
// disebut sebagai sepasang kaos kaki apabila kaos kaki tersebut memiliki pasangan
// contoh :
// [1,3,3,3] => pada array ini, ada 1 kaos kaki biru, dan 3 kaos kaki hijau. Maka hasilnya ada sepasang(2) kaos kaki hijau dan masing2 1 kaos kaki biru dan 1 kaos kaki hijau lainnya yang tidak memiliki pasangan

// Expected Output :
// 4
// 2

// Berapa pasang kaos kaki kah yang tersedia?
// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pad baris kode yang dirasa penting
// Clue : Gunakan array, perulangan dan pengkondisian

// Jawaban:
// function sockMerchant(word) {
//     // write your code here
//     let count = 0;
//     const newArr = {};
//     //for list total stock each items
//     for (const char of word) {
//         newArr[char] ? newArr[char]++ : (newArr[char] = 1);
//     }
//     for (const key in newArr) {
//         //if have pairs
//         if (newArr[key] === 2) {
//             count++;
//         } else if (newArr[key] > 2 && newArr[key] % 2 === 0) {
//             //if total stock more then one pairs socks
//             count += Math.sqrt(newArr[key]);
//         } else if (newArr[key] > 2 && newArr[key] % 2 !== 0) {
//             //if have socks without pairs
//             let sisa = newArr[key] % 2;
//             let newStock = newArr[key] - sisa;
//             if (newStock === 2) {
//                 count++;
//             } else {
//                 count += Math.sqrt(newStock);
//             }
//         }
//     }
//     return count;
// }

function sockMerchant(word) {
    // list total stock each item
    let listStock = {};
    word.map((a) => (listStock[a] ? listStock[a]++ : (listStock[a] = 1)));

    //list a pairs items
    let onePairs = Object.values(listStock)
        .map((a) => (a === 2 ? 1 : 0))
        .reduce((add, a) => add + a);

    //items have more than one pairs
    let stock = Object.values(listStock)
        .map((a) =>
            a > 2 ? (a - (a % 2) !== 2 ? Math.sqrt(a - (a % 2)) : 1) : 0
        )
        .reduce((add, a) => add + a);
    return onePairs + stock;
}

console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]));
console.log(sockMerchant([1, 8, 3, 3, 3, 5, 5, 5]));
