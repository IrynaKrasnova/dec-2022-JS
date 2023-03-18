let url = new URL(location.href);
let json = url.searchParams.get('id');
let posts = JSON.parse(json);


let block2 = document.createElement('div');
let title = document.createElement('div');
let userId = document.createElement('div');
let Id = document.createElement('div');
let body = document.createElement('div');

title.innerText = `Title: ${posts.title}`;
userId.innerText = `UserId: ${posts.userId}`;
Id.innerText = `Id: ${posts.id}`
body.innerText = `Body: ${posts.body}`;

block2.classList.add('page3')
title.classList.add('page3item')
userId.classList.add('page3item')
Id.classList.add('page3item')
body.classList.add('page3item')




block2.append(title,userId,Id,body);
document.body.appendChild(block2);




