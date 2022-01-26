function parseCount(toParse) {
    let parsed = Number.parseInt(toParse);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(Parse) {
    try {
        return parseCount(Parse);
    } catch (e) {
        return e;
    }

}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        let perimeter = (this.a + this.b + this.c);
        return perimeter;
    }

    getArea() {
        let semi = 0.5 * this.getPerimeter();
        let result = Math.sqrt(semi * (semi - this.a) * (semi - this.b) * (semi - this.c)).toFixed(3);
        return Number.parseFloat(result);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}