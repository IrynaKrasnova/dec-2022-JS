// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement(`div`);
div.classList.add(`wrap`,`collapse`, `alpha`, `beta`);
div.style.background = `silver`;
document.body.appendChild(div);
console.log(document);

