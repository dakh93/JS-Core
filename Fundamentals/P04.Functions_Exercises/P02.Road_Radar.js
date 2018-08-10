function roadRadar(input){
    "use strict";

    let restrictions = [
        {type : "motorway", speedLimit : 130},
        {type : "interstate", speedLimit : 90},
        {type : "city", speedLimit : 50},
        {type : "residential", speedLimit : 20},
    ];

    let upTo20 = "speeding";
    let upTo40 = "excessive speeding";
    let above40 = "reckless driving";


    let speed = Number(input[0]);
    let placeType = input[1];

    let takeSpeedLimit = restrictions
        .find(s => s.type === placeType );


    if (takeSpeedLimit.speedLimit < speed){
        let difference = speed - takeSpeedLimit.speedLimit;

        if (difference <= 20){
            console.log(upTo20);
        }
        else if(difference > 20 && difference <= 40 ){
            console.log(upTo40);
        }
        else {
            console.log(above40);
        }
    }
}

roadRadar([40, "city"]);