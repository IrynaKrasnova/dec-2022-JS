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
            a.href = 'post-details.html?id=' + JSON.stringify(post);
            a.style.display = 'block'



            block.appendChild(a)



        }

    })


