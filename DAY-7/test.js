const hapusSimbol = (text) => {
    let huruf = "abcdefghijklmnopqrstuvwxyz";
    let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let newText = "";
    for (let index = 0; index < text.length; index++) {
        if (huruf.includes(text[index]) || angka.includes(text)) {
            newText = newText + text[index];
        }
    }

    return newText;
};
// console.log(hapusSimbol("a2%cd"));

const hapusSimbol2 = (text) => {
    let simbol = "%@";
    let i = 0;
    let newText = "";
    let index = NaN;
    while (i < text.length) {
        let j = 0; //koncinya ada di sini wkwkwkkwkwkw
        while (j < simbol.length) {
            if (simbol[j] !== text[i]) {
                index = index;
            } else {
                index = i;
            }
            j++;
            console.log("ini J " + j);
        }

        if (i != index) {
            newText += text[i];
        }

        console.log("ini i " + i);
        i++;
    }

    return newText;
};
console.log(hapusSimbol2("1as@"));
