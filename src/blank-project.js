export const blankProjectLoad = () => {
    console.log('Called blank module....creating blank project array now');
    let projectsArray = [];
    console.log('pushing the title name of this project to the array . . .');
    let projectTitle = 'Default Project';
    projectsArray.push({projectTitle});
    console.log(projectsArray);
    return {
        projectsArray,
        projectTitle
    };
}