import _ from 'lodash';
import { createToDo } from './createTodo';
import { blankProjectLoad } from './blank-project';
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from './initial-dom-manip';
import './styles.css';
//call DOM manipulation on first bootup
blankProjectLoad();

//Click events Module
let clickEventsModule = (function(){
    
    //click event for displaying the form
    const addnewToDo = document.querySelector('.add-todo-button');
    addnewToDo.addEventListener("click", displayTheForm);

    //Click event for adding an item to the checklist form
    const addToCheckList = document.querySelector('.add-to-checklist');
    addToCheckList.addEventListener("click", addItemToChecklist);


    //Click event to clear the form
    const clearButton = document.querySelector('.reset-button');
    clearButton.addEventListener("click", clearForm);

})();

//call createTodo.js and apply some objects with properties

const myTodo = createToDo("Groceries", "Get Groceries", "6/23/2024", "Low", "Yes");
const myTodo2 = createToDo("HOmework", "Odin", "6/23/2024", "Low", "Yes");

console.log("Show me properties on mytoDo from index.js ....", myTodo);
console.log("show me properties on myToDo2 from index.js. .. .. .", myTodo2);