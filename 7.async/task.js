class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.timerId;
    }

    addClock(time, callback, id) {
        const newAlarm = { id, time, callback };
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        } else {
            let alarmFinder = this.alarmCollection.find(element => element.id === id);
            if (alarmFinder === undefined) {
                this.alarmCollection.push(newAlarm);
            } else {
                console.error('Будильник с таким id уже существует.');
            }
        }
    }



    removeClock(id) {
        let idFinder = this.alarmCollection.findIndex(findIndex => findIndex.id === id);
        if (idFinder === -1) {
            return console.error("Будильник с таким id не существует.");
        } else {
            this.alarmCollection.splice(idFinder, 1);
            return console.log("Будильник успешно удален.");
        }
    }

    getCurrentFormattedTime() {
        const d = new Date();
        return d.getHours() + ":" + d.getMinutes();
    }
    
    start() {
        let checkClock = (alarm) => {
            if (alarm.time === getCurrentFormattedTime()) {
                return alarm.callback;
            }
        };
        
        if (typeof this.timerId === 'undefined') {
            let intervalId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => checkClock(alarm));
                this.timerId = intervalId;
            }, 1000);

        }

    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(timerId);
            this.timerId = undefined;
        }
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach((element) => console.log("Будильник №" + element.id + " заведен на " + element.time))
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("03:04", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("03:04", () => { console.log("Пора вставать 2"); phoneAlarm.removeClock(2) }, 2);
// phoneAlarm.addClock("00:51", () => console.log("Пора вставать 3"));
phoneAlarm.addClock("03:04", () => {
     console.log("Пора вставать 4"); 
     phoneAlarm.clearAlarms();
     phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.start();