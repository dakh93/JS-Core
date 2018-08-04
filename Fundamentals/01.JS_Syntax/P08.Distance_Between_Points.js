function DistanceBetweenPoints(x1, y1, x2, y2){
    "use strict";
    let fPoint = {x : x1, y : y1};
    let sPoint = {x : x2, y : y2};

    let x = Math.max(fPoint.x, sPoint.x);
    let xx = Math.min(fPoint.x, sPoint.x);
    let y = Math.max(fPoint.y, sPoint.y);
    let yy = Math.min(fPoint.y, sPoint.y);

    let distance =
        Math.sqrt(
            Math.pow(x - xx, 2) +
            Math.pow(y - yy, 2));

    console.log(distance);
}

DistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);

