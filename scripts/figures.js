class figureCreator{

    constructor(){
        this.figureContainer = document.getElementById('counterContainer')
        this.terranUnits = ['scv', 'banshee', 'battlecruiser', 'cyclone', 'ghost', 'hellbat', 'hellion', 'liberator', 'marauder', 
        'marine', 'medivac', 'mule', 'raven', 'reaper', 'siegetank', 'thor', 'viking', 'widowmine'];
    }

    makeFigure(unitType, timerId) {

        let newFigure = document.createElement('figure');

        let figureImage = document.createElement('img');
        figureImage.src = `/resources/icons/units/${unitType}.png`

        let figureLabel = document.createElement('figcaption');
        figureLabel.innerHTML = `${unitType}`;

        let figureTimer = document.createElement('figcaption');
        figureTimer.innerHTML = 'Timer'
        figureTimer.id = timerId

        newFigure.append(figureImage);
        newFigure.append(figureLabel);
        newFigure.append(figureTimer)

        this.figureContainer.append(newFigure);

    }
    
    // This method validates the users input, and creates data from it if it's correct.

    figureDataHandling(){
        let userInput = document.getElementById('objectSelector').value.toLowerCase();
        let parsedInput = userInput.split(' ').join('');

        // Intializing my data object to be returned
        let creationData = {};

        // Check to see if the unit is actually a unit in the game
        if(this.terranUnits.includes(parsedInput)){

            console.log('its valid!');
            creationData[`whatToBuild`] = parsedInput;

        // This switch statement handles what category of thing is being built (unit, upgrade, building)
            switch(true) {
                case document.getElementById('unit').checked:
                    creationData[`type`] = document.getElementById('unit').value;
                    break;
                case document.getElementById('building').checked:
                    creationData[`type`] = document.getElementById('building').value;
                    break;
                case document.getElementById('upgrade').checked:
                    creationData[`type`] = document.getElementById('upgrade').value;
                    break;
            }

        } else {

            // If the object does not exist, creationData is returned as false so that the createCounter() function does not work. 
            console.log('Not a valid unit, try again');
            creationData = false;
        }

        return creationData;

    }

  
    getData(){

       
       let minutes = document.getElementById('minuteSelector').value;
       let seconds = document.getElementById('secondSelector').value;

       let time = `${minutes}:${seconds}`

       let supply = document.getElementById('supplySelector').value;
       let production = document.getElementById('objectSelector').value;

       let tableRow = document.createElement('tr');

       let productionData = document.createElement('td');
       productionData.innerHTML =  production;

       let supplyData = document.createElement('td');
       supplyData.innerHTML = supply

       let timeData = document.createElement('td');
       timeData.innerHTML = time;

       let deleteButton = document.createElement('td');
       let deleteLink = document.createElement('a');        
       deleteLink.href="#";
       deleteLink.innerHTML = "x"
       deleteLink.classList.add('deleteButton');

       deleteButton.append(deleteLink);

       // Creating an array of elements to iterate over + appending to new row

       let createdElements = [productionData, supplyData, timeData, deleteButton]

       console.log(createdElements.every(element => element === "asdf"))
       createdElements.forEach(element => console.log(typeof(element)));

    //    if (createdElements.forEach((element) => element){
    //         console.log('Nope, error')
    //    } else{
            
    //         createdElements.forEach((data) => tableRow.append(data))
        
    //         // appending new row to table

    //         document.getElementById('buildOrderTable').append(tableRow);
    //    }
    //    createdElements.forEach((data) => tableRow.append(data))
    
    }
}