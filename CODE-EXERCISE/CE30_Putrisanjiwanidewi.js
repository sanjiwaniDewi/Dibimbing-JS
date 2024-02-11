// Soal:
// Buatlah fungsi bernama addMatrices yang menerima dua parameter berupa
// matriks dua dimensi. Fungsi ini harus mengembalikan hasil penjumlahan
// kedua matriks tersebut. Pastikan untuk memeriksa apakah kedua matriks
// memiliki ukuran yang sama sebelum dilakukan penjumlahan.

/*
Expected Output:
[
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]
*/

// Jawaban:
function addMatrices(matrix1, matrix2) {
    //write your code here
    if (
        matrix1.length !== matrix2.length ||
        matrix1.map((a) => a.length).reduce((acc, a) => acc + a) !==
            matrix2.map((a) => a.length).reduce((acc, a) => acc + a)
    ) {
        return `cannot enumerate the matrices: matrices size is not same`;
    }
    const addMarix = [];
    for (let i = 0; i < matrix1.length; i++) {
        const newArr = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            newArr.push(matrix1[i][j] + matrix2[i][j]);
        }
        addMarix.push(newArr);
    }

    return addMarix;
}

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
];

console.log(addMatrices(matrix1, matrix2));
