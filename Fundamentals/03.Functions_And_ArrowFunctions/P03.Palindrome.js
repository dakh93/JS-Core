function palindromeCheck(input){
    "use strict";
    let reversed = input
         .split("")
         .reverse()
         .join("");

    if(reversed === input)
        console.log(true);
    else
        console.log(false);
}

palindromeCheck("aka");