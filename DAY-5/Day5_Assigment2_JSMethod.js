console.log(
    "1. Buatkan function konversiMenit untuk menyelesaikan tase case dibawah"
);
console.log("--------");

const konversiMenit = (menit) => {
    let sec = menit % 60;
    const minutes = Math.floor(menit / 60);
    //meambahkan 0 didepan
    sec = sec.toString().padStart(2, 0);
    return `${minutes}: ${sec}`;
};

// TEST CASES

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(12400)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log("--------");
console.log("2. Buatkan function hitungJumlahKata dari test case berikut");
console.log("--------");

const hitungJumlahKata = (text) => {
    let newText = text.split(" ");
    newText = newText.filter((params) => params.length !== 0);
    console.log(newText);
    return newText.length;
};

// TEST CASES

console.log(hitungJumlahKata(" I have a dream")); // 4
console.log(hitungJumlahKata("Never eat     shredded wheat or cake ")); // 6
console.log(hitungJumlahKata("A song to       sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

console.log("--------");
console.log(
    "3. Buatkan function pasanganTerbesar untuk menyelesaikan tase case dibawah"
);
console.log("--------");

const pasanganTerbesar = (numbers) => {
    let arr = numbers.toString().split("");
    arr = arr.map((x, index, arr) => parseInt(x + arr[index + 1]));
    return Math.max(...arr);
};
// TEST CASES

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(99856489)); // 85
console.log(pasanganTerbesar(79918293)); // 99

console.log("--------");
console.log(
    "4. Buatkan function targetTerdekat untuk menyelesaikan tase case dibawah"
);
console.log("--------");

//this function just can handle one point with multiple target
const targetTerdekat = (target) => {
    let targets = target.map((params, index) =>
        params !== " " && params !== "o" ? (params = index) : params
    );
    let IndexPoint = targets.indexOf("o");
    targets = targets.filter((x) => x !== " " && x !== "o");
    targets = targets.map((params) =>
        params > IndexPoint
            ? (params = params - IndexPoint)
            : (params = IndexPoint - params)
    );
    return Math.min(...targets);
};
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", "", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "x", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

console.log("--------");
console.log(
    "5. Buatkan function setRupiah untuk menyelesaikan tase case dibawah"
);
console.log("--------");

//without reverse string
const setRupiah = (money) => {
    return `Rp ${money.toLocaleString("id-ID")}`;
};

// TEST CASES
console.log(setRupiah(123453)); // Rp 12.345
console.log(setRupiah(100000)); // Rp. 100.000
console.log(setRupiah(1)); // Rp150
console.log(setRupiah(120500000)); // Rp 120.500.000
