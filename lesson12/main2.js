let url = new URL(location.href);
let json = url.searchParams.get('data');
let users = JSON.parse(json);



let block = document.createElement('div');
let id = document.createElement('h2');
let name = document.createElement('div');
let username = document.createElement('div');
let email = document.createElement('div');
let address = document.createElement('div');
let phone = document.createElement('div');
let website = document.createElement('div');
let company = document.createElement('div');


id.innerText =` ID: ${users.id}`;
name.innerText = `Name: ${users.name}`;
username.innerText = `Username: ${users.username}`;
email.innerText = `e-mail: ${users.email}`;
address.innerText = `Address: ${JSON.stringify(users.address)}`;
phone.innerText = `Phone: ${users.phone}`
website.innerText = `Website:${users.website}`;
company.innerText = `Company: ${JSON.stringify(users.company)}`;




block.append(id, name, username, email, address, phone, website, company);
document.body.appendChild(block);

let url2 = new URL('https://jsonplaceholder.typicode.com/posts');
fetch(url2)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {

            let a = document.createElement('a');
            a.innerText = `${post.title}`;
            a.href = 'post-details.html?data=' + JSON.stringify(post);
            a.style.display = 'block'



            block.appendChild(a)



        }

    })







// fetch(url2)
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//
//             let a = document.createElement('a');
//             a.innerText = `${post.title}`;
//             a.href = 'post-details.html?data=' + JSON.stringify(post);
//             a.style.display = 'block'
//
//
//
//             block.appendChild(a)
//
//
//
//         }
//
//     })




















    // .then(posts => {
    //     for (const post of posts) {
    //
    //         let a = document.createElement('a');
    //         a.innerText = 'post of current user';
    //         a.href = 'post-details.html?data=' + JSON.stringify(post);
    //         a.style.display = 'block'
    //
    //
    //
    //         block.appendChild(a)
    //
    //
    //
    //     }
    //
    // })



// url2.searchParams.getAll('userId')
// console.log(url2.searchParams.getAll(post['userId']))
// document.body.append(a)









// let url2 = new URL('https://jsonplaceholder.typicode.com/posts');
//
// fetch(url2)
//     .then(value => {
//             let url = new URL(location.href);
//     let json = url.searchParams.get('data');
//     let users = JSON.parse(json);
//
//
//
//     let block = document.createElement('div');
//     let id = document.createElement('h2');
//     let name = document.createElement('div');
//     let username = document.createElement('div');
//     let email = document.createElement('div');
//     let address = document.createElement('div');
//     let phone = document.createElement('div');
//     let website = document.createElement('div');
//     let company = document.createElement('div');
//
//
//     id.innerText =` ID: ${users.id}`;
//     name.innerText = `Name: ${users.name}`;
//     username.innerText = `Username: ${users.username}`;
//     email.innerText = `e-mail: ${users.email}`;
//     address.innerText = `Address: ${JSON.stringify(users.address)}`;
//     phone.innerText = `Phone: ${users.phone}`
//     website.innerText = `Website:${users.website}`;
//     company.innerText = `Company: ${JSON.stringify(users.company)}`;
//
//
//
// block.append(id, name, username, email, address, phone, website, company);
// document.body.appendChild(block);}
//     )
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//
//             let a = document.createElement('a');
//             a.innerText = 'post of current user';
//             a.href = 'user-details.html?data=' + JSON.stringify(post);
//
//
//
//
//             document.body.appendChild(a);
//         }
//
//     })



// let url2 = new URL('https://jsonplaceholder.typicode.com/posts');
//
// fetch(url2)
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//
//             let a = document.createElement('a');
//             a.innerText = 'post of current user';
//             a.href = 'user-details.html?data=' + JSON.stringify(post);
//
//
//
//
//             document.body.appendChild(a);
//         }
//
//     })
//
//     .then(value => {
//         let url = new URL(location.href);
//         let json = url.searchParams.get('data');
//         let users = JSON.parse(json);
//
//
//
//         let block = document.createElement('div');
//         let id = document.createElement('h2');
//         let name = document.createElement('div');
//         let username = document.createElement('div');
//         let email = document.createElement('div');
//         let address = document.createElement('div');
//         let phone = document.createElement('div');
//         let website = document.createElement('div');
//         let company = document.createElement('div');
//
//
//         id.innerText =` ID: ${users.id}`;
//         name.innerText = `Name: ${users.name}`;
//         username.innerText = `Username: ${users.username}`;
//         email.innerText = `e-mail: ${users.email}`;
//         address.innerText = `Address: ${JSON.stringify(users.address)}`;
//         phone.innerText = `Phone: ${users.phone}`
//         website.innerText = `Website:${users.website}`;
//         company.innerText = `Company: ${JSON.stringify(users.company)}`;
//
//
//
//         block.append(id, name, username, email, address, phone, website, company);
//         document.body.appendChild(block);}
//     )
//
//








// let url2 = new URL('https://jsonplaceholder.typicode.com/posts');
// fetch(url2)
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//
//             let a = document.createElement('a');
//             a.innerText = 'post of current user';
//             a.href = 'user-details.html?data=' + JSON.stringify(post);
//             a.style.display = 'block'
//
//
//
//             document.body.appendChild(a);
//         }
//
//     })




//     .then(value =>{
//         let url = new URL(location.href);
//     let json = url.searchParams.get('data');
//     let users = JSON.parse(json);
//
//
//
//     let block = document.createElement('div');
//     let id = document.createElement('h2');
//     let name = document.createElement('div');
//     let username = document.createElement('div');
//     let email = document.createElement('div');
//     let address = document.createElement('div');
//     let phone = document.createElement('div');
//     let website = document.createElement('div');
//     let company = document.createElement('div');
//     let a = document.createElement('a');
//
//     id.innerText =` ID: ${users.id}`;
//     name.innerText = `Name: ${users.name}`;
//     username.innerText = `Username: ${users.username}`;
//     email.innerText = `e-mail: ${users.email}`;
//     address.innerText = `Address: ${JSON.stringify(users.address)}`;
//     phone.innerText = `Phone: ${users.phone}`
//     website.innerText = `Website:${users.website}`;
//     company.innerText = `Company: ${JSON.stringify(users.company)}`;
//     a.innerText = 'post of current user';
//
//
//
// block.append(id, name, username, email, address, phone, website, company);
// document.body.appendChild(block);
// }
//     )






// const body = document.querySelector(`body`);

// for (const arrElement of users) {
//     const block = document.createElement('div');
//     const id = document.createElement('h1');
//     const name = document.createElement('h1');
//     // const email = document.createElement('div');
//     // const website = document.createElement('div');
//     // const ul = document.createElement('ul');
//
//     id.innerText = arrElement.id;
//     name.innerText=`${arrElement.name}`;
//
//     block.append(id);
//     body.append(block);
//
// }




// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фaйлом
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// const body = document.querySelector(`body`);
// for (const item of coursesArray) {
//     const block = document.createElement('div');
//   const title = document.createElement('h1');
//   const duration = document.createElement('div');
//   const month = document.createElement('div');
//   const hour = document.createElement('div');
//   const ul = document.createElement('ul');
//
//     title.innerText = item.title;
//   month.innerText = `monthDuration: ${item.monthDuration}`;
//   hour.innerText = `hourDuration: ${item.hourDuration}`;
//
//     for (const module of item.modules) {
//         const li = document.createElement(`li`);
//         li.innerText = module;
//         li.classList.add('blue', 'list-none');
//         ul.appendChild(li);
//     }
//
//     block.classList.add('main');
//   title.classList.add('text-center', 'blue');
//   duration.classList.add('flex');
//   month.classList.add('blue', 'text-center', 'grow1');
//   hour.classList.add('blue', 'text-center', 'grow5');
//   ul.classList.add('margin0', 'blue')
//
//   duration.append(month,hour);
//   block.append(title, duration, ul);
//   body.append(block)
// }


// const ul = document.createElement('ul');

// let addr = users.address;

// for (const addrElement of users.address) {
//     const li = document.createElement(`li`);
//     li.innerText=addrElement;
//     ul.appendChild(li);
// }



// const ul = document.createElement('ul');
// let address = document.createElement('div');

// for (const details of users.address) {
//     const li = document.createElement(`li`);
//     li.innerText = details;
//     ul.appendChild(li);
