class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

//polimorphisme
//tapi masih belom ngerti
const shapes = [new Circle(5), new Rectangle(2, 5)];

shapes.forEach((shapes) => {
    console.log(`${shapes.area()}`);
});
