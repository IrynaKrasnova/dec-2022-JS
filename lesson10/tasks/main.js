// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let form = document.forms.creator;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     const name = document.createElement('div');
//     const surname = document.createElement('div');
//     const age = document.createElement('div');
//
//     name.innerText = ` name: ${this.name.value}`;
//     surname.innerText = ` surname: ${this.surname.value}`;
//     age.innerText = ` age: ${this.age.value}`;
//
//
// creator.append(name,surname,age);
//    document.body.appendChild(creator);
// }

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let storinka = document.forms.pages;
storinka.onclick =function (e) {
    localStorage.getItem('pages')

}