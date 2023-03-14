 let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let wrapper = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');
            // let button = document.createElement('button')
            let a = document.createElement('a');


            id.innerText = `${user.id}`;
            name.innerText = `${user.name}`;
            // button.innerText ='details';
            a.innerText = 'details';
            a.href = 'user-details.html?data=' + JSON.stringify(user);

            wrapper.classList.add('wrapper', 'item');
            id.classList.add('flex');
            name.classList.add('flex');
            a.classList.add('a');
            // button.classList.add('button');


            // button.onclick = function (){
            // location.href = 'user-details.html?data=' + JSON.stringify(user)
            // }

            wrapper.append(id,name,a);
            document.body.appendChild(wrapper);

        }
    })
