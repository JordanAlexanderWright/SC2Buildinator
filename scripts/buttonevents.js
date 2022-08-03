// Manual Import Event

document.getElementById('getInputData').addEventListener('click', dataManipulator.getData);

// Getting the build order table then adding functionality to the delete button

document.getElementById('buildOrderTable').addEventListener('click', function(e){

    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.parentElement.remove();
    }
});

// Starting the Build Event

document.getElementById('formButton').addEventListener('click', figureTool.makeFormFigures);

// Json input related events
// Importing jsondata function

function importJson(){

    let importData = document.getElementById('jsonEntry').value;

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

document.getElementById('jsonButton').addEventListener('click', importJson);

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