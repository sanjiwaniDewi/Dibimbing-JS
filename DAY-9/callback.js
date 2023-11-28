//ansyncronuse

//penjelasan asyncronus
//berjalan tidak berurutan
setTimeout(() => {
    console.log("callback 1");
}, 2000);
setTimeout(() => {
    console.log("callback 2");
}, 1000);

function greet(name, callback) {
    console.log(`haloww nama saya ${name}`);
    callback;
}
function hiYo(age) {
    console.log(`hii yoooo ${age}`);
}
greet("lili", hiYo(10));

function asyc1(callback) {
    setTimeout(() => {
        console.log("asyc 1");
        return Promise.resolve(callback());
    }, 1000);
}
function asyc2(callback) {
    setTimeout(() => {
        console.log("asyc 2");
        return Promise.resolve(callback());
    }, 1000);
}
function asyc3(callback) {
    setTimeout(() => {
        console.log("asyc 3");
        return Promise.resolve(callback());
    }, 1000);
}

asyc1()
    .then(asyc2)
    .then(asyc3)
    .then(function () {
        console.log("app");
    });
