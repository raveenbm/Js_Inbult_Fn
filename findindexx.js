// will find the element and retrun its index

const numbers = [1,2,4,5,3];

const number1 = numbers.findIndex(findNum);

function findNum(value) {
    return value === 3;
}

console.log("number1 number1 number1 ", number1);

//--------------------------------------------------------------------------------------------------------------------------------------------


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

const number2 = persons.findIndex(findText);

function findText(value) {
    return value.name === "Rave";
}

console.log("number2 number2 number2 ", number2);

