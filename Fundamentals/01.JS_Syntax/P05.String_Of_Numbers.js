function StringOfNumbers(number){
    "use strict";

    let stringResult = "";

    for (let i = 1; i <= number; i++) {


        stringResult +=  i.toString();
    }
    console.log(stringResult);
}

StringOfNumbers(11);