// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
function isAnagram(first, second) {
    // write your code here
    function format(word) {
        return word
            .toLowerCase()
            .split("")
            .sort()
            .filter((a) => a !== " ")
            .join("");
    }
    return format(first) === format(second) ? true : false;
}

// Output
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("The Eyes", "They See"));
console.log(isAnagram("sun", "moon"));
