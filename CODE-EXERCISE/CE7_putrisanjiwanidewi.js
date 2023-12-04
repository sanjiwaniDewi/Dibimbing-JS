// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
/* 
Expected Output:
Selamat Pagi Semua Haloo
Hari Ini Adalah Hari Libur
*/
// berikan comment penjelasan pada baris kode yang dianggap penting
// Tidak boleh langsung print expected output

// Jawaban:

function wordFormatter(word) {
    // write your code here
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            result += word[i].toUpperCase();
        } else if (word[i - 1] == " ") {
            result += word[i].toUpperCase();
        } else {
            result += word[i].toLowerCase();
        }
    }
    return result;
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));
