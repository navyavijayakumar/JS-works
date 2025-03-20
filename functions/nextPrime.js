
// function nextPrime(num){  
// num = num + 1
//     for(i=2;i<num;i++){

//     if(num%i==0){
//         num = num + 1  
//         i = 1
//     }
// }
// return num;
// }
// var result=nextPrime(7)
// console.log((result));


function isPrime(num){
    let isPrime=true
    for (i=2;i<num;i++){
        if(num%i==0){
            isPrime=false
            break
        }
    }
    return isPrime
}



function nextPrime(num){
    num=num+1
    let currentNumIsPrime=isPrime(num)
    while(currentNumIsPrime==false){

        num=num+1
        currentNumIsPrime=isPrime(num)
    }
    return num
}
console.log(nextPrime(7));
