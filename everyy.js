// Executes the given fn of an array,if a false value occur it will return false immediately
// Ins simple we can say execution will happens in any point eecution tertun false value then a ececution will stops imediately
//It will return only boolean value

const numbers = [1,2,3,4,5];

let res = numbers.every(isPostivie);



function isPostivie(item) {
    return item > 0
}



console.log("Res", res);

//------------------------------------------------------------------------

const persons = [
    {
        name :"muthu"
    },
    {
        name :"rave"
    },
    {
        surname :"eendran"
    }
];


let nam = persons.every((item) => item.name)
console.log(nam);

//---------------------------------------------------------------------------------

const personss = [
    {
        name :"muthu"
    },
    {
        name :"rave"
    },
    {
        name :"eendran"
    }
];


let name = personss.every((item) => item.name)
console.log(name);

//-------------------------------------------------------------------------------
//mutliple array

const arrays =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let valu = arrays.every((arr) => Array.isArray(arr));

console.log("valu valu valu", valu);
