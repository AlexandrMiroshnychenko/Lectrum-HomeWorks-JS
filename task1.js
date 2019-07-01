/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
var f = function(num){
  if(typeof num === "number"){
    return Math.pow(num, 3); // или return num**3;
  }

  throw new Error ('parameter is not a number type');
};

/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
