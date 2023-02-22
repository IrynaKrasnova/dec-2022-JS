let arr = [11, 22, 33, 44, 55, 66, 77, true];
console.log(Array.isArray(arr));
let number = arr.push('asdfhas');
console.log(arr, number);
let pop = arr.pop();
console.log(arr, pop);

arr.unshift('asdasd');
console.log(arr);
let shift = arr.shift();
console.log(shift);
console.log(arr);

let splice = arr.splice(2, 2, 'asd');
console.log(arr);
console.log(splice);

// let x = 'asdqwezxc';
// x.splice(2, 2);
// console.log(x);

let slice = arr.slice(1, 4);
console.log(slice);

let concat = arr.concat([[123, 123, 123], 234, 345]);
console.log(arr);
console.log(concat);

// console.log(arr.reverse());
// console.log(arr);
console.log(arr.indexOf(true));

console.log('asd111asd'.includes('111'));
console.log(arr.includes(true));