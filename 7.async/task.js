class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.timerId = null;
    }

    addClock(time, callback, id) {
        const newAlarm = { id, time, callback };
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        let alarmFinder = this.alarmCollection.find(element => element.id === id);
        if (!alarmFinder) {
            this.alarmCollection.push(newAlarm);
        } else {
            console.error('Будильник с таким id уже существует.');
        }
    }



    removeClock(id) {
        let idFinder = this.alarmCollection.findIndex(findIndex => findIndex.id === id);
        if (idFinder === -1) {
            console.error("Будильник с таким id не существует.");
        } else {
            this.alarmCollection.splice(idFinder, 1);
            console.log("Будильник успешно удален.");
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        };

        if (this.timerId === null) {

            let intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => checkClock(alarm));
            }, 1000);
            this.timerId = intervalId;
        }

    }

    stop() {
        if (this.timerId !== null) {
            this.clearInterval(timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach((element) => console.log("Будильник №" + element.id + " заведен на " + element.time))
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}

let phoneAlarm = new AlarmClock();
console.log(phoneAlarm.getCurrentFormattedTime());
phoneAlarm.addClock("02:16", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("02:17", () => console.log("Пора вставать 2"), 2);
phoneAlarm.removeClock(2);
phoneAlarm.printAlarms();
// phoneAlarm.addClock("00:51", () => console.log("Пора вставать 3"));
phoneAlarm.addClock("02:17", () => {
    console.log("Пора вставать 4");
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.start();