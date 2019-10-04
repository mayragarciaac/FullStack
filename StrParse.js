
function obtenerNumero(str){
    if(str != "" && str != null && str != undefined)
      return Number(str);
  }
  
  function EsNumero(str){
    return Number.isInteger(obtenerNumero(str));
  }
  
  function kata(str){
    let corteCadena = (str.split('\n'));
    let delimitadores = corteCadena[0].replace("//","");
    let numeros = corteCadena[1].split(delimitadores);
  
    if(str != ""){
      if(str.includes(delimitadores)){
        let sum = 0;
        for(let i=0; i < numeros.length; i++){
          if(numeros[i] >= 1000)
            continue;
  
          if(EsNumero(numeros[i]))
            sum+=Number(numeros[i]);
          else{ 
            sum= 0; 
            break; 
          }
        }
  
        if(sum != 0)
          return sum;
      }
      else 
        if(EsNumero(str))
          return Number(str);
    }
   return 0;
  }
  
  
  
  function kata2(str){
    let corteCadena = (str.split('\n'));
    let delimitadores = corteCadena[0].replace("//","");
    let numeros = corteCadena[1].split(delimitadores);
    
    if(str != ""){
      if(str.includes(delimitadores)){
        let sum = 0;
        for(let i=0; i < numeros.length; i++){
          if(numeros[i] >= 1000)
            continue;
  
          if(EsNumero(numeros[i]))
            sum+=Number(numeros[i]);
          else{ 
            sum= 0; 
            break; 
          }
        }
  
        if(sum != 0)
          return sum;
      }
      else 
        if(EsNumero(str))
          return Number(str);
    }
   return 0;
  }
  
  console.log(kata("//;\n2;999;-1;1003")); 