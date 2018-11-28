let article1 = document.querySelector('#article1'); 
let article2 = document.querySelector('#article2'); 





document.querySelector('#message').addEventListener('keyup', function (event) {
    article1.innerHTML = event.target.value;
    article2.innerHTML = event.target.value;

})