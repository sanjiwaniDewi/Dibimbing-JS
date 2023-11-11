//bandingkan angka
const bandingkanAngka = (a, b) => {
    if (a > b) {
        return false;
    } else if (a == b) {
        return -1;
    } else {
        return true;
    }
};

//TEST CASE
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//flip triangle
for (let i = 0; i <= 5; i++) {
    let star = "";
    for (let j = 0; j < 5; j++) {
        if (j + i >= 5) {
            star = star + "*";
        } else {
            star = star + " ";
        }
    }
    console.log(star);
}
