// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//
// let square = (a,b)=>a*b;
// console.log(square(5,10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let S = (r)=>3.14*r*r;
// document.write(S(50));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cylinderS = (h,r)=>(2*3.14*r)*(r+h);
// console.log(cylinderS(10,20));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let usersList= [
//     {name: 'Leanne Graham', username: 'Bret'},
//     {name: 'Clementine Bauch', username: 'Samantha'},
//     {name: 'Patricia Lebsack', username: 'Karianne'},
//     {name: 'Chelsey Dietrich', username:'Maxime'},
// ];
// let array = usersList.filter((item)=>{
//     return item.name, item.username;
// });
// console.log(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (words) => `${words}`;
// console.log(paragraph(`hello`));

 // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let li = (title,one,two,three)=>
//     `<h3>${title}</h3>
//     <ul>
//     <li>${one}</li>
//     <li>${two}</li>
//  <li>${three}</li>
// </ul>`;
// document.write(li(`something`,`ppp`,`ooo`,`nnn`));


// - створити функцію яка створює ul з li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let liN = (text, num)=> {
//     document.write(`<ul>`);
//
//     for (let i = 0; i < num; i++) {
//             document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
//     }
// document.write(liN(`I try :(`, 5))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) =>{
//     let something = 0;
//     for (let arrElement of arr) {
//         something = something+arrElement;
//     }
// return something
// }
// document.write(sum([1,2,10]))


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = (arr2) =>{
//     document.write(`<ul>`);
//     for (let arr2Element of arr2) {
//         document.write(`<li>${arr2Element}</li>`);
//     }
// document.write(`</ul>`);
// }
// document.write(list([1,2,`hi`, true]))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//
// let swap = (arr,index1,index2) =>{
//   let a = arr[index1];
//   let b = arr[index2];
//   arr[index1]=b;
//   arr[index2]=a;
// }
// document.write(swap([1,2],1,2))


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let container = (obj) =>{
//
//     for (let objElement of obj) {
//         document.write(`<div>${objElement.id} ${objElement.name} ${objElement.age}</div>`)
//
//     }
//     return objElement;
// }

document.write(container([ {name:'Irina', id: 'one', age: 31}]))

// - створити функцію яка повертає найменьше число з масиву

// let Min = (arr3) =>{
//     let x = arr3[0];
//     for (let number of arr3) {
//         if (x > number){
//             x = number
//         }
//     }
//     return x
// }
// document.write(Min([-100, 5]))