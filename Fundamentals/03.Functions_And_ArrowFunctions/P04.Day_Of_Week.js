function dayOfWeek(input){
    "use strict";
    let days = ["error", "monday", "tuesday",
            "wednesday", "thursday", "friday",
            "saturday", "sunday"];

    if (days.includes(input.toLowerCase()))
        console.log(days.indexOf(input.toLowerCase()));
    else
        console.log(days[0]);

}

dayOfWeek("Friday");