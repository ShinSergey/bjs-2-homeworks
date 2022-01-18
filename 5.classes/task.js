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
        if (this.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        this.books.find(function (book) {
            if (book[type] === value) {
                return book[type];
            } else {
                return null;
            }
        });
    }

    giveBookByName(bookName) {
        if (this.books.find(findBook => findBook === bookName)) {
            let bookIndex = this.books.indexOf(bookName);
            this.books.splice(bookIndex, 1);
            return bookName;
        } else {
            return null;
        }
    }
}

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
        } else if (this.subject.hasOwnProperty(subjectName) !== true) {
            return "Несуществующий предмет";
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