function OddOrEven(num) {

    let divide = num % 2;

    if (num % 1 !== 0){
        console.log("invalid");
        return;

    }

    if (divide === 0){
        console.log("even");
    }
    else if(divide !== 0){
        console.log("odd");
    }

}

