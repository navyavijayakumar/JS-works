

function handleAddition(){
    let num1=document.querySelector("#number1").value
    let num2=document.querySelector("#number2").value
    let resultVal=document.querySelector("#resultValue")
        
    result=Number(num1)+Number(num2)
    resultVal.textContent=result
}

function handleSubtraction(){
    let num1=number1.value
    let num2=number2.value
    let result=Number(num1)-Number(num2)
    document.querySelector("#resultValue")
    resultValue.textContent=result
}
