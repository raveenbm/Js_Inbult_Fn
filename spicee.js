// Splice methos is not the best method to use 
//But using splice method we can remove value from array directly and we can insert a value in array at any position
//storing splice() in avariable it will give the deleted value
//In splice second arguments indicates how many element should be deleted


const numbers = [1,2,3,4,5];
let deleteval = numbers.splice(2,3);

//it will print the latest array value after removing
console.log("new array ", numbers);

//it will pring the deleted value
console.log("deleted value", deleteval);

//we are going to insert a value without removing any value
    numbers.splice(1,0,7,8,9)
console.log(numbers);

//we are going to insert a value with removing any value

numbers.splice(2,2,10,11,12)
console.log(numbers);



