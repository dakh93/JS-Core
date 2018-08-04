function NextDayCalc(year, month, day){
    "use strict";
    var date = new Date(year, month -1 , day);
    var newDate = new Date(year, month - 1, date.getDate() + 1);;




    let y = newDate.getFullYear();
    let m = newDate.getMonth() + 1;
    let d = newDate.getDate();


    console.log(`${y}-${m}-${d}`);

}

NextDayCalc(2016, 9, 30);