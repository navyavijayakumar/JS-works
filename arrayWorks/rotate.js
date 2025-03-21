arr=[100,200,300,400]
k=2

for(let i=1;i<=k;i++){

    let lastObject=arr.pop()
    arr.unshift(lastObject)
}

console.log(arr);

