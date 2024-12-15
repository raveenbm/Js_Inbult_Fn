//Will search inside an array and return the first elemnet (text match) for which call back fn return truth value else it will return false
const numbers = ["Muthu", "Rave", "Endran"];

const value1 = numbers.find(findNameMatch);


function findNameMatch(numbers) {
    return numbers === "Muthu"
}

console.log("value1 value1 value1",value1);
//-------------------------------------------------------------------------------------------------------------------------

const persons = [
    {
        name : "Muthu",
        age:13
    },
    {
        name : "Rave",
        age:15
    },
    {
        name : "Endran",
        age:22
    },
]

let value2 = persons.find(excatName);
let value3 = persons.find(excatName).age;

function excatName(value) {
    return value.name ==="Muthu"
}

console.log("Value 2 Value 2 Value 2 Value 2",value2);
console.log("Value 3 Value 3 Value 3 Value 3",value3);
