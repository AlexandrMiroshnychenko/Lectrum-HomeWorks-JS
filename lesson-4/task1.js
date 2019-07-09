/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

//const person = {};

// Решение
const person = {
  salary : null
};
const now = new Date();
const currentDay = new Date().getDate();
const daysInMon = new Date().daysInMonth();

Date.prototype.daysInMonth = function() {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

if((daysInMon - currentDay) > 20){
  person.salary = 'good salary';
} else {
  person.salary = 'bad salary';
};


person.salary; // good salary

exports.person = person;
