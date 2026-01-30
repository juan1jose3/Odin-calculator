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

    }

    return ans;

}

function operate(){
  
    let buttonPanel = document.querySelector(".buttonPanel");
    let answerPanel = document.querySelector(".answerPanel");
    
    
    let expression = "";
    
    let firstNumber;
    let symbol;
    let secondNumber;
    
    buttonPanel.addEventListener("click", (event) =>{
        let btn = event.target.closest("button");
        if(!btn) return;
        
        
        
        answerPanel.textContent += btn.textContent;
        
        expression += btn.textContent;
        
        let parts = expression.split(/(\+|\-|\x|\/|\%)/).filter(Boolean);
        
        if(parts[0] === "-" && parts.length > 1){
            parts[1] = parts[0] + parts[1];
            parts.shift();
            
        }
        
        console.log(parts);
        if(parts.length >= 3){
            
            while(parts.length >= 3){
                firstNumber = parseInt(parts[0]);
                symbol = parts[1];
                secondNumber = parseInt(parts[2]);
                
                
                
                parts.splice(0,3);
                result = defineOperation(firstNumber,symbol,secondNumber);
                parts.unshift(result);
                
            }
            //console.log(parts);
            answerPanel.textContent = "";
            
            answerPanel.textContent = parts[0];
            
            
            parts.shift();
            expression = "";
        }
        
        
        
        
        
        
    });
    
}


operate();