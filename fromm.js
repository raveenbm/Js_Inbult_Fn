// create a new shallow copy array  from an array lile or itteratable object
// converting a string into array afterwat we can able change its data type


// Type 1
const str= '12345';

let numbers = Array.from(str, mapFn)

function mapFn(item) {
    return Number(item)
}

console.log("Numbers Numbers Numbers",numbers);

// Type 2

const strr= '12345';

let numberss = Array.from(strr, (x) => Number(x) )

console.log("Numbers Numbers Numberssss",numberss);

// Type 3

const strrr= '12345678';

let numbersss = Array.from(strr, Number)

console.log("Numbers Numbers Numberssss",numbersss);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Remove duplicated values in array 
const numss  =[1,2,3,4,132,1,2,3,4,5,6,7,3,5,6];

    const nval = Array.from(new Set(numss));

    console.log("nvalnvalnvalnvalnval",nval);
    
