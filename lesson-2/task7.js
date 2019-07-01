var task7 = function(array){
  let counter = 0;

  for(let i = 0; i <= array.length; i++){
    if(array[i] % 2 === 0){
      counter = counter + array[i];
    }
  }
  console.log(counter);

};
