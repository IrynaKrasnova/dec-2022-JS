// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter day');
if (day >0 && day<=10) {
    console.log('I');
} else if (day >11 && day<=20) {
    console.log('II');
} else if (day >21 && day<=31) {
    console.log('III');
} else {
    console.log('error');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).