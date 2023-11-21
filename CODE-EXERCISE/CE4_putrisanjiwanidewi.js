// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates(str) {
    //write your code here
    let result = [];
    for (let index = 0; index < str.length; index++) {
        let isDuplicate = false;
        if (!result[0]) {
            result.push(str[index]);
        } else {
            for (let i = 0; i < result.length; i++) {
                //check if it's duplicate
                if (str[index] === result[i]) {
                    isDuplicate = true;
                }
            }
            if (!isDuplicate) {
                result.push(str[index]);
            }
        }
    }
    return result;
}

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));
