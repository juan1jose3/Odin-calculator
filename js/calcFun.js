function add(a,b){
    return a + b;
}


function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


function operate(){
    let firstNumber = 5;
    let symbol = "/";
    let secondNumber = 2;



    switch(symbol){
        case "+":
            console.log(add(firstNumber,secondNumber));
            break;
        
        case "-":
            console.log(subtract(firstNumber,secondNumber));
            break;
        case "*":
            console.log(multiply(firstNumber,secondNumber));
            break;
        
        case "/":
            console.log(divide(firstNumber,secondNumber));
            break;

    }
}


operate();