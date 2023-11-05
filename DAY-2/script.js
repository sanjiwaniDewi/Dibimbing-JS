console.log("halo aja");
const numbers = [1, 4, 3, 10, 100];
console.log(numbers.sort());

const findVowls = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            count++;
        } else if (text[i] == "i") {
            count++;
        } else if (text[i] == "u") {
            count++;
        } else if (text[i] == "e") {
            count++;
        } else if (text[i] == "o") {
            count++;
        }
    }
    return count;
};

console.log(findVowls("apa aja halow"));
