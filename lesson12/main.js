
let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let wrapper = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');



            id.innerText = `${valueElement.id}`;
            name.innerText = `${valueElement.name}`;

            wrapper.classList.add('wrapper', 'item');
            id.classList.add('flex');
            name.classList.add('flex');








            // div.style.border = `5px solid darkred`;
            //
            //
            //
            //
            // div.style.marginBlock=`5px`;
            // div.style.background = `silver`;


            wrapper.append(id,name)
            document.body.appendChild(wrapper);

        }
    })
