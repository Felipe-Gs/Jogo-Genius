function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof arr !== 'number') throw new TypeError("NUm precisa ser do tipo number");

        if(arr.length != num) throw new RangeError("Tamanho invalido!");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("este erro é referenceError!")
            console.log(e.message)
          
        }else if(e instanceof TypeError){   
            console.log("este erro é typeError!")
            console.log(e.message) 
        }
        else{
            console.log("Tipo de erro nao esperado:" + e );
        }



    }  
}
console.log(validaArray([1, 2], 2));