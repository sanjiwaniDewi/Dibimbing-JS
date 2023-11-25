// terdiri dari data dan function
// memiliki properti dan method
// cara memanggilnya dengan instace dengan new <nama class>

class Person {
    constructor(name, account) {
        this.name = name;
        this.account = account;
    }

    rich() {
        return `i am ${this.name} have ${this.account}`;
    }
}

const reza = new Person("reza", "$1000").rich();

console.log(reza);

//perbedaan dengan function
//selanjutnya akan pake function
function Person2(name, account) {
    this.name = name;
    this.account = account;
    this.rich = () => {
        return `i am ${this.name} have ${this.account}`;
    };
}

const dewi = new Person2("dewi", "$2000").rich();

console.log(dewi);
