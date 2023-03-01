// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement("div");
// div.innerText = `Hello`
// document.body.appendChild(div);
// div.classList.add(`wrap`,`collapse`, `alpha`, `beta`);
// div.style.background = `silver`;
// div.style.color = `red`;
// div.style.fontSize = `200px`;
//
// document.body.appendChild(div.cloneNode(true));


// - Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr = ['Main','Products','About us','Contacts'];
// let ul = document.createElement(`ul`)
// document.body.appendChild(ul);
//
// for (const items of arr) {
//     let li = document.createElement(`li`);
//     li.innerText = `${items}`;
//     document.body.appendChild(li);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let userBlock = document.createElement(`div`);
//
//     let title = document.createElement(`h2`);
//     title.innerText = `${coursesAndDurationArrayElement.title}`;
//
//     let months = document.createElement(`p`);
//     months.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//
//     userBlock.append(title, months);
//     document.body.appendChild(userBlock);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let userBlock = document.createElement('div');
//     userBlock.classList.add('item');
//     userBlock.style.background = 'blue';
//     userBlock.style.marginBlock = `5px`;
//
//     let title = document.createElement('h1');
//     title.innerText = `${coursesAndDurationArrayElement.title}`;
//     title.classList.add('heading');
//     title.style.color = 'red';
//
//     let p = document.createElement('p');
//     p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//     p.classList.add('description')
//
//     userBlock.append(title,p);
//     document.body.appendChild(userBlock);
// }
