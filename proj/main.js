let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let wrapper = document.createElement('div');
            let client = document.createElement('div');
            client.innerText = `${user.id} - ${user.name}`;

            wrapper.classList.add('wrapper');
            client.classList.add('item');

            let details = document.createElement('button');
            details.textContent = 'details';
            details.classList.add('but');

            details.addEventListener('click',()=>{

                location.href = 'user-details.html?data='+JSON.stringify(user)
                // location.href = `user-details.html?id=${user.id}`+JSON.stringify(user)

            })


            client.appendChild(details);
            wrapper.append(client);
            document.body.appendChild(wrapper);
        }
    })