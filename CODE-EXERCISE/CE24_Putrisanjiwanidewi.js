// soal
// buat segitiga siku-siku dari angka 1 ke n
// manfaatkan metode perulangan secara increment & rekursif
// gunakan fungsi cetak untuk menampilkan segitiga

// Input : 5
/* Expected output :
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
*/

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting

// jawaban
const generatePyramid = (n) => {
    // write your code here
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = 1; j <= n; j++) {
            if (j === i) {
                print += j;
                break;
            }
            print += `${j} `;
        }
        console.log(print);
    }
};

generatePyramid(5);
