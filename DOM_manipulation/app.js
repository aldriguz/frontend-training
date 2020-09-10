var button = document.getElementById('enter')
var input = document.getElementById("user-input");
var ul = document.querySelector('ul')
var span_items = document.querySelectorAll('span');
var button_remove_items = document.querySelectorAll('.button-remove');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var button_remove = document.createElement('button');
    button_remove.classList.add("button-remove");
    button_remove.appendChild(document.createTextNode("Quitar"));
    button_remove.addEventListener('click', removeListElement);

    var span = document.createElement('span');
    span.addEventListener('click', toggleDoneClassItem);
    span.appendChild(document.createTextNode(input.value));
    
    var li = document.createElement('li');
    li.appendChild(span);
    li.appendChild(button_remove);
    
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

function toggleDoneClassItem(){
    // console.log(this);
    this.classList.toggle('done');
}

function removeListElement(){
    //remove element
    this.parentElement.remove();
}

/* events */
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);
// li.addEventListener('click', toggleDoneClassItem);
span_items.forEach(element => {
    element.addEventListener('click', toggleDoneClassItem);
});
//add event to all already created remove buttons
button_remove_items.forEach(element => {
    element.addEventListener('click', removeListElement);
});
