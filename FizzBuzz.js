
function divisible(a,b){
  return (a%b == 0);
}

function contieneNumero(a,b){
  return (a.toString()).includes(b.toString());
}

function posibleNumero(numero,parametro){
  return (divisible(numero,parametro) || contieneNumero(numero,parametro));
}

function evaluarFizzBuzz(numero){

  if(divisible(numero,3) && divisible(numero,5))
    return 'FizzBuzz...';
  else{
    if(posibleNumero(numero,3))
      return 'Fizz...';
    else
      if(posibleNumero(numero,5))
        return 'Buzz...';
  }

  return numero;
}

function juegoFizzBuzz(){

  for(let i = 1; i <= 100; i++ )
    console.log(evaluarFizzBuzz(i));
    
}

juegoFizzBuzz();
