var task10 = function(array){
  for (let i = 0, endI = array.length - 1; i < endI; i++){
    let swap = false;

    for(let j = 0, endJ = endI - i; j < endJ; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j + 1]] = [array[j+1],array[j]];
        swap = true;
      };
    };
    if(!swap) break;
  }
  return array;


};
