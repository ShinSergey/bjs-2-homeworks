function parseCount(toParse) {
    let parsed = Number.parseInt(toParse);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(toParse) {
    try {
        parseCount(toParse);
    } catch (e) {
        throw Error("Невалидное значение");
    }

}

console.log(validateCount("fgdhfghdftgh"));

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
        return (a + b + c).toFixed(3);
    }

    getArea() {
        let semi = 0.5 * (a + b + c);
        return Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
        throw {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
        
            getArea() {
                
                return "Ошибка! Треугольник не существует";
            }
        };
} else return 