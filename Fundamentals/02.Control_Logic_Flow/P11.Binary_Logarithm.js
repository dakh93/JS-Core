function BinaryLogarithm(numbers) {
    numbers = numbers.map(Number);
    for (let num of numbers) {
        if (num !== 0){
            let binResult = Math.log2(num);
            console.log(binResult);
        }

    }
}


