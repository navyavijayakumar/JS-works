function isPalindrome(word){

    let wordLength=word.length-1
    let result=""

    for(let i=wordLength;i>=0;i--){

        let character=word.charAt(i)
        result=result+character

    }
    return result==word

}
console.log(isPalindrome("malayalam"))




