var product={
    code:"co1",
    title:"shirt",
    price:1000,
    category:"Men's Wear",
    

}

if ("offer" in product){
    product.offer+=25
}
else{
    product.offer=50
}
console.log(product)

// if("stock" in product){
//     product.stock+=150
// }
// else{
//     product.stock=150
// }
// console.log(product)

"stock" in product?product.stock+=50:product.stock=150
console.log(product)

