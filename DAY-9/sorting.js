//sorting menggunakan buble short

//mengurutkan berdasarkan karakterna
const num = [1, 2, 5, 4, 6, 9, 8, 3, 10]; // 10 akan di return setelah 1
const sw = num.sort();
console.log(sw);

// untuk menangani hai ltersebut di sorting ada fungsi nya
const ss = num.sort((a, b) => a - b); // kao negatif dituker kalo positip tetep
console.log(ss);

//sort sanhat baik berjalan pada string
//namum peru perlakuan kusus  seperti ss diatas jika ingin menghandle number
