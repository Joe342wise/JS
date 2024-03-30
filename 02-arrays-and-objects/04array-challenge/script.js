//  Challeng 1
let x;

const arr = [1 , 2 , 3 , 4, 5];

x = arr;

x = arr.push(6);

x = arr;

x = arr.reverse();

x = arr;

console.log(x);


// Challenge 2
let arr3;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.splice(4, 1);

arr3 = [...arr1,...arr2];

console.log(arr3);

