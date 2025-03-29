var count=0
function handleIncrement(){
    count++
    changeScreen()

}
function reset(){
    count=0
    changeScreen()
    
}

function handleDecrement(){
    count--
    changeScreen()
}



function changeScreen(){
    let display=document.querySelector("#counterDisplay")
    display.textContent=count

    if (count==0){
        display.style.color="yellow"
    }
    else if (count<0){
        display.style.color="red"
    }
    else if (count>0){
        display.style.color="green"
    }
}