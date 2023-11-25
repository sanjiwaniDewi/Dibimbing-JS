const subStrac = (a, b) => {
    return a - b;
};

console.log(subStrac("F" - "C"));

let i = "a".charCodeAt(0);

//fungsi yang digunakan untuk print alfabet berdasarkan code uniknnya
function genCharArray(charA, charZ) {
    let a = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

console.log(String.fromCharCode(i + 2));
console.log(genCharArray("a", "z"));
