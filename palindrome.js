function palindrome(string){
    for(var i = 0; i < string.length/2; i++){
    }
    if(string[i] !== string[string.length- 1 - i]){
        return "it is not a palindrome";          
        }
       return "it is a palindrome";
    }

console.log(palindrome("eye"));
console.log(palindrome("abcd"))