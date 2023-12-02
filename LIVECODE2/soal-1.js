/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

//menggunkan methode object
const checkAnagram = (kata1, kata2) => {
    // lengkapi code
    let result = true;
    if (kata1.length !== kata2.length) {
        return result;
    } else {
        const ObjA = {};
        const ObjB = {};

        for (const CharA of kata1) {
            if (ObjA[CharA]) {
                ObjA[CharA]++;
            } else {
                ObjA[CharA] = 1;
            }
        }
        for (const CharB of kata2) {
            if (ObjB[CharB]) {
                ObjB[CharB]++;
            } else {
                ObjB[CharB] = 1;
            }
        }

        for (const CharA of kata1) {
            if (!ObjB[CharA]) {
                result = false;
            } else {
                if (ObjA[CharA] !== ObjB[CharA]) {
                    result = false;
                }
            }
        }

        return result;
    }
};

//cara lebih simple untuk mengetahui anagram menggunakan sorting
const checkAnagram1 = (kata1, kata2) => {
    //very siple and acurate
    // let newKata1 = kata1.split("").sort().join();
    // let newKata2 = kata2.split("").sort().join();
    // console.log(newKata1, newKata2);
    return (
        kata1.toLowerCase().split("").sort().join() ===
        kata2.toLowerCase().split("").sort().join()
    );
};

let kata_1 = "kamU";
let kata_2 = "mUka";
let kata_3 = "maka";
let kata_4 = "kaum";

console.log(checkAnagram1(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram1(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram1(kata_2, kata_3)); // "muka" & "maka" => false
console.log(checkAnagram1(kata_1, kata_4)); // "kamu" & "kaum" => true
