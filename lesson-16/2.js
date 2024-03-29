/**
 * Задача 2.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
 *
 * - getName — возвращает конкатенацию приватных свойств firstName и lastName;
 * - getRate — возвращает значение приватного свойства rate
 * - getDays — возвращает значение приватного свойства days
 * - getSalary — возвращает зарплату
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение

class Worker {
  #firstName = null;
  #secondName = null;
  #rate = null;
  #days = null;

  constructor(firstName, secondName, rate, days){
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#rate = rate;
    this.#days = days;
  }

  getName(){
    return `${this.#firstName} ${this.#secondName}`;
  }

  getRate(){
    return this.#rate;
  }

  getDays(){
    return this.#days;
  }

  getSalary(){
    let salary = this.#days * this.#rate;
    return salary;
  }


};

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

exports.Worker = Worker;
