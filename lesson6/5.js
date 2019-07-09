/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

var reduce = function(array, callBack, acc){
  if(arguments.length !== 3){
    throw new Error('function must include 3 arguments');
  } else if (Array.isArray(arguments[0]) !== true){
    throw new Error('first argument must be an array');
  } else if(typeof arguments[1] !== "function"){
    throw new Error('second argument must be a function');
  } else if (typeof arguments[2] !== "number"){
    throw new Error('third argument must be a number');
  };

  let tmp = acc;

  for(let i = 0; i < array.length; i++){
    tmp = callBack(tmp, array[i], i, array);
    acc = tmp;
  }
  return acc;
};


const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
