var number=567
var sum=0

while(number!=0){
    let lastDig=0
    lastDig=number%10
    sum=sum+lastDig
    number=Math.floor(number/10)
    
}
console.log(sum);
