// Soal:
// terdapat list array sebagai berikut [2,7,11,15]
// dari list tersebut cari 2 buah bilangan yang apabila dijumlah mengahasilkan nilai 9
// berikan juga kondisi jika nilai 9 tidak ditemukan dalam array
// contoh [2,7] dan [7,2] akan menghasilkan 9

// expected output:
// [ [ 2, 7 ], [ 7, 2 ], [ 4, 5 ], [ 5, 4 ] ]
// [ [ 2, 5 ], [ 5, 2 ], [ 4, 3 ], [ 3, 4 ], [ 7, 0 ], [ 0, 7 ] ]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban
const pairsOfSum = (arr, expectedOutput) => {
    // write your code here
    const newArr = [];
    for (const value of arr) {
        for (let index = 0; index < arr.length; index++) {
            newArr.push([value, arr[index]]);
        }
    }

    // expectation jika tidak ditemukan apa?
    const result = newArr.filter(
        (a) => a.reduce((acc, a) => acc + a) === expectedOutput
    );
    return result.length === 0
        ? `pairs of sum ${expectedOutput} not found`
        : result;
};

console.log(pairsOfSum([2, 7, 11, 15, 4, 5], 9));
console.log(pairsOfSum([2, 5, 4, 3, 7, 0], 7));
console.log(pairsOfSum([2, 5, 4, 3, 7, 0], 100));

// hint: loop di dalam loop
