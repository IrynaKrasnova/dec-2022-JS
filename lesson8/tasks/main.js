// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//
// let users  = [
//     new User(`111`, `Sonya`, `Krasnik`, `sonya.ksn@gmail.com`, 380501770547),
//     new User(`2`, `Alex`, `Pol`, `pol.s@ukr.net`, 380995478677),
//     new User(`333`, `Anna`, `Bin`, `anna.bin@gmail.com`, 380661769549),
//     new User(`4`, `Jane`, `Perry`, `j.p@gmail.com`, 380661769777),
//     new User(`5`, `Ivan`, `Simon`, `sim.p@gmail.com`, 380661769777),
//     new User(`66`, `Sue`, `Top`, `s.p@gmail.com`, 380661769777),
//     new User(`7`, `Kate`, `Prey`, `k.p@gmail.com`, 380661769888),
//     new User(`8`, `Nick`, `Kim`, `n.p@gmail.com`, 380661769999),
//     new User(`9`, `Jack`, `Perry`, `j.p@gmail.com`, 380661769666),
//     new User(`10`, `Rem`, `Perry`, `r.p@gmail.com`, 380661769555),
]
// console.log(users)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//
// let filter = users.filter(u =>
//     u.id%2===0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = users.sort((a, b) =>{
//     return a.id - b.id;
// });
// console.log(sort)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {


    constructor(id, name, surname , email, phone, order) {
        this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
    }

}