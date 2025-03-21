var w1="silent"
var w2="listen"
// let srtW1=""
// let srtW2=""
// w1=w1.toLowerCase().split("").sort()
// w2=w2.toLowerCase().split("").sort()

// srtW1+=w1
// srtW2+=w2

// if(srtW1==srtW2){
//     console.log("Anagram");
    
// }
// else{
//     console.log("not");
    
// }
let result=""
for(let ch of w1){
    if (w2.includes(ch)){
        result+=ch
    }
}
if (w1==result){
    console.log("anagram");
    
}
else{
    console.log("not");
    
}



// let isAnagram=true

// for(let ch of w1){
//     if (!w2.includes(ch)){
//         isAnagram=false
//     }
// }
// console.log(isAnagram);
