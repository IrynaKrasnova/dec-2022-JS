// let arr = [11, 22, 33, 44, 55, 66, 77, true];
// // console.log(Array.isArray(arr));
// let number = arr.push('asdfhas');
// console.log(arr);
//
// console.log(arr, number);
// let pop = arr.pop();
// console.log(arr, pop);
// //
// arr.unshift('asdasd');
// console.log(arr);
// let shift = arr.shift();
// console.log(shift);
// console.log(arr);
// //
//
//
// // let x = 'asdqwezxc';
// // x.splice(2, 2);
// // console.log(x);
//
// let slice = arr.slice(1, 4);
// console.log(slice);
//
// let concat = arr.concat([[123, 123, 123], 234, 345]);
// console.log(arr);
// console.log(concat);
//
// // console.log(arr.reverse());
// // console.log(arr);
// console.log(arr.indexOf(true));
//
// console.log('asd111asd'.includes('111'));
// console.log(arr.includes(true));



// callbacks


//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


// users.forEach((u, index, array) => {
//     delete u.status;
//     console.log(u);
// });

// function foreachCustom(arr, callback) {
//     for (const item of arr) {
//         callback(item);
//     }
// }
//
// foreachCustom(users, (u) => console.log(u))


// let filter = users.filter(u => !u.status);
// console.log(filter);
// console.log(users === filter);
// console.log(users[0] === filter[0]);

// let map = users.map((value, index) => {
//     return {name: value.name, age: value.age, status: value.status, id: index + 1};
//
// });
// console.log(map);
// console.log(map === users);

// let find = users.find(value => value.age === 31);
// console.log(find);

// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));


let nums = [123, -23432, 0, 34, 1, -17];
let sort = nums.sort((a, b) => a - b);
console.log(sort);


// let sort = users.sort((a, b) => {
//     return b.age - a.age;
// });
// console.log(sort);


// console.log(users.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name > b.name) {
//         return 1
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// }));
//
// console.log('abce' > 'abcd');


// let nums = [11, 22, 33, 44, 55, 66, 77, 88, 99]; // -> {even : [22,44,66,88],odd : [11,33,55,77]}

// let reduce = nums.reduce(
//     (accumulator, value) => {
//         if (value % 2 === 0) {
//             accumulator[0].push(value);
//         } else {
//             accumulator[1].push(value);
//         }
//         return accumulator;
//     },
//
//     [[], []]
// );
//
//
// console.log(reduce);


// console.log(nums.reduce((acc, value) => {
//     return acc + value;
// }, 0));


// let usersWithChecks = [
//     {name: 'vasya', check: 31, status: false},
//     {name: 'petya', check: 30, status: true},
//     {name: 'kolya', check: 29, status: true},
//     {name: 'olya', check: 28, status: false},
//     {name: 'max', check: 30, status: true},
//     {name: 'anya', check: 31, status: false},
//     {name: 'oleg', check: 28, status: false},
//     {name: 'andrey', check: 29, status: true},
//     {name: 'masha', check: 30, status: true},
//     {name: 'olya', check: 31, status: false},
//     {name: 'max', check: 31, status: true}
// ];
//
//
// let reduce = usersWithChecks
//     .map(value => value.check)
//     .reduce((acc, value) => acc + value, 0);
// console.log(reduce);