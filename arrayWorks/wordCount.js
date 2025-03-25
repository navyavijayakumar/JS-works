// var words=["hai","hello","hi","hai","hello"]

// console.log("using length======");

// for(i=0;i<words.length;i++){
//     console.log(words[i]);
    
// }

// console.log("using in============");

// for(let i in words){
//     console.log(words[i]);
    
// }

// console.log("using of=========");

// for(let w of words){
//     console.log(w);
    
// }

// console.log("using forEach======");

// words.forEach((w)=>console.log(w))


var text="hai hello hello"
words=text.split(" ")
wCount={}

for(let w of words){
    // if(w in wCount){
    //     wCount[w]+=1
    // }
    // else{
    //     wCount[w]=1
    // }
    w in wCount?wCount[w]+=1:wCount[w]=1
}
console.log(wCount);
