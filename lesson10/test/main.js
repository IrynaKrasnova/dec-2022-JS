let url = new URL('https://jsonplaceholder.typicode.com/users');


fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let wrapper = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');
            let button = document.createElement('button')


            id.innerText = `${user.id}`;
            name.innerText = `${user.name}`;
            // a.innerText ='details';
            // a.href = 'post.html?data=' + JSON.stringify(user);


            wrapper.classList.add('wrapper', 'item');
            id.classList.add('flex');
            name.classList.add('flex');
            button.classList.add('button');


            button.onclick = function (){
                location.href = 'user-details.html?data=' + JSON.stringify(user)
            }

            wrapper.append(id,name,button);
            document.body.appendChild(wrapper);

        }
    })











// fetch(url)
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             let div = document.createElement('div');
//             div.classList.add('post-item')
//             let a = document.createElement('a');
//             a.innerText = `${post.id} ${post.title}`;
//             a.href = 'post.html?data=' + JSON.stringify(post);
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//
//
//     });



//
// fetch(url)
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//             let wrapper = document.createElement('div');
//             let id = document.createElement('div');
//             let name = document.createElement('div');
//             let button = document.createElement('button')
//
//
//             id.innerText = `${user.id}`;
//             name.innerText = `${user.name}`;
//             button.innerText ='details';
//
//             wrapper.classList.add('wrapper', 'item');
//             id.classList.add('flex');
//             name.classList.add('flex');
//             button.classList.add('button');
//
//
//             button.onclick = function (){
//                 location.href = 'user-details.html?data=' + JSON.stringify(user)
//             }
//
//             wrapper.append(id,name,button);
//             document.body.appendChild(wrapper);
//
//         }
//     })