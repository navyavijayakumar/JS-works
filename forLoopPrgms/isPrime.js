var num=2
let isPrimeNum=true
for(i=2;i<num;i++){

    if (num%i==0){
        
        isPrimeNum=false
        break
    }
}
console.log( isPrimeNum);


