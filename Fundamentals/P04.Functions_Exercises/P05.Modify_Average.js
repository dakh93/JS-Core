function modifyAverage(number){
    "use strict";


    let sum = number
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);

    let average = sum / number.toString().split("").length;
    while (average <= 5){

        number = number.toString() + "9";
        number = Number(number);

        sum = number.toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b, 0);
        average = sum / number.toString().split("").length;

    }

    console.log(number);
}

modifyAverage(5835);