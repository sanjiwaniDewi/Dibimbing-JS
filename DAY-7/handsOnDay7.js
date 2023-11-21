// Membuat function membagi kalimat sesuai dengan parameter kedua dan ditambahkan tanda '-'

const dashWord = (text, val) => {
    let newText = "";
    for (let index = 0; index < text.length; index++) {
        if ((index + 1) % val == 0 && index + 1 < text.length) {
            newText = newText + text[index] + "-";
        } else {
            newText = newText + text[index];
        }
    }
    return newText;
};

// TEST CASES
console.log(dashWord("Semangat!", 3)); // Sem-ang-at!
console.log(dashWord("Uzumaki Naruto", 2)); // Uz-um-ak-i -Na-ru-to
console.log(dashWord("081234567890", 4)); // 0812-3456-7890
console.log(dashWord("Indonesia Hebat", 10)); // Indonesia -Hebat
console.log(dashWord("Love Coding", 1)); // L-o-v-e- -C-o-d-i-n-g
