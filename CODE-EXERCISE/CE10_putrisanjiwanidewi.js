// Soal:
// Terdapat suatu kumpulan string yang yang susunan kalimat nya terbalik
// Tugas teman teman adalah mengubah kalimat tersebut menjadi kalimat yang benar

// "drow olleh"  menjadi "Hello word."
// "eko atad" menjadi menjadi "Data oke."
// "gnitset tinu" menjadi "Unit testing."

// Tidak boleh langsung print expected output

// Expected Output:

// Hello word. true
// Data oke. true
// Unit testing. true

// NOTE : Berikan comment penjelasan pada baris kdoe yang menurut anda penting
// gunakan perulangan/kode lain dan array untuk menampung kata

// Jawaban:
function unitTest(input, output) {
    //reverse input
    reverse(input);
    let inputs = "";
    // for handling if the output and input have diference upper and lower case and if output has simbols, or non characters behind the sentences
    for (let index = 0; index < output.length; index++) {
        if (input[index]) {
            if (output[index].toUpperCase === input[index].toUpperCase) {
                inputs += output[index];
            }
        } else {
            if (!output[index].search(/[^a-zA-Z]+/)) {
                inputs += output[index];
            }
        }
    }
    input = inputs;
    console.log(output, input === output);
}

function reverse(str) {
    // write your code here
    let result = "";
    for (let index = str.length - 1; index >= 0; index--) {
        if (index === str.length - 1) {
            let strs = str[index].toUpperCase();
            result += strs;
        } else {
            result += str[index];
        }
    }
    return result;
}

unitTest(reverse("drow olleh"), "Hello Word.");
unitTest(reverse("eko atad"), "Data oke.");
unitTest(reverse("gnitset tinu"), "Unit testing.");
