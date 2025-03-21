var text="the quick brown fox jumps over the lazy dog"
const alpha="abcdefghijklmnopqrstuvwxyz"

isPangram=true
for(let ch of alpha){
    if(text.includes(ch)==false && ch!=" "){
        isPangram=false
        break
    }
}
console.log(isPangram);
console.log(isPangram==true?"Pangram":"not")



