function LetterOccurance(string, letter){
    "use strict";

    let cnt = 0;

    for (let char of string) {
        if (char === letter){
            cnt++;
        }
    }
    console.log(cnt);
}

LetterOccurance("bambucha", "b");