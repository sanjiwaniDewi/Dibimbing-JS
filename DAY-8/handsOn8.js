// day 8
// buatlah sebuah function untuk menjumlahkan seluruh deret angka
//mencoba dengan class
class DeepSum {
    constructor(array) {
        this.array = array;
    }
    add() {
        if (this.array[0]) {
            let result = 0;
            for (let i = 0; i < this.array.length; i++) {
                for (const item of this.array[i]) {
                    result += parseInt(item);
                }
            }
            return result;
        } else {
            return this.array;
        }
    }
}

const deepSum = (arr) => {
    return new DeepSum(arr).add();
};

console.log(
    deepSum([
        [1, 4, 2, 5],
        [5, 7, 8, 9],
        [6, 4, 8, 1],
    ])
); // 60
console.log(
    deepSum([
        [40, 6, 11, 3],
        [7, 90, 13, 52],
        [90, 77, 78, 44],
    ])
); // 511
console.log(deepSum([])); // []

//dengan function
