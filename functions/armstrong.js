
function isArmstrong(num){
    let digCount=String(num).length
    sum=0
    numCopy=num
    while(num!=0){
        digit=num%10
        exponent=digit**digCount
        sum=sum+exponent
        num=Math.floor(num/10)
    }
    return sum==numCopy?true:false
}
console.log(isArmstrong(1634));
