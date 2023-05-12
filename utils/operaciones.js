//SUMA
const operacionSuma = (numero1, numero2, objeto )=>{
    objeto.suma = numero1+numero2
    return objeto; 
    
    
    }
    
    //RESTA 
    const operacionResta =(numero1, numero2, objeto)=>{
    objeto.resta = numero1-numero2
    return objeto;
    }
    
    
    // MULTIPLICACION 
    const operacionMultiplicacion = (numero1, numero2, objeto)=>{
        objeto.multiplicacion = numero1*numero2
        return objeto; 
    }
    //DIVISION 
    const operacionDivision =(numero1, numero2, objeto)=>{
    objeto.division= numero1/numero2
    return objeto;
    }
    
    //CUADRADOS 
    const operacionCuadrados = (operacionSuma, objeto) => {
        objeto.potencia= operacionSuma*operacionSuma
        return objeto; 
    
    }
module.exports= {
 operacionSuma, 
 operacionResta,
  operacionMultiplicacion, 
  operacionDivision,
   operacionCuadrados,   
}    