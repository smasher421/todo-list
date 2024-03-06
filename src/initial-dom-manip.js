import { mode } from "../webpack.config";
import { blankProjectLoad } from "./blank-project";


// //DOM manip to display UI components

// export function initialDomManip(){
//     const contentDiv = document.querySelector('.content');
//     const heading = document.createElement('h1');
//     heading.textContent = 'ToDo App';
//     contentDiv.appendChild(heading);


// //DOM for default project load
// const projectsInfoDiv = document.createElement("div");
// projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
// contentDiv.appendChild(projectsInfoDiv);

// }


//DOM Manip to display the UI components
export function displayDefaultProject(){
    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}



export function displayTheForm(){
   document.getElementById("add-todo-form").style.display = "";
}

export function addItemToChecklist(){

        const addItem = document.getElementById("add-to-checklist").value;

    //Run to check if input box is empty and the button was clicked
    //IF it is, return out of function -- do NOTHING
    //if not, apply contents to new LI in DOM
    if(addItem!== ""){
        const ul = document.querySelector('.todo-ul');
        const li = document.querySelector('li');
        li.textContent=addItem;
        const span = document.createElement('span');
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";



        //DOM check for existing check list items already present
        if(document.querySelectorAll("li").length>0){
            console.log("INSIDE MODULE iF....", document.querySelectorAll("li").length);
            const nodeListChecklist = document.querySelectorAll("li");
            console.log(nodeListChecklist);

            //DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListChecklist.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist(){
                    checkListItem.remove();
                });
            })
        }
    }
    else return;
}

export function clearForm(){
    const nodeListChecklist = document.querySelectorAll("li");
    for(let i=0; i < nodeListChecklist.length; i++)
    {
        nodeListChecklist.remove();
    }
    document.getElementById("add-todo").reset();
}


export function displayToDo(){
    //check and clear the current display DOM 
    const removeDivs = document.querySelectorAll(".card");
    console.log("Show the node count of current card divs....", removeDivs);
    for(let i=0;i<removeDivs.length;i++){
        removeDivs[i].remove();
    }

    //create display card for the display DOM
    console.log("display to screen");
    const projects = document.querySelector(".projects");
    const card = document.createElement('div');
    card.classList.add("card");
    projects.appendChild(card);


    //gather data from local backend storage

    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let Checklist = localStorage.getItem("Checklist");

    //place data in local temp array and loop over key value pairs and display to DOM

    let _displayArray = {Title, Description, DueDate, Priority, Checklist};

    console.log(_displayArray);

    for(let key in _displayArray){
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }

}