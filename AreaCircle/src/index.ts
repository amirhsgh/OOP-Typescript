class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw() {
        console.log(`Drawing a ${this.color} shape.`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export default Circle;
