class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.state = 100;
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const found = this.books.find(function (book) {
            if (book[type] === value) {
                return book[type];
            }
        });

        return found || null;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(findIndex => findIndex.name === bookName);
        if (index === true) {
            let searchedBook = this.books.splice(index, 1);
            return searchedBook[0];
        } else if (index === -1) {
            return null;
        }
    }
}

const library2 = new Library("Библиотека имени Сергея");
library2.giveBookByName("Машина времени в джакузи");

class Student {
    constructor(name) {
        this.name = name;
    }

    setSubject(subjectName) {
        if (this.subject === undefined) {
            this.subject = {};
            this.subject.subjectName = [];
        } else if (this.subject.hasOwnProperty(subjectName) !== true) {
            this.subject.subjectName = [];
        }
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        } else if (this.hasOwnProperty(subject) !== true || this.subject.hasOwnProperty(subjectName) !== true) {
            this.setSubject(subjectName);
            this.subject.subjectName.push(mark);
        } else {
            this.subject.subjectName.push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        let sum = 0;
        if (subjectName in this.subject) {
            this.subject.subjectName.map(element => sum += element);
        } else {
            return 'Несуществующий предмет';
        }
        return sum / this.subject.subjectName.length;
    }

    getAverage() {
        let sum = 0;
        for (let i in this.subject) {
            this.subject[i].map(
                element => {
                    sum += element;
                });
        }
        return sum / this.subject[i].length;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");