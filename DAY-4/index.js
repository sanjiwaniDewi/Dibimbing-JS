let user = "";
let pass = "12apaa";

// cek pass dan user apakah ada?
// -- jika tidak terpenuhi "perikasa kembali user pass"
// cek length of pass lebih dari 5
// -- jika tidak terpenuhi "perikasa kembali pass"
// cek user adalah Roy Bayu
// jika terpenuhi "maaf anda tidak bisa login"

function isValid(user) {
    if (user !== null && user !== "") {
        return true;
    }
}
function validateUser(user, pass) {
    if (isValid(user) && isValid(pass)) {
        if (pass.length > 5) {
            if (user == "Roy Bayu") {
                return "anda berhasil login";
            } else {
                return "user invalid";
            }
        } else {
            return "periksa kembali pass";
        }
    } else {
        return "periksa kembali user and pass";
    }
}
console.log(validateUser(user, pass));

const triAngle = (any) => {
    for (let i = 0; i < 5; i++) {
        let bintang = "";
        for (let j = 0; j < i; j++) {
            bintang = bintang + any;
        }
        console.log(bintang);
    }
};
console.log(triAngle("*"));

const bandingkanAngka = (a, b) => {
    if (a > b) {
        return;
    } else if (a == b) {
        return -1;
    } else {
        return true;
    }
};

console.log(bandingkanAngka(5, 5));
