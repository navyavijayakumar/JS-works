function isPrime(num){
    let isPrimeNum=true
    for(i=2;i<num;i++){

        if (num%i==0){
            
            isPrimeNum=false
            break
        }
    }
    return isPrimeNum
}
console.log(isPrime(2));
