//create an array for Todo, if needed

let toDoArray = [];


//factory function to create todo list

export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
    console.log("Called createToDo module... creating module");
    console.log({Title, Description, DueDate, Priority, Checklist});


    toDoArray.push({Title, Description, DueDate, Priority, Checklist});
    console.log(toDoArray);
    return{
        Title, Description, DueDate, Priority, Checklist
    };
}