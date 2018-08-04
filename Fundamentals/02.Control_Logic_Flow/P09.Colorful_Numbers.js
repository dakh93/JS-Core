function ColorfulNumbers(n){
    "use strict";
    console.log("<ul>");
    for (let i = 1; i <= n; i++) {
        let currColor = "green";

        if (i % 2 === 0){
            currColor = "blue";
        }
        console.log(`<li><span style='color:${currColor}'>${i}</span></li>`);
    }
    console.log("</ul>");
}


