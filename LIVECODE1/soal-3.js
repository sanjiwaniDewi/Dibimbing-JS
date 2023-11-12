/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

const filterData = (arr, searchValue) => {
    // tulis code di sini
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == searchValue) {
            result.push(arr[index]);
        }
    }
    return result;
};

let data_array = [
    1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
console.log(filterData(data_array, 5)); // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)
