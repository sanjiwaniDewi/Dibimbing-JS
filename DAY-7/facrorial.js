function factorial(value) {
    if (value == 0) {
        return 1;
    } else {
        let result = value * factorial(value - 1);
        return result;
    }
}

console.log(factorial(3));
