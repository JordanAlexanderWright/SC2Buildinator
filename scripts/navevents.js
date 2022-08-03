// Since these objects are used several times, getting them and setting as variables. 

const jsonField = document.getElementById('fromJson');
const manualSelector = document.getElementById('manualSelector')
const userInputs = document.getElementById('userInputs');
const jsonSelector = document.getElementById('jsonSelector')

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
            
            //Changing the racestate and re initializing what data sets are being used. 
            raceState = e.target.innerHTML.toLowerCase();
            dataManipulator = new dataHandler(raceState);
            
            // Changing the body class to allow for the page style to change with the race selection
            let bodyElement = document.getElementById('mainBody')
            bodyElement.classList.replace(bodyElement.classList[0], e.target.innerHTML.toLowerCase()) 
        }
    }
   
})

// Animation handling for the input types (manual or JSON)

manualSelector.addEventListener('click', function(e){
  
    if (jsonField.classList.contains('hide')){
        
    } else {
        jsonField.classList.add('hide');
        userInputs.classList.remove('hide');
        userInputs.style.display = 'grid';
        manualSelector.style.borderBottom = 'solid 1px';
        jsonSelector.style.removeProperty('border-bottom')
    }
});


jsonSelector.addEventListener('click', function(e){
    let userInputs = document.getElementById('userInputs');

    if (userInputs.classList.contains('hide')){
        
    } else {
        userInputs.classList.add('hide');
        jsonField.classList.remove('hide');
        jsonField.style.display = 'flex';
        jsonSelector.style.borderBottom = 'solid 1px';
        manualSelector.style.removeProperty('border-bottom');
    }

});

jsonField.addEventListener('animationend', () => {
    jsonField.style.display = 'none'
})

userInputs.addEventListener('animationend', () => {
    userInputs.style.display = 'none'
})