// Soal: Hitunglah jumlah masing masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh:
// Dibimbing di| karakter  contoh  d:2, i: 4 dst.....
// Software  | karakter  contoh   s:1, e: 1 dst.....
// Frontend  | karakter  contoh  f:1, r: 1 dst.....

// Expected Output:
// { d: 2, i: 4, b: 2, m: 1, n: 1, g: 1, ' ': 1 }
// { s: 1, o: 1, f: 1, t: 1, w: 1, a: 1, r: 1, e: 1 }
// { f: 1, r: 1, o: 1, n: 2, t: 1, e: 1, d: 1 }

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:
// function charCount(word) {
//     // write your code here
//     let wordLowerCase = word.toLowerCase();
//     const result = {};
//     for (const char of wordLowerCase) {
//         result[char] ? result[char]++ : (result[char] = 1);
//     }
//     return result;
// }

function charCount(word) {
    // write your code here
    //list each same character
    let result = {};
    word.toLowerCase()
        .split("")
        .map((a) => (result[a] ? result[a]++ : (result[a] = 1)));
    return result;
}

console.log(charCount("Dibimbing di"));
console.log(charCount("Software"));
console.log(charCount("Frontend"));
