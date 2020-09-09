var button = document.getElementById('enter')
var input = document.getElementById("user-input");
var ul = document.querySelector('ul')
var li = document.getElementsByClassName('item-todo');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}


/* events */
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);
li.addEventListener('click', function(){
    console.log('item clickeado');
})