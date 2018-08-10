function templateFormat(array){
    "use strict";

    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");

    for (let i = 0; i < array.length; i += 2) {
        let question = array[i];

        let answer = array[i + 1];
          console.log("  <question>");
            console.log(`    ${question}`);
          console.log("  </question>");
          console.log("  <answer>");
            console.log(`    ${answer}`);
          console.log("  </answer>");
    }
    console.log("</quiz>");
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);