
let url = new URL(location.href);
let json = url.searchParams.get('data');
let users = JSON.parse(json);



let block = document.createElement('div');
let id = document.createElement('h4');
let name = document.createElement('div');
let username = document.createElement('div');
let email = document.createElement('div');
let address = document.createElement('div');
let phone = document.createElement('div');
let website = document.createElement('div');
let company = document.createElement('div');

block.classList.add('page2')




id.innerText =` ID: ${users.id}`;
name.innerText = `Name: ${users.name}`;
username.innerText = `Username: ${users.username}`;
email.innerText = `E-mail: ${users.email}`;
address.innerText = `Address: ${JSON.stringify(users.address)}`;
phone.innerText = `Phone: ${users.phone}`
website.innerText = `Website:${users.website}`;
company.innerText = `Company: ${JSON.stringify(users.company)}`;




block.append(id, name, username, email, address, phone, website, company);
document.body.appendChild(block);

let url2 = new URL('https://jsonplaceholder.typicode.com/posts');

// let url2 = new URL('https://jsonplaceholder.typicode.com/users/${userID}/posts');


fetch(url2)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {


            let postOfCurrentUser = document.createElement('button');
            // postOfCurrentUser.textContent = 'post of current user';
            postOfCurrentUser.innerText = `${post.title}`

            postOfCurrentUser.addEventListener('click', ()=>{

                location.href = 'post-details.html?id=' + JSON.stringify(post)
                // location.href=`post-details.html?id=${post.id}` + JSON.stringify(post)

                })

            postOfCurrentUser.classList.add('but2')
            block.appendChild(postOfCurrentUser)

        }

    })













