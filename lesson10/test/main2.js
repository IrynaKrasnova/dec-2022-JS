let url = new URL(location.href);
let json = url.searchParams.get('data');
let post = JSON.parse(json);
console.log(post);
