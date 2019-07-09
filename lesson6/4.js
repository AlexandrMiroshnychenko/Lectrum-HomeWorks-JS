/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
let some = function(array, callBack){

  if(arguments.length !== 2){
    throw new Error('function must include 2 arguments');
  } else if (Array.isArray(arguments[0]) !== true){
    throw new Error('first argument must be an array');
  } else if (typeof callBack !== "function"){
    throw new Error('second argument must be a function');
  };

  for(let i = 0; i < array.length; i++){
    if(callBack(array[i], i, array)){
      return true;
    }
  }
  return false;
};

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
