let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let wrapper = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');

            id.innerText = `${user.id}`;
            name.innerText = `${user.name}`;


            let details = document.createElement('button');
            details.textContent = 'details';


            details.addEventListener('click',()=>{
                location.href = 'user-details.html?data='+JSON.stringify(user)
            })

            id.appendChild(details);
            wrapper.append(id,name);
            document.body.appendChild(wrapper);
        }
    })