let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('display');
let integer;

integer = 0;

add.addEventListener('click', function(){
  int.innerHTML = integer;
  if(integer < 50){
    integer += 1;
  }
});

remove.addEventListener('click', function(){
  int.innerHTML = integer;
  if(integer > 0){
    integer -= 1;
  }
});