const palindrom = (text) => {
    let texts = "";
    for (let index = text.length - 1; index >= 0; index--) {
        texts += text[index];
    }
    if (text == texts) {
        return true;
    } else {
        return false;
    }
};

console.log(palindrom("katak"));
