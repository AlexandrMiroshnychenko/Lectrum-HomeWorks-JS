/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

var createArray = function(element, length){

  if(arguments.length !== 2){
    throw new Error(`function must include 2 arguments`);
  } else if (typeof length !== "number"){
    throw new Error(`${length} this argument must be a number`);
  };

  if(typeof element === "number" ||
    typeof element === "string" ||
    typeof element === "object" ||
    Array.isArray(element) === true){

    return Array(length).fill(element);

  } else {
    throw new Error(`${element} may be: number, string, object or array`);
  };

};

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
