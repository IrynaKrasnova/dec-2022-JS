// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let users = [
//     {name: 'vasya', age: 31},
//     {name: 'petya', age: 30},
//     {name: 'kolya', age: 29},
//     {name: 'olya', age: 28},
//     {name: 'max', age: 30},
//     {name: 'anya', age: 31},
//     {name: 'oleg', age: 28},
//     {name: 'andrey', age: 29},
//     {name: 'masha', age: 30},
//     {name: 'olya', age: 35},
//     {name: 'nina', age: 38},
//     {name: 'lena', age: 41},
//     {name: 'oleg', age: 25},
//     {name: 'katya', age: 29},
//     {name: 'sima', age: 30},
//     {name: 'julia', age: 40},
//     {name: 'senya', age: 25},
//     {name: 'omar', age: 39},
//     {name: 'sam', age: 42},
//     {name: 'nick', age: 37},
// ];
// let i = 0;
// while (i<users.length) {
//     document.write(`
//     <h1>${users[i].name} - ${users[i].age}</h1>
//     `);
// i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users = [
    {name: 'vasya', age: 31, modules: ['html', 'css', 'js', 'mysql', 'git', 'java core', 'java advanced']},
    {name: 'petya', age: 30, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'kolya', age: 29, modules: ['html', 'css', 'js', 'mysql',  'docker', 'git', 'java core', 'java advanced']},
    {name: 'olya', age: 28, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'max', age: 30, modules: ['html', 'css',  'git', 'java core', 'java advanced']},
    {name: 'anya', age: 31, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'oleg', age: 28, modules: ['html', 'css', 'java core', 'java advanced']},
    {name: 'andrey', age: 29, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'masha', age: 30, modules: ['html', 'css', 'java core', 'java advanced']},
    {name: 'olya', age: 35, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'nina', age: 38, modules: ['html', 'css', 'java advanced']},
    {name: 'lena', age: 41, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'oleg', age: 25, modules: ['html', 'css', 'js', 'java core', 'java advanced']},
    {name: 'katya', age: 29, modules: ['html', 'css', 'js',  'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'sima', age: 30, modules: ['html', 'css', 'js', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']},
    {name: 'julia', age: 40, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular',  'java core', 'java advanced']},
    {name: 'senya', age: 25, modules: ['html', 'css', 'js', 'mysql', 'java advanced']},
    {name: 'omar', age: 39, modules: ['html', 'css', 'js', 'mysql', 'java core', 'java advanced']},
    {name: 'sam', age: 42, modules: ['html', 'css', 'js', 'mysql',  'java core', 'java advanced']},
    {name: 'nick', age: 37, modules: ['html', 'css', 'js', 'java advanced']},
];

let i = 0;

do {
    document.write(`<h1>${users[i].name} - ${users[i].age}</h1>`);
    document.write('<ul>');
    for (const module of users[i].modules) {
        document.write(`<li>${module}</li>`)
        
    }
        document.write(`</ul>`);

i++;
}
while (i<users.length)

