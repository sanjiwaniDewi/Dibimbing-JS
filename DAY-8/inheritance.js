// pewarisan
// mewarisi dari parent nya

//cara menggunakan pakai extend

class Animal {
    constructor(name, age) {
        this.name = name;
        this._age = age; // penamaan menggunakan _ bertujuan untuk secure nanti diakses pake getter dan setter
    }
    speak() {
        return `${this.name} bersuara`;
    }
    age() {
        return this._age;
    }
}
//dog mewarisi dari parent Animal
class Dog extends Animal {
    speak() {
        return `${this.name} bersuara guk guk`;
    }
}

class Chiken extends Animal {
    //jika ingin meambahkan dalam constractor
    //menggunakan super untuk mengambil constructor parentnya
    constructor(nama, age, child) {
        super(nama, age);
        this.child = child;
    }
    speak() {
        return `${this.name} punya anak ${this.child} bersuara cukurukuk kuk geruk `;
    }
    panen() {
        if (super.age() > 3) {
            return `${this.name} sudah siap disembelih`;
        }
    }
}

const ayam = new Chiken("rembo", 11, "10").panen();

console.log(ayam);
