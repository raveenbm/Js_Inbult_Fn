//return truthy value if one value is true in array
// it will teturn falsy value if all the value return false

const numbers = [1,2,3,4,5]

let value1 = numbers.some(greaterThanFour);
let value2 = numbers.some(greaterThanFive);

function greaterThanFour(item) {
    return item > 4
}
function greaterThanFive(item) {
    return item > 5
}

console.log("Added New Value1", value1);
console.log("Added New Value2", value2);


const persons = [
    {
        name : "Muthu",
        age : 18
    },
    {
        name : "Rave",
        age : 20
    },
    {
        name : "Endran",
        age : 25
    }
]

let value3 = persons.some((item) => {    
    return item .age >=15
});

console.log("Value 3 Value 3 Value 3 Value 3",value3);
