console.log("1. MajoritySweeper");
console.log("-------------");

/* MajoritySweeper adalah function yang dibuat untuk mengeliminasi 
nilai array yang sering muncul (mayoritas) dari daftar nilai array */

// write code here
//count same same value
const countMode = (arr) => {
    let mode = {};
    for (let i = 0; i < arr.length; i++) {
        if (mode[arr[i]]) {
            mode[arr[i]]++;
        } else {
            mode[arr[i]] = 1;
        }
    }
    return mode;
};

//for search mode
const findMode = (arr) => {
    let count = 0;
    let mode = 0;
    for (const key in arr) {
        if (arr[key] > count) {
            count = arr[key];
            mode = key;
        } else if (arr[key] == count) {
            if (key > mode) {
                mode = key;
            }
        }
    }
    return mode;
};

const MajoritySweeper = (arr) => {
    const countData = countMode(arr);
    let mode = findMode(countData);
    let newArr = [];

    //remove mode from new array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != mode) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

//TEST CASES
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2])); // [ 1, 1,2,2] //nilai tebesar dari 1 yang menjadi modus

console.log("-------------");
console.log("2. PerkalianUnik");
console.log("-------------");

/* PerkalianUnik adalah function yang dibuat untuk mengkalikan semua 
nilai array kecuali dirinya sendiri */

// write code here
//berdasarkan index
const perkalianUnik = (arr) => {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        let hasil = 1;
        for (let x = 0; x < arr.length; x++) {
            if (x != index) {
                hasil = hasil * arr[x];
            }
        }
        result.push(hasil);
    }
    return result;
};

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

console.log("-------------");
console.log("3. AngkaPalindrome");
console.log("-------------");

/* AngkaPalindrome adalah function yang dibuat 
untuk mencetak angka yang memenuhi kriteria palindrome. 
Jika nilai yang diinputkan bukan palindrome maka akan mencetak angka 
baru yang sesuai dengan cara ditambahkan satu per satu */

// write code here
function revVals(val) {
    let vals = val.toString();
    let rev = "";
    for (let index = vals.length - 1; index >= 0; index--) {
        rev += vals[index];
    }
    return rev;
}
function makePaindrome(val, reverse) {
    let vals = 0;
    let newRev = "";
    if (val == reverse) {
        return val;
    } else {
        vals = val + 1;
        newRev = revVals(vals);
        //recursive function
        return makePaindrome(vals, newRev);
    }
}

const angkaPalindrome = (val) => {
    let reverse = revVals(val);
    let result = makePaindrome(val, reverse);
    return result;
};
// TEST CASES
console.log(angkaPalindrome(8)); // 9 //karena 8 palindrome maka boleh pakai
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log("-------------");
console.log("4. MengelompokkanAngka");
console.log("-------------");

/* MengelompokkanAngka adalah function yang dibuat untuk mengelompokan angka 
menjadi 3 kelompok. kelompok-1 adalah angka yang bisa dibagi 2, kelompok 
ke-2 adalah bilangan prima dan kelompok ke-3 adalah bilangan yang bisa 
dibagi 3 */

// write code here

function isPrime(value) {
    let prime = true;
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            return (prime = false);
        }
    }

    return prime;
}

const mengelompokkanAngka = (array) => {
    let mod2 = [];
    let prime = [];
    let mod3 = [];
    let valPrime = false;
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0 && array[index] % 3 != 0) {
            mod2.push(array[index]);
        } else if (array[index] % 3 == 0) {
            mod3.push(array[index]);
        }
        if (array[index] >= 1 && array[index] !== 2 && array[index] !== 3) {
            valPrime = isPrime(array[index]);
            if (valPrime) {
                prime.push(array[index]);
            }
        }
    }
    result = [mod2, prime, mod3];

    return result;
};

// TEST CASES
console.log(mengelompokkanAngka([2, 6, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log("-------------");
console.log("5. PrintDataSiswa");
console.log("-------------");

/* PrintDataSiswa adalah function yang dibuat untuk menampilkan data siswa 
sesuai dengan output yang ditentukan
 */

const data = {
    students: [
        [
            "0001",
            "Ade Alamsyah ",
            "Jakarta",
            "21/05/2000",
            ["Membaca", "melukis", "menari"],
        ],

        ["0002", "Roman Alamsyah ", "Bandung", "15/01/1996", "Sepak bola"],

        [
            "0003",
            "Ira Alamsyah ",
            "Bandar Lampung",
            "01/08/1999",
            ["Memasak", "berkebun"],
        ],
    ],

    total: 3,
};

// write code here

class StructureData {
    constructor(nomor, nama, tempat, tanggal, hobi) {
        this.no = nomor;
        this.nama = nama;
        this.tempat = tempat;
        this.tanggalLahir = tanggal;
        this.hobi = hobi;
    }
}

const dataSiswaStructure = (datas) => {
    const datass = [];
    for (let i = 0; i < datas.students.length; i++) {
        const siswa = new StructureData(...datas.students[i]);
        datass.push(siswa);
    }
    return datass;
};
//only handle dateformat = DD/MM/YYYY
const monthConversion = (date) => {
    let monthName = "";
    let newDateFormat = " ";
    let i = 0;
    switch (date[3] + date[4]) {
        case "01":
            monthName = "Januari";
            break;
        case "02":
            monthName = "Februari";
            break;
        case "03":
            monthName = "Mater";
            break;
        case "04":
            monthName = "April";
            break;
        case "05":
            monthName = "Mei";
            break;
        case "06":
            monthName = "Juni";
            break;
        case "07":
            monthName = "Juli";
            break;
        case "08":
            monthName = "Agustus";
            break;
        case "09":
            monthName = "September";
            break;
        case "10":
            monthName = "Oktober";
            break;
        case "11":
            monthName = "November";
            break;
        case "12":
            monthName = "Desember";
            break;
        default:
            break;
    }

    while (i < date.length) {
        if (i < 2 || i > 5) {
            newDateFormat += date[i];
        } else if (i == 2) {
            newDateFormat += ` ${monthName} `;
        }
        i++;
    }

    return newDateFormat;
};

const handleHobies = (hobies) => {
    let list = "";
    if (typeof hobies === "object") {
        for (let index = 0; index < hobies.length; index++) {
            if (index < hobies.length - 1) {
                list += hobies[index] + ", ";
            } else {
                list += hobies[index];
            }
        }
    } else {
        list = hobies;
    }

    return list;
};

const PrintDataSiswa = (datas) => {
    let print = "";
    for (let index = 0; index < datas.length; index++) {
        let brithDate = monthConversion(datas[index].tanggalLahir);
        let hobies = handleHobies(datas[index].hobi);
        print += `\n# Siswa ${index + 1}`;
        print += `\n- no : ${datas[index].no}`;
        print += `\n- nama : ${datas[index].nama}`;
        print += `\n- tempat, tanggal lahir : ${datas[index].tempat}, ${brithDate}\n`;
        print += `- hobi : ${hobies}`;
    }
    return print;
};

let newStructureData = dataSiswaStructure(data);

console.log(PrintDataSiswa(newStructureData));

// OUTPUT
/* # Siswa 1
 - no: 0001
 - nama: Ade Alamsyah
 - tempat, tanggal lahir: Jakarta, 21 Mei 2000"
 - hobi: membaca, melukis, menari

 # Siswa 2

 - no: 0001
 - nama: Roman Alamsyah
 - tempat, tanggal lahir: Bandung, 15 Januari 2000"
 - hobi: Sepak bola

# Siswa 3

 - no: 0001
 - nama: Ira Alamsyah
 - tempat, tanggal lahir: Bandar Lampung, 21 Agustus 2000"
 - hobi: Memasak, berkebun */
