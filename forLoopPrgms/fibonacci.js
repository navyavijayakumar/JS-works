var prev=0
var curr=1
var next=0
var num=10
console.log(`${prev}\n${curr}`);

for(i=2;i<num;i++){
    next=prev+curr
    console.log(next);
    prev=curr
    curr=next
}