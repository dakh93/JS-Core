function FilterByAge(minAge, fName, fAge, sName, sAge){
    "use strict";
    let firstPerson = {
        name : fName,
        age : fAge
    };

    let secondPerson = {
        name : sName,
        age : sAge
    };

    if (firstPerson.age >= minAge)
        console.log(firstPerson);

    if (secondPerson.age >= minAge)
        console.log(secondPerson);
}

FilterByAge(12, "Gosho", 14, "Pesho", 11);