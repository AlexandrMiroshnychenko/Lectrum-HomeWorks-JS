
var task12 = function(array){
  let counter = 0;

  for(let i = 0; i <= array.length; i++){
    if(array[i] > 0){
      counter = counter + array[i];
    };
  };
  return counter;
};
