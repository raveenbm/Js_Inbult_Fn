

/* 
    * forEach function is used to perform a operation using single array
    *  3 inbuilt parameter @value , @index , @array 
*/ 


/* 
    Below program for sum of array value 
 */

const numbers = [1,2,3,4,5];
let sum=0;

    numbers.forEach((item ,index , arr) => {
        sum += item;        
    }); 
    console.log("Total value of array is",sum);




/* 
    Find the duplicate character inthe given array    
*/
    
    let letters =['a','b','a','b','c','d','a'];
    let count ={};

    letters.forEach((item , index ,arr) => {
        if(count[item]) {
           count[item]++;
        } else {
            count[item] =1;
        }


    }); 

    console.log(count);



    


