console.log("-------------");
console.log("1. mostFrequentLargestNumbers");
console.log("-------------");

// Anda diminta untuk membuat sebuah function untuk mencari nilai terbesar dan hitung berapa kali muncul dalam deret nilai:

//Write code here
const mostFrequentLargestNumbers = (arr) => {
    let count = {};
    let max = 0;
    if (arr[0]) {
        //count duplicates
        for (let i = 0; i < arr.length; i++) {
            count[arr[i]] ? count[arr[i]]++ : (count[arr[i]] = 1);
        }
        //searched maximum value
        for (const item of arr) {
            item > max ? (max = item) : max;
        }

        return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count[max]}`;
    } else {
        return ``;
    }
};

// TEST CASES
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(
    mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 100, 135, 150]) // perlu di perbaiki
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
console.log(mostFrequentLargestNumbers([]));
//''

console.log("-------------");
console.log("2. Password Generator");
console.log("-------------");
// [INSTRUCTIONS] Anda diminta untuk membuat sebuah function untuk mengenkripsi sebuah password dengan ketentuan sebagai berikut:
// - Mengubah huruf besar menjadi kecil dan sebaliknya
// - menghilangkan spasi dan menggantinya menjadi ‘&’
// - setiap bertemu huruf vocal harus diganti dengan huruf selanjutnya(+1) sesuai urutan alfabet
// - membalik urutan huruf
//Write code here
// generate alphabete
function genChar(charA, charZ) {
    let a = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

function convertCase(text) {
    let result = "";
    //generated alphabet array
    const upperCase = genChar("A", "Z");
    const lowerCase = genChar("a", "z");

    for (let index = text.length - 1; index >= 0; index--) {
        let changes = "";
        for (let j = 0; j < upperCase.length; j++) {
            if (text[index] == lowerCase[j] || text[index] == upperCase[j]) {
                if (
                    text[index] == "a" ||
                    text[index] == "i" ||
                    text[index] == "u" ||
                    text[index] == "e" ||
                    text[index] == "o"
                ) {
                    changes = upperCase[j + 1];
                } else if (
                    text[index] == "A" ||
                    text[index] == "I" ||
                    text[index] == "U" ||
                    text[index] == "E" ||
                    text[index] == "O"
                ) {
                    changes = lowerCase[j + 1];
                } else if (text[index] == upperCase[j]) {
                    changes = lowerCase[j];
                } else {
                    changes = upperCase[j];
                }
            }
            // if (text[index] == " ") {
            //     changes = "&";
            // }
        }
        result += changes;
    }
    return result;
}

const passwordGenerator = (text) => {
    let length = text.length;
    if (length >= 5) {
        return convertCase(text);
    } else {
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    }
};
// TEST CASES
console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

console.log("-------------");
console.log("3. naikAngkot");
console.log("-------------");

// Anda diminta untuk membuat sebuah function untuk mengubah data dan menghitung ongkos penumpang angkot, berkut ketentuannya:
//  - Rute angkot, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
//Write code here

function price(from, to) {
    let distFrom = 0;
    let distTo = 0;
    //reuseable function form case 2
    let alphabete = genChar("A", "Z");
    for (let index = 0; index < alphabete.length; index++) {
        if (alphabete[index] == from) {
            distFrom = index;
        } else if (alphabete[index] == to) {
            distTo = index;
        }
    }
    return (distTo - distFrom) * 2000;
}

const naikAngkot = (arr) => {
    let newArr = [];
    for (const passenger of arr) {
        let passengerObj = {};
        let [penumpang, naikDari, tujuan] = passenger;
        passengerObj.penumpang = penumpang;
        passengerObj.naikDari = naikDari;
        passengerObj.tujuan = tujuan;
        passengerObj.bayar = price(naikDari, tujuan);

        newArr.push(passengerObj);
    }

    return newArr;
};

// TEST CASES
console.log(
    naikAngkot([
        ["Melati", "B", "F"],
        ["Herman", "C", "D"],
    ])
);
// [ { penumpang: 'Melati', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// { penumpang: 'Herman', naikDari: 'C', tujuan: 'D', bayar: 2000 } ]
console.log(
    naikAngkot([
        ["Lala", "A", "D"],
        ["Andre", "A", "F"],
        ["Saeful", "B", "F"],
    ])
);
// [ { penumpang: 'Lala', naikDari: 'A', tujuan: 'D', bayar: 6000 },
// { penumpang: 'Andre', naikDari: 'A', tujuan: 'F', bayar: 10000 },
// { penumpang: 'Saeful', naikDari: 'B', tujuan: 'F', bayar: 8000 } ]
console.log(naikAngkot([])); //[]

console.log("-------------");
console.log("4. shoppingTime");
console.log("-------------");
// 4. shoppingTime[INSTRUCTIONS]Anda diminta untuk membuat sebuah function untuk menghitung berapa banyak yang bisa dibelanjakan dari saldo tersebutketentuan sebagai berikut:
// - Toko Makmur sedang melakukan SALE untuk beberapa barang, yaitu:
// Gula Pasir seharga 15000
// Beras seharga 12000
// Mie Instan seharga 2500
// Minyak Goreng seharga 18500
// Telor Ayam seharga 24600
// - output berupa object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.
// - Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// - Jika uang yang dimiliki kurang dari 2500 maka tampilkan "Mohon maaf, uang tidak cukup"
// - Member yang berbelanja di toko Makmur akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

//Write code here
function productCanBuy(balance, stock, product) {
    let basket = product;
    let total = balance;
    if (JSON.stringify(stock) === "{}" || total === 0) {
        basket.unshift(total);
        return basket;
    } else {
        let maxPrice = 0;
        let prod = "";
        for (const key in stock) {
            if (maxPrice < stock[key]) {
                maxPrice = stock[key];
                prod = key;
            }
        }
        if (total >= maxPrice) {
            basket.push(prod);
            total -= maxPrice;
        }
        //remove the product that has been added in basket
        const newStock = {};
        for (const key in stock) {
            if (key !== prod) {
                newStock[key] = stock[key];
            }
        }
        return productCanBuy(total, newStock, basket);
    }
}

const shoppingTime = (memberId, balance) => {
    const productStock = {
        "Gula Pasir": 15000,
        Beras: 12000,
        "Mie Instan": 2500,
        "Minyak Goreng": 18500,
        "Telor Ayam": 24600,
    };
    let transaction = {
        memberId,
    };
    //search minimum price
    let min = 0;
    for (const key in productStock) {
        if (min == 0 || min > productStock[key]) {
            min = productStock[key];
        }
    }

    if (memberId == "" || memberId === undefined) {
        return "mohon maaf toko X hanya berlaku untuk member saja";
    }
    if (balance < min || balance === undefined) {
        //member can't buy a product if they don't have enough balance to buy the cheapest products in stock
        return "mohon maaf, uang tidak cukup";
    } else {
        let money = balance;
        const produtsAndChangeMoney = productCanBuy(balance, productStock, []);
        //descructuring array
        const [changeMoney, ...listPurchased] = produtsAndChangeMoney;
        transaction = {
            ...transaction,
            money,
            listPurchased,
            changeMoney,
        };
        return transaction;
    }
};
// TEST CASES
console.log(shoppingTime("13KasdfG3D", 0)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime("12kTsasdAl", 75000));
//{ memberId: 12kTsasdAl,
// money: 75000,
// listPurchased:
//  [ 'Telor Ayam',
//    'Minyak Goreng',
//    'Gula Pasir',
//    'Beras',
//    'Mie Instan' ],
// changeMoney: 2400 }
console.log(shoppingTime("13KasdfG3D", 30000));
//{ memberId: '13KasdfG3D',
// money: 30000,
// listPurchased:
//  [ 'Telor Ayam', ‘Mie Ayam’ ],
// changeMoney: 2900 }
console.log(shoppingTime("", 1500)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdRxa53", 2500));
// {
//   memberId: '234JdRxa53',
//   money: 2500,
//   listPurchased: [ 'Mie Instan' ],
//   changeMoney: 0
// }
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdRxa53")); //Mohon maaf, uang tidak cukup

console.log("-------------");
console.log("5. graduates");
console.log("-------------");

// 5. graduates[INSTRUCTIONS]Anda diminta untuk membuat sebuah function untuk menentukan dan mengelompokan kelulusan, dengan ketentuan sebagai berikut
// - hasil output berupa array of object
// - dikempokan berdasarkan kelas
// - data yang ditampilkan yang memiliki nilai minimal 75
// - jika data tidak ada, maka return object kosong

//Write code here
const graduates = (arr) => {
    let sameClass = {};
    for (const student of arr) {
        if (student.score >= 75) {
            if (!sameClass[student.class]) {
                //descructuring object
                const { name, score } = student;
                sameClass[student.class] = [{ name, score }];
            } else {
                const { name, score } = student;
                sameClass[student.class].push({
                    name,
                    score,
                });
            }
        }
    }
    return sameClass;
};
// TEST CASES
console.log(
    graduates([
        { name: "Luffi", score: 90, class: "2A" },
        { name: "Sanji", score: 85, class: "2C" },
        { name: "Zoro", score: 74, class: "2A" },
        { name: "Usop", score: 78, class: "2C" },
    ])
);
//OUTPUT
// { 2A: [ { name: 'Luffi', score: 90 } ],
// 2C: [ { name: 'Sanji' , score: 85 }, { name: 'Usop', score: 78 } ] }
console.log(
    graduates([
        { name: "Naruto", score: 100, class: "ninja" },
        { name: "Sarada", score: 76, class: "olahraga" },
        { name: "Sasuke", score: 92, class: "ninja" },
        { name: "Lee", score: 71, class: "olahraga" },
        { name: "Shikamaru", score: 80, class: "catur" },
    ])
);
//OUTPUT
// { ninja: [ { name: 'Naruto', score: 100 }, { name: 'Sasuke', score: 92 }  ],
//   olahraga: [ { name: 'Sarada', score: 76 }, ],
//   catur: [ { name: 'Shikamaru', score: 80 } ]
// }
console.log(graduates([]));
//OUTPUT
//{}
