/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

let filter = function(array, callBack){

  if(arguments.length !== 2){
    throw new Error('function must include 2 arguments');
  } else if (Array.isArray(arguments[0]) !== true){
    throw new Error('first argument must be an array');
  } else if(typeof arguments[1] !== "function"){
    throw new Error('second argument must be a function');
  };

  let newArray = [];

  for(let i = 0; i < array.length; i++){

    if(callBack(array[i], i, array)){
      newArray.push(array[i]);
    }
  };
  return newArray;

};

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
