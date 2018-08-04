function Cone(radius, height){
    "use strict";
    let volume = (1/3) * Math.PI * (radius ** 2) * height;

    let lateralArea =
        Math.PI * radius *
        Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    let baseArea = Math.PI * Math.pow(radius, 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${(baseArea + lateralArea).toFixed(4)}`);

}
