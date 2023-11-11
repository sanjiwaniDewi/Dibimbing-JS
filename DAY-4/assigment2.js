console.log(
    "1. Buatkan function konversiMenit untuk menyelesaikan tase case dibawah"
);
console.log("--------");

const konversiMenit = (menit) => {
    //get minute
    let mins = menit / 60;
    mins = mins.toString();
    let index = 1;
    for (let i = 0; i < mins.length; i++) {
        if (mins[i] == ".") {
            index = i;
        }
    }
    let minute = "";
    for (let i = 0; i < index; i++) {
        minute = minute + mins[i];
    }

    //get seconds
    let sec = menit % 60;
    if (!sec.toString()[1]) {
        sec = "0" + sec.toString();
    }
    // const seconds = (sec) => {
    //     return sec.toString().padStart(2, "0"); //nga boleh
    // };

    return `${minute}:${sec}`;
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
    //handle space befor or after text
    const str = text.trim();

    let count = 1;
    for (let i = 0; i < str.length; i++) {
        //handle single or multiple space in the middle of text
        if (str[i] === " ") {
            if (str[i + 1] !== " ") {
                count++;
            } else {
                count;
            }
        }
    }
    //handle text without space
    if (count == 1) {
        //for empty string
        if (str.length == 0) {
            return 0;
        } else {
            //single sentence
            return 1;
        }
    } else {
        return count;
    }
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
    let bigCouple = 0;
    let nums = numbers.toString();
    for (let index = 0; index < nums.length; index++) {
        let value;
        if (index + 1 < nums.length) {
            value = parseInt(nums[index] + nums[index + 1]);
        }

        if (bigCouple < value) {
            bigCouple = value;
        }
    }
    return bigCouple;
};
// TEST CASES

console.log(pasanganTerbesar(641573)); // 73

console.log(pasanganTerbesar(12783456)); // 83

console.log(pasanganTerbesar(910233)); // 91

console.log(pasanganTerbesar(71856421)); // 85

console.log(pasanganTerbesar(79918293)); // 99

console.log("--------");
console.log(
    "4. Buatkan function targetTerdekat untuk menyelesaikan tase case dibawah"
);
console.log("--------");

const targetTerdekat = (target) => {
    let distance = [];
    let indexTarget = [];
    let indexPoint = 0;
    for (let index = 0; index < target.length; index++) {
        if (target[index] == "o") {
            indexPoint = index + 1;
        } else if (target[index] == "x") {
            indexTarget.push(index + 1);
        }
    }
    if (indexTarget.length !== 0) {
        for (let index = 0; index < indexTarget.length; index++) {
            let dis;
            if (indexTarget[index] > indexPoint) {
                dis = indexTarget[index] - indexPoint;
                distance.push(dis);
            } else {
                dis = indexPoint - indexTarget[index];
                distance.push(dis);
            }
        }
    } else {
        distance.push(0);
    }

    return Math.min(...distance);
};

// TEST CASES

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3

console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4

console.log(targetTerdekat(["x", "", " ", " ", "x", "x", "o", " "])); // 1

console.log(targetTerdekat([" ", " ", "o", " "])); // 0

console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

console.log("--------");
console.log(
    "5. Buatkan function setRupiah untuk menyelesaikan tase case dibawah"
);
console.log("--------");

const setRupiah = (money) => {
    let str = money.toString();
    let result = "";
    if (str.length % 3 == 0) {
        if (str.length == 3) {
            result = str;
        } else {
            for (let i = 0; i < str.length; i++) {
                if ((i + 1) % 3 == 0 && i !== str.length - 1) {
                    result = result + str[i] + ".";
                } else {
                    result = result + str[i];
                }
            }
        }
    } else {
        let sisa = str.length % 3;
        for (let i = 0; i < str.length; i++) {
            if (
                i + 1 == sisa ||
                ((i - (sisa - 1)) % 3 == 0 && i !== str.length - 1)
            ) {
                result = result + str[i] + ".";
            } else {
                result = result + str[i];
            }
        }
    }
    return `Rp ${result}`;
};

// TEST CASES
console.log(setRupiah(12345)); // Rp 12.345

console.log(setRupiah(100000)); // Rp. 100.000

console.log(setRupiah(150)); // Rp150

console.log(setRupiah(120500000)); // Rp 120.500.000

console.log(setRupiah(5478300)); // Rp 5.478.300
