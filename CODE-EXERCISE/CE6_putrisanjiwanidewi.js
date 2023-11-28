// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output :
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan perulangan dan pengkondisian

// Jawaban:
function manipulateString(str) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        //menampung hasil pengecekan apakah huruf uppercase
        let res = "";
        for (const letter of upperCase) {
            if (i !== 0 && str[i] === letter) {
                //penambahan spasi pada huruf uppercase yang bukan di awal kalimat
                res = " " + str[i];
                break;
            } else {
                res = str[i];
            }
        }
        result += res;
    }
    return result;
}

console.log(manipulateString("SelamatPagiDunia"));
console.log(manipulateString("AkuSukaJavascript"));
