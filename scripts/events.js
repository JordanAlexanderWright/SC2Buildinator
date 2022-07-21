document.getElementById('getInputData').addEventListener('click', dataManipulator.getData);

// Getting the build order table then adding functionality to the delete button

document.getElementById('buildOrderTable').addEventListener('click', function(e){

    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.parentElement.remove();
    }
});

document.getElementById('formButton').addEventListener('click', figureTool.makeFormFigures);

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

// Json input related events

// Getting all the elements to manipulate

const jsonField = document.getElementById('fromJson');
const userInputs = document.getElementById('userInputs');
const jsonEntryBox = document.getElementById('jsonEntry');
const jsonButton = document.getElementById('jsonButton');
const manualSelector = document.getElementById('manualSelector')
const jsonSelector = document.getElementById('jsonSelector')

// Animation handling for the input types

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

// Importing jsondata function

function importJson(){

    let importData = jsonEntryBox.value;

    if (dataManipulator.isJson(importData)){
        try {
            importData = JSON.parse(importData);
            dataManipulator.fromJson(importData);
        } catch(err) {
            console.log(err);
            alert(`There's a problem with your JSON data`);
        }
    }  
}

jsonButton.addEventListener('click', importJson);

// This allows a user to see what units are available to them to build. Helps with manual input
function showBuildItems(){

    if(document.querySelector('.buildItemDisplay')){
        
        document.querySelector('.buildItemDisplay').remove()

    } else {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('buildItemDisplay');
    
        let unitDisplay = document.createElement('ul');
        unitDisplay.classList.add('unitDisplay');
    
        for(const key in dataManipulator.units){
            let listElement = document.createElement('li');
            listElement.innerHTML = dataManipulator.units[key];
            unitDisplay.appendChild(listElement);
        }
    
        let buildingDisplay = document.createElement('ul');
        buildingDisplay.classList.add('buildingDisplay');
    
        for(const key in dataManipulator.buildings){
            let listElement = document.createElement('li');
            listElement.innerHTML = dataManipulator.buildings[key];
            buildingDisplay.appendChild(listElement);
        }
    
        let upgradeDisplay = document.createElement('ul');
        upgradeDisplay.classList.add('upgradeDisplay');
    
        for(const key in dataManipulator.upgrades){
            let listElement = document.createElement('li');
            listElement.innerHTML = key;
            upgradeDisplay.appendChild(listElement);
        }    
    
        itemContainer.appendChild(unitDisplay);
        itemContainer.appendChild(buildingDisplay);
        itemContainer.appendChild(upgradeDisplay);
    
        const figureWrapper = document.getElementById('figureWrapper')
        figureWrapper.parentElement.insertBefore(itemContainer, figureWrapper);
    }
   
}
document.getElementById('showBuildItems').addEventListener('click', showBuildItems);