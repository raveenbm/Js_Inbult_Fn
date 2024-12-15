// create a new array with all the sub arrays elemnts concated with
// by default value will be 1 if we want of go further inised an array we need to mention value

const arr = [1,[2,[3,[4]]]];

    const res = arr.flat();
    const res2 = arr.flat(2);
    const res3 = arr.flat(Infinity);

    console.log("res res res res",res);
    console.log("res res res res2",res2);
    console.log("res res res res3",res3);
    