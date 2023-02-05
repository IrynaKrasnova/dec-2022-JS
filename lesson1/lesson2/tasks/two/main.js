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