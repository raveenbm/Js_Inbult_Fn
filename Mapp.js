

// callback functions

const numbers = [1,2,3,4,5,6];



let output = numbers.map(multiple);

function multiple(item , index , arr) {
        return item * 3
}

console.log("output" , output);

//---------------------------------------------------------------------------------------------------------------------------------------------------

const products = [
    {
        name :"Rahul",
        price :"1000",
        count :"4",   
    },
    {
        name :"Rajiv",
        price :"2000",
        count :"2",   
    },
    {
        name :"Ramesh",
        price :"6000",
        count :"3",   
    },
]

let total = products.map((item) => ({

    // console.log("Product Price", item.price);
    name : item.name,
    price : item.price

}));

console.log("Total", total);

//-------------------------------------------------------------------------------------------------------------------------------------------------

// To Change data type we can use map 

const numb  = [1,2,3,4,5,6]

// let k = numb.map(item => String(item) )
let k =numb.map(String);

console.log("k",'',k);






