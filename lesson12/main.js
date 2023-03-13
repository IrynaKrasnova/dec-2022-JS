
let url = new URL('https://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let div = document.createElement('div');
            div.innerText = `${valueElement.id} ${valueElement.name}`;
            document.body.appendChild(div);
            
        }
    })
