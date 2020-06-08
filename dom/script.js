console.log(document);


// get an element by it's id
const todoList = document.getElementById('todo-list');
// console.log(todoList);

// returns an html collection - can be treated like an array, but is not an array -> you can't
// use array methods
const allListItems = document.getElementsByTagName('li');

console.log(allListItems[2]);

// you can convert an html collection to an array
// [...allListItems].forEach(function (el) {
//     console.log(el);
// });

// 
// Array.from(allListItems).forEach(function (el) {
//     console.log(el);
// });


allListItems[2].innerText = 'solve katas';

// turn all list items to uppercase
for (let item of allListItems) {
    item.innerText = item.innerText.toUpperCase();
}

// get an element by it's class
// const container = document.getElementsByClassName('todo-container');

// console.log(container[0]);

// Select elements using a query selector


// selects all elements using a css selector - returns a node list
const container = document.querySelectorAll('.todo-container');

// console.log(container);

// a more complex query using an id
const firstItem = document.querySelector('#todo-list li');

console.log(firstItem);

// change the style of an element
// firstItem.style.backgroundColor = 'red';
// firstItem.style['backgroundColor'] = 'red';

// adds to the class / classes
// firstItem.classList.add('checked');

// firstItem.classList.remove('b');

// toggles a class of an element
firstItem.classList.toggle('checked');

// setting an attribute
firstItem.setAttribute('id', 'first-item');

const attribute = firstItem.getAttribute('id');
console.log(attribute);

// console.log(attribute);
// firstItem.removeAttribute('id');
document.querySelector('img').setAttribute(
    'src',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2478&q=80'
)

// adding an element to the dom - in that case a heading
const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
const parentElement = document.querySelector('.todo-container');
console.log(parentElement);

parentElement.insertBefore(heading, todoList);

// let's use javascript to remove the paragraph
const paragraph = document.getElementsByTagName('p')[0];
parentElement.removeChild(paragraph);

// create a new list item
const newListItem = document.createElement('li');

// we can also add html to an element
// newListItem.innerHTML = 'watch <strong>Dark Season 3</strong>';

// append it to the dom
// todoList.appendChild(newListItem);

// now we want to do that dynamically

// onclick in html: 
// <input type="text" id="todo-item"><button id="add-todo" onclick="trigger()">Add a Todo</button>



document.getElementById('add-todo').onclick = addTodo;


function addTodo() {
    console.log('add todo works');
    const newTodo = document.createElement('li');
    const input = document.querySelector('input');
    // console.log(input.value);
    // don't use innerHTML here to prevent -> xss / html injection
    // we could add that to the form if we use innerHTML: <img src='x' onerror='alert(1)'>
    // https://en.wikipedia.org/wiki/Cross-site_scripting
    newTodo.innerText = input.value;
    const parent = document.getElementById('todo-list');
    parent.appendChild(newTodo);
    newTodo.onclick = toggleTodo;
    input.value = '';
}



// add an onclick listener on all elements of the list to toggle the todo
document.querySelectorAll('#todo-list li').forEach(function (item) {
    console.log('running loop');
    item.onclick = toggleTodo;
});

function toggleTodo(event) {
    // console.log('toggle todo');
    console.log(event.currentTarget);
    event.currentTarget.classList.toggle('checked')
}