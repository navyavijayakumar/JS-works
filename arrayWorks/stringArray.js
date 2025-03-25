
var words=["am","pm","goodmorning","evening","aftenoon"]

var upperCase=words.map((w)=>w.toUpperCase())
console.log(upperCase)

// return all words whose length=2

var wordsLength=words.filter((w)=>w.length==2)
console.log(wordsLength)

// return all words whose length>5

var gTFive=words.filter((w)=>w.length>5)
console.log(gTFive);

// wordwith most number of characters

var maxWord=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(maxWord);


// return all words startswith vowels
const vowels="aeiou"
var startsWithVowels=words.filter((w)=>vowels.includes(w[0]))
console.log(startsWithVowels);



