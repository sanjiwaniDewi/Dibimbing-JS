/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
      - jika sama, count++
*/

const countData = (arr, searchValue) => {
    // tulis code di sini
    // for (let i = 0; i < searchValue.length; i++) {
    //     let count = 0;
    //     for (let index = 0; index < arr.length; index++) {
    //         if (arr[index] == searchValue[i]) {
    //             count++;
    //         }
    //     }
    //     console.log(`JUMLAH DATA ${searchValue[i]} = ${count}`);
    // }

    //cara lebih better
    let lengthData = {};
    // fill length data
    searchValue.forEach((element) => {
        lengthData[element] = 0;
    });

    for (let index = 0; index < arr.length; index++) {
        //mencari apakah data di array terkandung pada data yang di cari
        if (searchValue.includes(arr[index])) {
            if (lengthData[arr[index]]) {
                //menambahkan data pada key yang sudah ada
                lengthData[arr[index]]++;
            } else {
                // karean sudah di definisikan berdasarka searce value jadi harusnya ngak ngaruh
                //membuat data/key baru dalam object
                lengthData[arr[index]] = 1;
            }
        }
    }
    return lengthData;
};

let data_array = [
    1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
console.log(countData(data_array, [5, 3, 1000]));
