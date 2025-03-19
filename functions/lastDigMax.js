function lastDigMax(n1,n2){
    let n1LastDig=n1%10
    let n2LastDig=n2%10
    return n1LastDig>n2LastDig?n1:n2
}
console.log(lastDigMax(121,119));
