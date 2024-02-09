// Soal:
// buatlah fungsi sorting manual bisa menggunakan QuickSort, MergeSort dll
// direkomendasikan menggunakan QuickSort karena sering digunakan drpd metode sorting lainnya
// lalu urutkan array berikut [1, 3, 340, 54, 12, 35]
// ['cat', 'dog', 'elephant', 'bee', 'ant']

// expected output
// [ 1, 3, 12, 35, 54, 340 ]
// [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment pada baris kode yang dianggap penting

// Jawaban:

function moveItem(arr, first, last) {
    let check = arr[last];
    let i = first - 1;

    for (let j = first; j <= last; j++) {
        if (arr[j] < check) {
            i++;

            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    [arr[i + 1], arr[last]] = [arr[last], arr[i + 1]];

    return i + 1;
}

function quickSort(arr, first, last) {
    if (first < last) {
        let x = moveItem(arr, first, last);
        quickSort(arr, first, x - 1);
        quickSort(arr, x + 1, last);
    }
}
const ManualSort = (arr) => {
    let N = arr.length;
    quickSort(arr, 0, N - 1);
    return arr;
};

console.log(ManualSort([1, 3, 340, 54, 12, 35]));
console.log(ManualSort(["cat", "dog", "elephant", "bee", "ant"]));
