// soal:
// Tidak boleh langsung print expected output
// carilah string paling panjang dari array berikut

const arr = [
    "this random text.",
    "He drank life before spitting it out.",
    "There's a reason that roses have thorns.",
    "He waited for the stop sign to turn to a go sign.",
    "Karen believed all.",
];
// expected output berupa string :
// He waited for the stop sign to turn to a go sign

// NOTE : Berikan comment penjelasan fungsi kode pada baris kode yang dirasa penting

// jawaban
const longestString = (arr) => {
    // write your code here
    //find longest length of the word
    let index = Math.max(...arr.map((a) => (a = a.split(" ").length)));

    // filter word which have longest length
    return arr
        .filter((a) => a.split(" ").length === index)
        .join("")
        .replace(".", "");
};

console.log(longestString(arr));
