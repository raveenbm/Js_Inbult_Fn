// it will alter original array
// it is used to fill the value
// three arguments value(which need to filled) , start , end based on this value will be filled

let numbers = [1,2,3,4,5];
let numb = [1,2,3,4,5];
const num2 = numbers.fill(0);

console.log(numbers);
console.log(num2);

let val = numb.fill(0,1,4);

console.log(val);

//we can create a fn 

function fillinNumb(n) {
return Array(n).fill(0).map((a,ind) => ind +1)
}

console.log('fillinNumbfillinNumb', fillinNumb(10));





