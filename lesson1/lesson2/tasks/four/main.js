// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('enter day');
// if (day >0 && day<=10) {
//     console.log('I');
// } else if (day >11 && day<=20) {
//     console.log('II');
// } else if (day >21 && day<=31) {
//     console.log('III');
// } else {
//     console.log('error');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let schedule = +prompt('day of the week (1-7)');
// switch (schedule) {
//     case 1:
//         document.write('Sunday');
//         break;
//     case 2:
//         document.write('Monday');
//         break;
//     case 3:
//         document.write('Tuesday ');
//         break;
//     case 4:
//         document.write('Wednesday');
//         break;
//     case 5:
//         document.write('Thursday');
//         break;
//     case 6:
//         document.write('Friday');
//         break;
//     case 7:
//         document.write('Saturday');
//         break;
//     default:
//         document.write('error');
// }

// // - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('enter you number 1');
// let number2 = +prompt('enter you number 2');
// if (number1 > number2){
//     document.write(number1);
// } else if (number1<number2){
//     document.write(number2);
// }else if (number1===number2){
//     document.write('equal');
// } else {
//     document.write('error')
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = undefined;
// x = x || 'default';
// console.log(x);
