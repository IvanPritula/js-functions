const num1 = Number(prompt('Введите 1 число')); 
const num2 = Number(prompt('Введите 2 число')); 
function minNum(n1,n2){
  let min=0;
  if(n1<n2){
    min=n1;
    return min;
  }
  if(n1>n2){
    min=n2;
    return min;
  }
  return null;
}
console.log(minNum(num1,num2));

function maxNum(n1,n2){
  let max=0;
  if(n1>n2){
    max=n1;
    return max;
  }
  if(n1<n2){
    max=n2;
    return max;
  }
  return null;
}
console.log(maxNum(num1,num2));

const age = Number(prompt('Введите свой возвраст'));
function isAdult(age1){
  if(age>=18){
    return true;
  }
  if(age<=18){
    return false;
  }
  return null;
}
console.log(isAdult(age))

function checkMultiplicity(n1,n2){
  if(n1%n2===0){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkMultiplicity(num1,num2));

  const A = Number(prompt('Введите длину стороны A')); 
  const B = Number(prompt('Введите длину стороны B')); 
  const C = Number(prompt('Введите длину стороны C')); 
  function triangle(a,b,c){
    if((a+b)>c){
      return 'Треугольник существует';
    }
    else{
      return 'Треугольник не существует';
    }
}
console.log(triangle(A,B,C));