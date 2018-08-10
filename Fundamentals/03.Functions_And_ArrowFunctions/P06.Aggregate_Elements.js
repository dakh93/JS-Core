function aggregateElements(array){
    "use strict";

    aggregate(0, (a, b) => {return a + b});
    aggregate(0, (a, b) => {return a + 1 / b});
    aggregate("", (a, b) => {return a + b});

    function aggregate(startValue, lambda) {
        for (let i = 0; i < array.length; i++) {
            startValue = lambda(startValue, array[i]);
        }
        console.log(startValue);
    }
}

aggregateElements([1, 2, 3]);