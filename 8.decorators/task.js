const addThree = (a, b, c) => a + b + c;

function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    let hash = args.join(",");
    console.log(Object.keys(cache).length);
    if (hash in cache) {
      console.log("Из кеша: " + cache[hash]);
      return ("Из кеша: " + cache[hash]);
    }
    if (Object.keys(cache).length === 5) {
      delete cache[Object.keys(cache)[0]];
    }
    let result = func.call(this, ...args);
    cache[hash] = result;
    console.log("Вычисляем: " + result);
    return ("Вычисляем: " + result);
  }
  return wrapper;
}

const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
upgradedAddThree(1, 2, 3);
upgradedAddThree(1, 2, 3);


function debounceDecoratorNew(f, ms) {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        f.apply(this, args);
      }, ms);
    } else {
      clearTimeout(timeout);
      f.apply(this, args);
    }
  }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

function debounceDecorator2(f, ms) {
  let timeout;
   function wrapper(...args) {
    wrapper.count = wrapper.count + 1;
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        f.apply(this, args);
      }, ms);
    } else {
      timeout = setTimeout(() => {
        f.apply(this, args);
      });
    }
  }
  wrapper.count = null;
  return wrapper;

}

const sendSignal2 = () => console.log("Сигнал 2 отправлен");
const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
