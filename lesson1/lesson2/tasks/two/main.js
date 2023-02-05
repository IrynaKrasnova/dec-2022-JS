// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books={
    book1: {
        title: 'The Little Prince',
        pageCount: 112,
        genre: 'fairy-tale',
        authors: [
            {name:'Antoine de Saint-Exupery'},
            {age: 42}
        ]
    },
    book2: {
        title: 'Little Women',
        pageCount: 416,
        genre: 'novel',
        authors: [
            {name:'Louisa May Alcott'},
            {age: 36}
        ]
    },
    book3: {
        title: 'The Picture of Dorian Gray',
        pageCount: 224,
        genre: 'fantasy',
        authors: [
            {name:'Oscar Wilde'},
            {age: 36}
        ]
    }
}
console.log(books);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

users=[ {name:'Irina', username: 'one', password: 'ooo'},
    {name:'Artem', username: 'two', password: 'sss'},
    {name:'Olga', username: 'three', password: 'yyy'},
    {name:'Julia', username: 'four', password: 'rpr'},
    {name:'Volodymyr', username: 'five', password: 'hhh'},
    {name:'Alex', username: 'six', password: 'pppp'},
    {name:'Oleg', username: 'seven', password: 'ffffff'},
    {name:'Jane', username: 'eight', password: 'ddd'},
    {name:'Irene', username: 'nine', password: 'uuu'},
    {name:'Eva', username: 'ten', password: 'ccc'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
