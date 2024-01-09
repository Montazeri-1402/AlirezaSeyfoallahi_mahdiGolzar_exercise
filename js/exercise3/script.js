// exercise3-1
/*let calculate = (number1, number2, op) => {
    let result
    switch (op) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;

        default:
            break;
    }
}

console.log(calculate(2,3,"+"));*/


//exercise3-2
/*let deepFind=(obj, key)=>{
    let value
    Object.keys(obj).some(k=>{
        if(k===key){
            value=obj[k]
            return true;
        }
        if (obj[k]&& typeof obj[k]==='object') {
            value=deepFind(obj[k],key)
            return value!==undefined;
        }
    })
    return value;
}

const data ={
    level1:{
        level2:{
            level3:{
                somekey:'value'
            }
        }
    }
}

const value=deepFind(data,'someKey')
console.log(value);*/


//exercise3-3
/*let getobjAndFunction = (obj, deepFind) => {
    console.log(deepFind(data, 'someKey') + " " + obj);
}*/