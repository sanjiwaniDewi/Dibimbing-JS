/* MajoritySweeper adalah function yang dibuat untuk mengeliminasi 
nilai array yang sering muncul (mayoritas) dari daftar nilai array */

// write code here
//for counting when have duplicate value
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
    console.log(mode);

    //remove mode
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
//nilai paling gede dari 1 yang di buang
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2])); // [ 1, 1,2,2]
