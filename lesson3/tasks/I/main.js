// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let locations = [
//     {title: "м. Київ", type: "city"},
//     {title: "Житомирська область", type: "oblast"},
//     {title: "Харківська область", type: "oblast"},
//     {title: "Вінницька область", type: "oblast"},
//     {title: "Чернігівська область", type: "oblast"},
//     {title: "Дніпропетровська область", type: "oblast"},
//     {title: "Черкаська область", type: "oblast"},
//     {title: "Волинська область", type: "oblast"},
//     {title: "Київська область", type: "oblast"},
//     {title: "Миколаївська область", type: "oblast"},
// ];
// for (let i=0; i<locations.length; i++){
//     document.write(`
//     <div>
//         <h2>${locations[i].title}
//         - ${locations[i].type}</h2>
//     </div>`
//     );
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


let usersList= [
    {name: 'Leanne Graham', username: 'Bret', modules: ['html', 'css', 'js', 'mysql', 'git', 'java core', 'java advanced']},
    {name: 'Ervin Howell', username: 'Antonette',modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'Clementine Bauch', username: 'Samantha', modules: ['html', 'css', 'java core', 'java advanced']},
    {name: 'Patricia Lebsack', username: 'Karianne', modules: ['html', 'css', 'js', 'mysql', 'java advanced']},
    {name: 'Chelsey Dietrich', username:'Maxime', modules: ['html', 'css', 'js', 'mysql', 'java core', 'java advanced']},
    {name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', modules: ['html', 'css', 'js', 'mysql',  'java core', 'java advanced']},
    {name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', modules: ['html', 'css',  'git', 'java core', 'java advanced']},
    {name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow',modules: ['html', 'css', 'js', 'java core', 'java advanced']},
    {name: 'Glenna Reichert', username: 'Delphine', modules: ['html', 'css', 'js', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'Clementina DuBuque', username: 'Moriah.Stanton', modules: ['html', 'css', 'java advanced']},
];

for (let i = 0; i < usersList.length; i++) {
    const base = usersList[i];
    document.write(`<div>
            name: ${usersList[i].name} , username: ${usersList[i].username}
</div>`)
    {
        let modules = base.modules;

        for (let j = 0; j < modules.length; j++) {
            const module = modules[j];}
        {
            document.write(`<div>
            modules: ${usersList[i].modules}
</div>`)
        }

    }

}



