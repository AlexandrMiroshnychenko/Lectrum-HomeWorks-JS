/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
var upperCaseFirst = function(string){
  if(arguments.length !== 1){
    throw new Error('function must include 1 argument');
  };
  if(typeof string !== "string"){
    throw new Error ('it must be a string');
  };
  if(string.length === 0){
    return string;
  }

 return string[0].toUpperCase() + string.slice(1);

};

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
