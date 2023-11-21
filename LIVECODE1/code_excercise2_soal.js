// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67];

function maxMin(array) {
    // write your code here
    let result = {};
    //initial key and value
    result.max = array[0];
    result.min = array[0];
    //looping for find max and min value
    for (let index = 0; index < array.length; index++) {
        if (array[index] < result.min) {
            //find minimum value
            result.min = array[index];
        } else if (array[index] > result.max) {
            //find maximum value
            result.max = array[index];
        }
    }

    return result;
}

console.log(maxMin(array));
