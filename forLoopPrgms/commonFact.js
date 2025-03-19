var num1=10
var num2=8
minNum=num1<num2?num1:num2
for(i=1;i<=minNum;i++){
    if (num1%i==0 && num2%i==0){
        console.log(i);
        
    }
}