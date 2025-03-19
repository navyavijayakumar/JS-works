var num=153
var count=0
var sum=0
count=String(num).length
numcpy=num
while(num!=0){
    let dig=num%10
    let exp=dig**count
    sum+=exp
    num=Math.floor(num/10)
    
}
if (sum==numcpy){
    console.log("Armstromg number");
    
}
else{
    console.log("not anArmstromg number");
}
