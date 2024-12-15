// sort is used for numbers in an array

let num = [74,1,23,4,98,198,22,67];

//Array sort method is used to sort an array in ascending or descending order


//sort in ascending order
let value1 = num.sort((a,b) =>  a-b);
console.log("value1",value1);


//sort in descending order
let value2 = num.sort((a,b) =>  b-a);
console.log("value1",value2);
