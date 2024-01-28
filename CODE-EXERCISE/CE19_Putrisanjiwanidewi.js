// data
const data = [
    {
        name: "Joe",
        age: 23,
        job: "Artist",
        hoby: "Drawing",
    },
    {
        name: "Michael",
        age: 21,
        job: "Engineer",
        hoby: "Fishing",
    },
    {
        name: "Jenifer",
        age: 22,
        job: "Dentist",
        hoby: "Gardening",
    },
];
// Soal:
// Bentuklah objek dengan isi sebagai berikut dengan memanfaatkan function pada array (unshift, shift, push, pop, etc)
// {
//     header: ["number", "name", "age", "job", "hoby"],
//     data: data
// }

// expected output:

// [
//  { name: 'Joe', age: 23, job: 'Artist', hoby: 'Drawing' },
//  { name: 'Michael', age: 21, job: 'Engineer', hoby: 'Fishing' },
//  { name: 'Jenifer', age: 22, job: 'Dentist', hoby: 'Gardening' }
// ]

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban
// write your code here

//find uniqe keys of data

const table = {
    header: [
        "number",
        ...new Set( //return uniq keys of data
            data
                .map((a) => Object.keys(a))
                .join()
                .split(",")
        ),
    ],
    data: data,
};

console.log(table.data);
