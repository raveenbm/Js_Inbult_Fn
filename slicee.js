let number = [1,2,3,4,5,6];

//start and end value given
let num1 = number.slice(1,5);
console.log('Two Parametes',num1);

//if we pass negative number then it will start from last
let num2 = number.slice(-3);
console.log("Reverse value", num2);

// if we need to start from position and need to continues till end
let num3 = number.slice(1);
console.log("starts from", num3);

//List the first 3 winners from array
const participants = ["Ram","Rahul","Ragu","john","peter"]
const winner = participants.slice(0,3);
console.log("Winners", winner);


