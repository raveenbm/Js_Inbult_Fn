const numbers = [1,2,3,4,5];

const total = numbers.reduce(sum,0 );




// calback
function sum(accm , item , index , arr) {

    return accm + item;
}

console.log("total",total);

//-----------------------------------------------------------------------------------------------------------------------------

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

const totalValueStore = products.reduce((acc, item) => acc + item.price * item.count,0)

console.log("Total Value Store",totalValueStore);




const nestedArray =[
[1,2],
[3,4],
[5,6]

]



let overAll = nestedArray.reduce((accm ,value , index) => accm.concat({value , index}),[])

console.log("overALL" , overAll);
