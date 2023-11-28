// day 9
// buatlah function untuk mencari nilai terbesar dari sebuah array of object
const findBigValue = (arr) => {
    let nilai = 1;
    let name = "";
    if (arr[0]) {
        for (const item of arr) {
            if (nilai > item.nilai) {
                continue;
            }
            nilai = item.nilai;
            name = item.name;
        }
        return `nilai terbesar adalah ${name} dengan nilai ${nilai}`;
    } else {
        return arr;
    }
};

console.log(
    findBigValue([
        { name: "susi", nilai: 90 },
        { name: "ahmad", nilai: 88 },
        { name: "Lala", nilai: 91 },
    ])
);
// output
// nilai terbesar adalah lala dengan nilai 91
console.log(findBigValue([])); // data kosong
