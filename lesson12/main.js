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
            button.innerText ='details';

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
