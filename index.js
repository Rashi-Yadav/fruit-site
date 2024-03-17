
editButton();

//Add fruit in list, for that add eventListener to the form
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fruitToAdd = document.querySelector('#fruit-to-add');
  const descToAdd = document.querySelector('#desc-to-add');

  //Create new list and set attributes
  const newLi = document.createElement('li');
  newLi.setAttribute('class', 'fruit');

  //We can use innerHTML to reduce the lines of code
  //Adding text(taken from user input), delete and edit button
  newLi.innerHTML =
    fruitToAdd.value +
    '<p style="font-style:italic" class="fruit-desc">' +
    descToAdd.value +
    '</p>' +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';


  //Append our created list in the fruits list.
  const fruits = document.querySelector('.fruits');
  fruits.appendChild(newLi);

  //Clear input area after the 'Add' button clicked
  document.getElementById('fruit-to-add').value = '';
  document.getElementById('desc-to-add').value = '';
});

//Delete fruits from list
const fruits = document.querySelector('.fruits');
fruits.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDel = event.target.parentElement;
    fruits.removeChild(fruitToDel);
  }
});

// Create a filter that shows only those fruits whose either name or description matches the entered text
const search = document.getElementById('filter');
search.addEventListener('keyup', function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');
  const fruitDesc = document.getElementsByClassName('fruit-desc');
  for (let i = 0; i < fruitItems.length; i++) {
    const curFruit = fruitItems[i].firstChild.textContent.toLowerCase();
    const curDesc = fruitDesc[i].firstChild.textContent.toLowerCase();
    if (
      curFruit.indexOf(textEntered) === -1 &&
      curDesc.indexOf(textEntered) === -1
    ) {
      fruitItems[i].style.display = 'none';
    } else {
      fruitItems[i].style.display = 'block';
    }
  }
});

//Create edit button inside the fruit list
function editButton() {
  const fruitItems = document.getElementsByClassName('fruit');
  for (let i = 0; i < fruitItems.length; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'edit-btn');
    const textFor_button = document.createTextNode('Edit');
    button.appendChild(textFor_button);
    fruitItems[i].appendChild(button);
  }
}

