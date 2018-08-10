function uppercaseWords(input){
    "use strict";
    let converted = input
        .split(/\W+/)
        .filter(w => w !== "")
        .join(", ")
        .toUpperCase();

    console.log(converted);
}

uppercaseWords('Hi, how are you?');