import {compareAsc, format, parseISO, startOfToday} from 'date-fns';
import { clearForm } from './initial-dom-manip';
import { node } from 'webpack';
import { saveToDoLocal } from './manage-local-storage';


// //create an array for Todo, if needed

// let toDoArray = [];


// //factory function to create todo list

// export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
//     console.log("Called createToDo module... creating module");
//     console.log({Title, Description, DueDate, Priority, Checklist});


//     toDoArray.push({Title, Description, DueDate, Priority, Checklist});
//     console.log(toDoArray);
//     return{
//         Title, Description, DueDate, Priority, Checklist
//     };
// }


let toDoArray = [];

//factory function to create todo list

export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority");

    //check to see if empty fields exist

    if(Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description and Due Date are required fields. Try again!");
    }

    //check to see if pre-date was entered 
    if(parseISO(DueDate) < startOfToday()){
        alert("You have entered a date that predates the current day. Please try again!");
        console.log("due date", parseISO(DueDate));
        console.log("Date now: ", startOfToday());
        return;
    }

    // Loop over nodelist for checklist items from the DOM + Formatting to string

    const nodeListChecklist = document.querySelectorAll("li");
    let checkListArray = [];
    for(let i=0;i<nodeListChecklist.length; i++)
    {
        //strip off the x from each list item and push to temp array
        let strippedCheckList = nodeListChecklist[i].textContent.replace('\u00D7', '');
        checkListArray.push(strippedCheckList);
    }
    
    //Strip off the checklist array and convert to string with commas
    let checkList = checkListArray.join(', ');

    console.log("Called createToDo Module...creating todo now");
    console.log({Title, Description, DueDate, Priority, checkList});
    console.log(toDoArray);

    //reset the form after successful submission
    clearForm();


    return{
        Title,
        Description,
        DueDate,
        Priority,
        checkList
    };


    //call storage module and push object to local storage
    saveToDoLocal({
        Title,
        Description,
        DueDate,
        Priority,
        checkList
    });

    //reset the form after successful submission
    clearForm();


    return{
        Title,
        Description,
        DueDate,
        Priority,
        checkList
    };
}