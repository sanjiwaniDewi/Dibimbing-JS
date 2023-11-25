// fokus pada informasi penting dan melupakan detail
class Car {
    constructor(make, price) {
        this.make = make;
        this.price = price;
    }
    startEngine() {
        console.log("enggine start");
    }
}

const toyota = new Car("japan", "$20000");
//abstraksi:  langsung startengine tanpa memikirkan logikanya rumit startengine didalamnya
toyota.startEngine();
