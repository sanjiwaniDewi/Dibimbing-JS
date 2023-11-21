const recursive = (val, vals) => {
    if (val == vals) {
        return vals;
    } else {
        val++;
        return recursive(val, vals);
    }
};

const cariNilai = (val, vals) => {
    let result = recursive(val, vals);
    return result;
};
console.log(cariNilai(2, 5));
