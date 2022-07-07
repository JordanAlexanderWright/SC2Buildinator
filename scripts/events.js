let eventFigureTool = new figureCreator();

document.getElementById('getInputData').addEventListener('click', figureTool.getData);

// Getting the build order table then adding functionality to the delete button

document.getElementById('buildOrderTable').addEventListener('click', function(e){

    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.parentElement.remove();
    }
});

document.getElementById('formButton').addEventListener('click', makeFormFigure);

// This chunk adds functionality to the nav buttons and lets CSS animations happen

document.getElementById('raceSelector').addEventListener('click', (e) => {

    let navItems = document.getElementById('raceSelector')

    if(e.target.tagName !== 'A'){

    } else {

        if (e.target.classList.contains('notSelected')){

            // This for loop iterates over the navigation items, and changes all the 
            // items classes to be 'notSelected'
            for ( let i = 0; i < navItems.children.length; i++){
          
                if(navItems.children[i].children[0].children[0].classList.contains('selected')){
                    navItems.children[i].children[0].children[0].classList.replace('selected', 'notSelected');
    
                // If the element doesn't have a default class (selected for terran) then adds notSelected to make it
                // all work with this event listener 
                } if(navItems.children[i].children[0].children[0].classList == false){
                    navItems.children[i].children[0].children[0].classList.add('notSelected');
                }           
            }
    
            //Now changing the users input to be selected
            e.target.classList.replace('notSelected', 'selected');     
            
            // Changing the body class to allow for the page style to change with the race selection
            let bodyElement = document.getElementById('mainBody')
            bodyElement.classList.replace(bodyElement.classList[0], e.target.innerHTML.toLowerCase()) 
        }
    }
   
})