function FigureArea(w, h, W, H){
    "use strict";
    let s1 = w * h;
    let s2 = W * H;
    let s3 = Math.min(h, H) * Math.min(w, W);

    let resultArea = s1 + s2 - s3;

    console.log(resultArea);
}

FigureArea(2, 4, 5, 3);