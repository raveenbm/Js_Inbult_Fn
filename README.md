# Js_Inbult_Fn
Trying to decode the JS input functionality and its usage.

###
In built functions in javascripts are callback functions it consist of 3 arguments as item , index , arr


| Feature      | for Loop	                                | forEach Loop                              |
|--------------|--------------------------------------------|--------------|---------------------------
| Syntax       | for (let i = 0; i < array.length; i++)         | array.forEach(function(element) {...})|
| Async Handling   | Can use async/await inside the loop	    | Does not handle async/await correctly|
| Flexibility	| Very flexible, can manipulate the counter or iterate in any manner |Less flexible, for simple, straightforward iteration|
| Use Case   | Ideal for complex iterations, conditional logic, early exit	    | Best for simple iteration, when you don't need to break or continue|
| Performance	| Slightly faster for large arrays |May have some overhead due to function calls|


forEach : perform operations in a single aaray

ArrayMap : 
array map method used to perform action in multiple object in a single array
    - MAp used to change data type of a value

filter : removes the falsy value
    - used to remove duplicates




