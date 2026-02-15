let answerPanel = document.querySelector(".answerPanel");
let dot = document.querySelector(".dot");


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

function modulo(a,b){
    return a % b;
}

function power(a,b){
    return a ** b;
}


function defineOperation(a,symbol,b){
    let ans = 0;
    switch(symbol){
        case "+":
            ans = add(a,b);
            break;
            
        case "-":
            ans = subtract(a,b);
            break;
        case "x":
            ans = multiply(a,b);
            break;
                    
        case "/":
            ans = divide(a,b);
            break;
        case "%":
            ans = modulo(a,b);
            break;
        case "^":
            ans = power(a,b);
            break;
                                
        }

    return parseFloat(ans.toFixed(3));

}

function isOperator(item){
    return ["+", "-", "x", "/", "%", "^"].includes(item);
}

function verifyParts(parts){
    for(let i = 0; i<parts.length;i++){
        if(parts[i] === "-") 
        {
            if(parts[i+1] && !isNaN(Number(parts[i+1]))){
            
                if(i === 0 || isOperator(parts[i - 1])){
                    parts[i+1] = parts[i] + parts[i+1];
                    parts.splice(i,1);
                    i--;
                }
            }
            
        }
    }

}

function evaluateParts(parts){
    while(parts.length >= 3){
        let firstNumber = parseFloat(parts[0]);
        let symbol = parts[1];
        let secondNumber = parseFloat(parts[2]);
                
                
        parts.splice(0,3);
        result = defineOperation(firstNumber,symbol,secondNumber);
        parts.unshift(result);
    }
    
    return parts[0].toString();
    
    
}

function dispayAnswer(answer){
    
    if(answer == "Infinity"){
        answerPanel.textContent = "Math Error";
    }else{
        answerPanel.textContent = answer;
        
    }
  
}


function scanForDots(expression){

    for(let i = expression.length -1; i>=0; i--){
        if(isOperator(expression[i])){
            break;
        }

        if(expression[i] == "."){
            return true;
        }
    }
    return false;
}

function operate(){
  
    let buttonPanel = document.querySelector(".buttonPanel");

    let expression = "";
    let parts;
    
    buttonPanel.addEventListener("click", (event) =>{
        let btn = event.target.closest("button");
        if(!btn) return;
        
        if(!btn.classList.contains("showAns") && !btn.classList.contains("action")){


            answerPanel.textContent += btn.textContent;
            expression += btn.textContent;
       
            if(scanForDots(expression)){
                dot.disabled = true;
            }else{
                dot.disabled = false;
            }
            
            
           
        }else if(btn.classList.contains("clear")){
            answerPanel.textContent = "";
            expression = "";
            parts.length = 0;

        }else if(btn.classList.contains("del")){
            
            answerPanel.textContent = answerPanel.textContent.slice(0,-1);
            expression = expression.slice(0,-1);
        }
        //console.log(expression);

        parts = expression.split(/(\+|\-|\x|\/|\%|\^)/).filter(Boolean);
        
        verifyParts(parts);
        
        
        if(btn.classList.contains("showAns")){
            let result = evaluateParts(parts);
            dispayAnswer(result);
            expression = result;
            
        }
        
        
    });
    
}


operate();