function tukar_besar_kecil(text) {
    // lengkapi kode berikut
    let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (const Char of text) {
        let Case = "";
        for (const item of UpperCase) {
            if (Char == item) {
                Case = Char.toLowerCase();
                break;
            }
            Case = Char.toUpperCase();
        }
        result += Case;
    }
    return result;
}
function tukar_besar_kecil1(text) {
    // lengkapi kode berikut
    let result = "";
    for (const Char of text) {
        if (Char === Char.toUpperCase()) {
            result += Char.toLowerCase();
        } else {
            result += Char.toUpperCase();
        }
    }
    return result;
}

console.log(tukar_besar_kecil1("Hello World")); // "hELLO wORLD"
console.log(tukar_besar_kecil("I aM aLAY")); // "i Am Alay"
console.log(tukar_besar_kecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukar_besar_kecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukar_besar_kecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
