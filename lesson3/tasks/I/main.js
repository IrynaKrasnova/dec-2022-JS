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
    {
        name: 'Leanne Graham',
        username: 'Bret',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        name: 'Ervin Howell',
        username: 'Antonette',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        name: 'Clementine Bauch',
        username: 'Samantha',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        name: 'Patricia Lebsack',
        username: 'Karianne',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        name: 'Glenna Reichert',
        username: 'Delphine',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
for (let i = 0; i < usersList.length; i++) {
    document.write(`
    <div>
    <h2>${usersList[i].name} - ${usersList[i].username}</h2>
    </div>`
    );
}

// for (let usersListElement of usersList) {
//
//     let company = usersListElement.company;
//     console.log(company);
//     for (let companyElement of company) {
//         console.log(company);
//     }
// }