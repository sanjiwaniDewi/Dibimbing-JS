// Code from Codewars.com

// Soal:
// anda diberikan array yang berisi string
// Anda harus mengurutkannya menurut abjad (case-sensitive, dan berdasarkan karakter ASCII values) dan kemudian mengembalikan nilai pertama.
// The returned value harus berbentuk string, dan terdapat "***" diantara setiap hurufnya.
// anda tidak diperkenankan untuk menghapus atau menambah elemen pada array.

// expected output dari soal adalah
// Test Pass: output is b***i***t***c***o***i***n as expected
// Test Pass: output is a***r***e as expected

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan sorting secara manual, gunakan split dan join

function testCase(i, o) {
    if (i === o) return `Test Pass: output is ${o} as expected`;
    return `Test Failed: ${i} not equall to ${o}`;
}

// Jawaban:

function sortStart(array) {
    // write code here
    let sortArr = array;

    for (let word of sortArr) {
        for (let j = 1; j < sortArr.length; j++) {
            for (let i = 0; i < sortArr[j].length; i++) {
                if (sortArr[j - 1][i] === undefined) {
                    break;
                }
                if (sortArr[j][i] === sortArr[j - 1][i]) {
                    continue;
                }

                if (
                    sortArr[j][i].toLowerCase() ===
                    sortArr[j - 1][i].toLowerCase()
                ) {
                    if (
                        sortArr[j - 1][i].charCodeAt() >
                        sortArr[j][i].charCodeAt()
                    ) {
                        [sortArr[j - 1], sortArr[j]] = [
                            sortArr[j],
                            sortArr[j - 1],
                        ];
                    }
                    break;
                }

                if (
                    sortArr[j][i].toLowerCase() !==
                    sortArr[j - 1][i].toLowerCase()
                ) {
                    if (
                        sortArr[j].toLowerCase() < sortArr[j - 1].toLowerCase()
                    ) {
                        [sortArr[j - 1], sortArr[j]] = [
                            sortArr[j],
                            sortArr[j - 1],
                        ];
                    }
                    break;
                }
            }
        }
    }

    return sortArr.shift().split("").join("***");
}

console.log(
    testCase(
        sortStart([
            "bitcoin",
            "take",
            "over",
            "the",
            "world",
            "maybe",
            "who",
            "knows",
            "perhaps",
        ]),
        "b***i***t***c***o***i***n"
    )
);
console.log(
    testCase(
        sortStart([
            "turns",
            "out",
            "random",
            "test",
            "cases",
            "are",
            "easier",
            "than",
            "writing",
            "out",
            "basic",
            "ones",
        ]),
        "a***r***e"
    )
);
