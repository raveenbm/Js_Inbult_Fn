const pepole = [
    {
        name :"Rahul",
        age :18,
    },
    {
        name :"Rajiv",
        age :15,
    },
    {
        name :"Ramesh",
        age :30,
    },
]


const adults  = pepole.filter(person => person.age >= 18);

console.log("adults",adults);



// remove duplicate value

const numbers = [1,2,3,1,2,3,1,5,6,4,4]

const num = numbers.filter((item, index ,arr) => {

    return arr.indexOf(item) === index
});

console.log("Remove Duplicate Value", num);


