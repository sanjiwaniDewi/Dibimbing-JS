/*
Buatlah fungsi untuk mencari pasangan terbesar (dua angka yang berhimpitan yang nilainya paling besar)

Contoh 1 :
input : 641573
output: 73

Contoh 2 :
input : 12783456
output: 83
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function pasanganTerbesar(number) {
    let newArr = number.toString().split("");
    let maxVal = 0;
    newArr.map((val1, index) =>
        parseInt(val1 + newArr[index + 1]) > maxVal
            ? (maxVal = parseInt(val1 + newArr[index + 1]))
            : ""
    );
    return maxVal;
}

console.log(pasanganTerbesar(641573));

// Expected Output: 93
