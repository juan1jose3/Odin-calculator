let answerPanel = document.querySelector(".answerPanel");


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

    return ans;

}


function verifyParts(parts){
    for(let i = 0; i<parts.length;i++){
        if(parts[i] === "-" && Number.isNaN(parts[i+1]) === false) // this is how we check if it's a number
        {
            if(Number.isNaN(parts[i-1]) === true){
                parts[i+1] = parts[i] + parts[i+1];
                parts.splice(i,1);
                i--;
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
           
        }else if(btn.classList.contains("clear")){
            answerPanel.textContent = "";
            expression = "";
            parts.length = 0;

        }else if(btn.classList.contains("del")){
            
            answerPanel.textContent = answerPanel.textContent.slice(0,-1);
            expression = expression.slice(0,-1);
        }
        //console.log(expression);

        parts = expression.split(/(\+|\-|\x|\/|\%)/).filter(Boolean);
        
        verifyParts(parts);
        
        
        if(btn.classList.contains("showAns")){
            let result = evaluateParts(parts);
            dispayAnswer(result);
            expression = result;
            
        }
        
        console.log(parts);
    });
    
}


operate();