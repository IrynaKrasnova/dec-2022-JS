// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

//
// let s = 'hello world';
// console.log(s.length);
// let s1 = 'lorem ipsum';
// console.log(s1.length);
// let s2 = 'javascript is cool';
// console.log(s2.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let s = `hello world, lorem ipsum, javascript is cool`;
// let big = s.toUpperCase();
// console.log(big);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let s = `HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL`;
// let small = s.toLowerCase();
// console.log(small)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let s = ' dirty string   ';
// let clean = s.split(` `)
// console.log(clean)
// s.substring(0,[3,4,5])
// console.log(s)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(` `);
// console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// arr.map( value => console.log(arr.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let ascending = nums.sort((a,b)=>a-b);
// console.log(ascending);
// let descending = nums.sort((a,b)=>b-a);
// console.log(descending);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration-a.monthDuration
// });
// console.log(coursesAndDurationArray);

// console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));

// console.log(coursesAndDurationArray.map((item, index) => ({
//     ...item, id: index  +1
// })));









