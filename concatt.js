// It is usec to merge two array
//It will not change a original array
// iT will take a copy in reference variable that array and manipulate that array

let a = [1,2,3];
let b = [4,5,6];

// mergin two array
let c = a.concat(b);

console.log("The value of C", c);

// merging more than one array
let d = [7,8,9];
let e = a.concat(b,d);
console.log("The Value of E is", e);

// We can do shallow copy of an array using concat
let f = a.concat();
console.log("The value of a is", a);
// after shallow copy we can do push a new elemnt the old array will remains same
 f.push(9)
console.log("The value of f is", f);

// we can make concat method as push mehtod also we can add number and array
let g = a.concat(10,11,b,12);
console.log("The value of G is", g);





