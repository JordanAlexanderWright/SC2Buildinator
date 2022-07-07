class figureCreator{

    constructor(){
        this.figureContainer = document.getElementById('counterContainer');
        this.terranUnits = ['scv', 'banshee', 'battlecruiser', 'cyclone', 'ghost', 'hellbat', 'hellion', 'liberator', 'marauder', 
        'marine', 'medivac', 'mule', 'raven', 'reaper', 'siegetank', 'thor', 'viking', 'widowmine'];
        this.tableRowCounter = 1;
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

        let timeToBuild = 12;
        // Check to see if the unit is actually a unit in the game
        if(this.terranUnits.includes(parsedInput)){

            console.log('its valid!');
            creationData[`whatToBuild`] = parsedInput;
            creationData[`timeToBuild`] = timeToBuild;

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

    // Method needs to be defined like this in order to have access to this.properties. 
    getData = () => {

       //Getting the values of all elements
       let minutes = document.getElementById('minuteSelector').value;
       let seconds = document.getElementById('secondSelector').value;
       let supply = document.getElementById('supplySelector').value;
       let production = document.getElementById('objectSelector').value;

       let parsedProduction = production.split(' ').join('');

       //Putting values into an array for validation
       let formValues = [minutes, seconds, supply, parsedProduction]

       // If all entries contain a value + the production object is valid, continue. Else throw an error
       if (formValues.every(value => value !== "") && this.terranUnits.includes(parsedProduction)){

            let time = `${minutes}:${seconds}`;
            let tableRow = document.createElement('tr');

            // Counter to be able to access this data by it's class. 
            tableRow.id = `tableRow-${this.tableRowCounter + 1}`
            console.log(tableRow.id);

            let productionData = document.createElement('td');
            productionData.innerHTML =  production;            
            productionData.classList.add('production')

            let supplyData = document.createElement('td');
            supplyData.innerHTML = supply;
            supplyData.classList.add('supply');

            let timeData = document.createElement('td');
            timeData.innerHTML = time;
            timeData.classList.add('time');

            let deleteButton = document.createElement('td');
            let deleteLink = document.createElement('a');        
            deleteLink.href="#";
            deleteLink.innerHTML = "x"
            deleteLink.classList.add('deleteButton');

            deleteButton.append(deleteLink);

            // Creating an array of elements to iterate over + appending to new row

            let createdElements = [productionData, supplyData, timeData, deleteButton]

        //    console.log(createdElements.every(element => element === "asdf"))
        //    createdElements.forEach(element => console.log(typeof(element)));


            createdElements.forEach((data) => tableRow.append(data))

            // appending new row to table

            createdElements.forEach((data) => tableRow.append(data))
            document.getElementById('buildOrderBody').append(tableRow);            
            
        } else {
            alert(`There's a problem with your form values.`)
        }
    } 

}