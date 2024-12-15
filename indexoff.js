// by searching a name we can find the index of that elment
// if we want to replace thaht element we can replace that with new element
//If there is duplicate of elemnts is present also it will return the first element index of the array

let names =['muthu','rave','eendran' ,'rave'];


// indexof() will return first elemnt ofsearch if it match
let value = names.indexOf("rave");

console.log("Index Of", value);

// indexof() if we search a invalid value then it will return -1 (false)
let value1 = names.indexOf("kumar");
console.log("value1", value1);

// lastIndexOf() will return last elemnt of search if it match

let value2 = names.lastIndexOf("rave");
console.log("value1", value2);




