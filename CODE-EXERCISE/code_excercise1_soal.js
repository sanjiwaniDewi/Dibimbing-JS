// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip"
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri
//
/* 
Expected Output:
1
2
Hip
4
Hura
Hip
7
8
Hip
Hura
11
Hip
13
14
Hip Hura
done
*/

// Tidak Boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// contoh 1 :
// hipHura(15)
// "Hip Hura"

// contoh 2 :
// hipHura(6)
// "Hip"

// contoh 3 :
// hipHura(25)
// "Hura"

// Buatlah logic dari statement diatas
// Tidak boleh langsung print expected output

// Jawaban:
function hipHura(bilangan) {
    // write your code here

    //defined output
    const mod3 = "Hip";
    const mod5 = "Hura";

    for (let index = 1; index <= bilangan; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log(`${mod3} ${mod5}`);
        } else if (index % 3 == 0) {
            console.log(mod3);
        } else if (index % 5 == 0) {
            console.log(mod5);
        } else {
            console.log(index);
        }
    }
    return "done";
}

console.log(hipHura(15));
