// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x>0) {
    console.log('true');
} else if (x<0) {
    console.log('true');
} else {
    console.log('false');}

let a = 0;
if (a>0) {
    console.log('true');
} else if (a<0) {
    console.log('true');
} else {
    console.log('false');}

let b = -3;
if (b>0) {
    console.log('true');
} else if (b<0) {
    console.log('true');
} else {
    console.log('false');}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter you time');
if (time<=15) {
    console.log('quarter I');
} else if (time<=30) {
    console.log('quarter II');
} else if (time<=45) {
    console.log('quarter III');
} else if (time<=59) {
    console.log('quarter IV');
} else {
    console.log('error');}



