console.log("1. MajoritySweeper");
console.log("-------------");

/* MajoritySweeper adalah function yang dibuat untuk mengeliminasi 
nilai array yang sering muncul (mayoritas) dari daftar nilai array */

// write code here
//count duplicate values
const countMode = (arr) => {
    let mode = {};
    for (let i = 0; i < arr.length; i++) {
        mode[arr[i]] ? mode[arr[i]]++ : (mode[arr[i]] = 1);
    }
    return mode;
};

//search mode
const findMode = (arr) => {
    let count = 0;
    let mode = 0;
    for (const key in arr) {
        if (arr[key] > count) {
            count = arr[key];
            mode = key;
        } else if (arr[key] === count) {
            key > mode ? (mode = key) : mode;
        }
    }
    return mode;
};

const MajoritySweeper = (arr) => {
    const countData = countMode(arr);
    let mode = findMode(countData);
    let newArr = [];

    //exclude mode
    for (let i = 0; i < arr.length; i++) {
        arr[i] != mode ? newArr.push(arr[i]) : newArr;
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
const perkalianUnik = (arr) => {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        let hasil = 1;
        for (let x = 0; x < arr.length; x++) {
            //multiply other values except value at index x;
            x !== index ? (hasil = hasil * arr[x]) : hasil;
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
//reverse value
function revVals(value) {
    let newValue = value.toString();
    let reverse = "";
    for (let index = newValue.length - 1; index >= 0; index--) {
        reverse += newValue[index];
    }
    return reverse;
}
//increment value to become a palindrome
function createPaindrome(value, reverse) {
    let newValue = 0;
    let newRev = "";
    if (value == reverse) {
        return value;
    } else {
        newValue = value + 1;
        newRev = revVals(newValue);
        //recursive function
        return createPaindrome(newValue, newRev);
    }
}

const angkaPalindrome = (value) => {
    let reverse = revVals(value);
    return createPaindrome(value, reverse);
};
// TEST CASES
console.log(angkaPalindrome(8)); // 9 //update yang <10 return dirinya sendiri
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
//check is value a prime number?
function isPrime(value) {
    let prime = true;
    for (let i = 2; i < value; i++) {
        value % i === 0 ? (prime = false) : (prime = prime);
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
        if (array[index] % 2 === 0 && array[index] % 3 !== 0) {
            //all values which mod 2 = 0
            mod2.push(array[index]);
        } else if (array[index] % 3 === 0) {
            //all values which mod 3 = 0
            mod3.push(array[index]);
        }
        //condition for handle prime numbers 2 and 3 which included in mod 2 or mod 3
        if (array[index] >= 1 && array[index] !== 2 && array[index] !== 3) {
            valPrime = isPrime(array[index]);
            valPrime ? prime.push(array[index]) : prime;
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
//create new data structure
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
            monthName = "Maret";
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
        } else if (i === 2) {
            newDateFormat += ` ${monthName} `;
        }
        i++;
    }

    return newDateFormat;
};

// reformat student hobies
const handleHobies = (hobies) => {
    let list = "";
    if (typeof hobies === "object") {
        for (let index = 0; index < hobies.length; index++) {
            index < hobies.length - 1
                ? (list += hobies[index] + ", ")
                : (list += hobies[index]);
        }
    } else {
        list = hobies;
    }

    return list;
};

const PrintDataSiswa = (datas) => {
    // new structure data
    let newData = dataSiswaStructure(datas);
    let print = "";
    for (let index = 0; index < newData.length; index++) {
        let brithDate = monthConversion(newData[index].tanggalLahir);
        let hobies = handleHobies(newData[index].hobi);
        print += `\n# Siswa ${index + 1}`;
        print += `\n- no : ${newData[index].no}`;
        print += `\n- nama : ${newData[index].nama}`;
        print += `\n- tempat, tanggal lahir : ${newData[index].tempat}, ${brithDate}\n`;
        print += `- hobi : ${hobies}`;
    }
    return print;
};

console.log(PrintDataSiswa(data));

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
