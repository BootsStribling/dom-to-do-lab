// console.log('sanity check');




//*----------------------CACHED ELEMENT REFERENCES---------------------------*/
const title = document.querySelector('h1');

const inp = document.querySelector('#inp');

const addToDo = document.querySelector('#submit-button');

const toDoList = document.querySelector('#todo-list');

const reset = document.querySelector('#reset-button');


//*----------------------EVENT LISTENERS-------------------------------------*/



//addToDo Button
addToDo.addEventListener('click', function (evt){
  if(inp.value === ''){
    alert('Please type a To-Do')
  }else{
  //create a new li element
  let newLi = document.createElement('li','#items')
  //value of input text = to new li element
  newLi.innerText = inp.value
  //reset text in the input field to empty string
  inp.value = '';
  //add the new li to html inside ul
  toDoList.appendChild(newLi)
  }
});

// reset Button
reset.addEventListener('click', function(evt){
  toDoList.innerHTML = null;
  inp.placeholder = 'Your To-do Here'
})

//delete li on click Button
toDoList.addEventListener('click', function(evt) {
  const ul = evt.target.parentNode
  ul.removeChild(evt.target)
})


