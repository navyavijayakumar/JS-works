function liveScreen(displayText){
    //fetch textbox  current value
    let currentValue=display.value
    // valid op array
    const operators=["+","-","*","/"]
    if(currentValue.length==0 && displayText=="-"){
    display.value+=displayText
    }

    else if(currentValue.length>0 && operators.includes(displayText)){
        let lastCharacter=currentValue.charAt(currentValue.length-1)

        if(operators.includes(lastCharacter)){
            currentValue=currentValue.slice(0,-1)
            currentValue+=displayText
            display.value=currentValue
        }
        else{

        
            display.value+=displayText
    
        }

    }

    else{
        if(currentValue.length==0 && operators.includes(displayText)){
            return
        }
        display.value+=displayText

    }
    
}

function clearBox(){
    display.value=""
    
}
function evaluateExpression(){
    let expr=display.value
    let result=eval(expr)
    display.value=result
}
function backSpace(){
    let currentValue=display.value
    let result=currentValue.slice(0,-1)
    display.value=result
}

