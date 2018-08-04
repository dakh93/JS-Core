function PrimeChecker(number) {
    number = Number(number);


    if (number <= 1){
        console.log(false);
        return;
    }

    if (number === 2){
        console.log(true);
        return;
    }
    for(let i = 2; i <= Math.ceil(Math.sqrt(number)); ++i)  {
        if (number % i === 0){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

PrimeChecker(7);