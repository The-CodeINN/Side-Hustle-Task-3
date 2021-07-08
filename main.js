let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('display');
let integer;

integer = 0;

add.addEventListener('click', function(){
  if(integer < 50){
    integer += 1;
    int.innerHTML = integer;

  }
});

remove.addEventListener('click', function(){
  if(integer > 0){
    integer -= 1;
      int.innerHTML = integer;
  }
});