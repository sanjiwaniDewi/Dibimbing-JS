// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output :
// 9
// 6

let vowels = ["a", "i", "u", "e", "o"]; // vokal

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : Gunakan perulangan dan pengkondisian

// Jawaban:
function countVowels(str, vowels) {
    // write your code here
    let count = 0;
    for (const letter of str) {
        for (const vowel of vowels) {
            //untuk menghitung jumlah huruf fokal
            //dan jika terdapat hurup besar vokal
            if (letter === vowel || letter === vowel.toUpperCase()) {
                count++;
            }
        }
    }
    return count;
}

console.log(countVowels("Selamat Pagi Duniaa!!", vowels));
console.log(countVowels("aku suka ngoding", vowels));
console.log(countVowels("Aku suka Baca BukU", vowels));
