// map()
// filter()
// reduce()
// sort()

            // map()

// cube
arr=[100,10,72,3,39,4,5,90,19,11]
var cube=arr.map((num)=>num**3)
console.log(cube)

// square
var square=arr.map((num)=>num**2)
console.log(square);

// addFive
var addFive=arr.map((num)=>num+5)
console.log(addFive);

            // filter()

// even
var even=arr.filter((num)=>num%2==0)
console.log(even);

// odd
var odd=arr.filter((num)=>num%2!=0)
console.log(odd);

// greaterThan 3
var numGT=arr.filter((num)=>num>3)
console.log(numGT);


            // reduce()
// var arr1=[1,2,3,4,5,6,7,8,9,10]

// total
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total)

// product

var product=arr.reduce((n1,n2)=>(n1*n2))
console.log(product);

// largest num

var larNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(larNum);

// smallest num
var smallNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(smallNum);


// cube sum
var cubeSum=arr.map((n1)=>n1**3).reduce((n1,n2)=>n1+n2)
console.log(cubeSum);

            // sort()

arr.sort() //object sorting
arr.sort((n1,n2)=>n1-n2) //sorting in ascending order(if n1<n2 first returns n1 then n2)
arr.sort((n1,n2)=>n2-n1) //sorting in descending order
console.log(arr);


