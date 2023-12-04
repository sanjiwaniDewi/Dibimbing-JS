// Soal:
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan

/*
Expected Output
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/

// Tidak boleh langsung print expected output
// berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:

function fibonacci(n) {
    // write your code here
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            result.push(i);
            console.log(i);
        } else {
            let count = result[i - 2] + result[i - 1];
            result.push(count);
            console.log(result[i]);
        }
    }
}

fibonacci(20);
