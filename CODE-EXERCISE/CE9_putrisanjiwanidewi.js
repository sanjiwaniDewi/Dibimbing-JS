// Soal:
// Seorang frontend developer diminta untuk membuat fitur like posting pada suatu web artikel
// API untuk mendapatkan list likes dari suatu artikel mereturn data berbentuk array string.

// Contoh response:
// {
//     id:"HJKdsJbjbj124",
//     status:"200",
//     likes:["Jacob", "Alex"]
//     createAt: "Monday 27 Sept 2021"
// }

// Ada pun expected output secara data adalah
// []                                -->  menampilkan "no one like this"
// ["Peter"]                         -->  menampilkan  "Peter like this"
// ["Jacob", "Alex"]                 -->  menampilkan "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  menampilkan "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  menampilkan  "Alex, Jacob and 2 others like this"

// Buatlah function yang menghasilkan/mereturn output sesuai dengan expected output
// Tidak boleh langsung print expected output

// Expected Output :
// no one likes this
// Peter likes this
// Jacob and Alex like this
// Max, John and Mark like this
// Alex, Jacob and 2 others like this

// NOTE : berikan comment penjelasan pada baris kode yang menurut anda penting

// Jawaban:
function likes(names) {
    // write your code here
    let result = "";
    let like = "likes this";
    let people = "";
    if (names === undefined || !names?.length) {
        people = "no one";
    } else if (names?.length === 1) {
        people = names[0];
    } else if (names?.length === 2) {
        people = `${names[0]} and ${names[1]}`;
        like = "like this";
    } else if (names?.length === 3) {
        people = `${names[0]}, ${names[1]} and ${names[2]}`;
        like = "like this";
    } else if (names?.length > 3) {
        const [peopleOne, peopleTwo, ...others] = names;
        people = `${peopleOne}, ${peopleTwo} and ${others.length} others`;
        like = "like this";
    }

    result = `${people} ${like}`;

    return result;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
