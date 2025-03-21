var word="this is a sample program to count number of vowels and consonants"

word.toLowerCase()

const vowels="aeiou"
var vowelCount=0
var consonantCount=0

for(let ch of word){
    
    if(vowels.includes(ch)){
        
        vowelCount+=1
    }
    else if(ch!=" "){
        consonantCount+=1
    }
}
console.log("vowel count=",vowelCount)
console.log("consonant count=", consonantCount)
