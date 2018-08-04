function ChessBoard(n){
    "use strict";
    console.log("<div class=\"chessboard\">");

    for (let i = 0; i < n; i++) {
        let color = "black";
        if (i % 2 !== 0){
            color = "white";
        }
        console.log("  <div>");

        for (let j = 0; j < n; j++) {

            console.log(`    <span class="${color}"></span>`);
            //color = SwitchColor(color);
            if (color === "white"){
                color = "black";
            }
            else{
                color = "white";
            }
        }
        console.log("  </div>");
    }
    console.log("</div>");

}


function SwitchColor(color){
    "use strict";
    if (color === "white"){
        return "black";
    }
    else{
        return "white";
    }
}

