// Your code goes here
const newP = document.querySelector('#text');
// console.log(newP)
document.addEventListener('DOMContentLoaded', loaded);

function loaded () {
    document.querySelector('p').textContent = 'This is really cool!';
}

console.log(loaded)