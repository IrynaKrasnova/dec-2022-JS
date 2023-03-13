
let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let wrapper = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');
            let button = document.createElement('button')


            id.innerText = `${valueElement.id}`;
            name.innerText = `${valueElement.name}`;
            button.innerText ='details';

            wrapper.classList.add('wrapper', 'item');
            id.classList.add('flex');
            name.classList.add('flex');
            button.classList.add('button');

            // button.onclick = function (){
            //
            // }





            // div.style.border = `5px solid darkred`;
            // div.style.marginBlock=`5px`;
            // div.style.background = `silver`;


            wrapper.append(id,name,button);
            document.body.appendChild(wrapper);

        }
    })
