// Soal:
// sebuah bus mengelilingi kota
// rute bus dinyatakan dalam bentuk array yang memliki integer pasangan
// jumlah keluar masuknya penumpang dinyatakan dengan array integer
// contoh [4, 3] => 4 orang masuk & 3 keluar
// hitunglah jumlah akhir penumpang pada saat sampai di terminal akhir

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting

// Expected Output :
// 5
// 17
// 21

// Jawaban:
const number = (busStops) => {
    // write your code here
    let newArr = busStops
        .map((a) =>
            a.reduce((accumulator, value) =>
                accumulator === 0 ? (accumulator = value) : accumulator - value
            )
        )
        .reduce((accumulator, value) => accumulator + value);

    return newArr;
};

console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8],
    ])
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
    ])
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
    ])
);
