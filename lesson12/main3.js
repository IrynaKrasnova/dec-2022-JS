let url = new URL(location.href);
let json = url.searchParams.get('data');
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

block2.append(title,userId,Id,body);
document.body.appendChild(block2);





