function cookingByNumbers(input){
    "use strict";
    let startNum = Number(input[0]);

    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let currCmd = commands[i];

        switch (currCmd){
            case "chop": startNum /= 2; break;
            case "dice": startNum = Math.sqrt(startNum); break;
            case "spice": startNum += 1; break;
            case "bake": startNum *= 3; break;
            case "fillet": startNum -= startNum * 0.2;
        }
        console.log(startNum);
    }
}

cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);