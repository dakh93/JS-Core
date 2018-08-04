function CalcSumAndVat(input){
    "use strict";

    let sum = 0;
    for (let num of input) {
        sum += num;
    }
    let vat = (sum * 0.2);
    let total = vat + sum;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total)
}

let input = [70, 30, 50];
CalcSumAndVat(input);