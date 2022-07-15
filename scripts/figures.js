class figureCreator{

    constructor(){
        this.figureContainer = document.getElementById('counterContainer');
        this.terranUnits = ['scv', 'banshee', 'battlecruiser', 'cyclone', 'ghost', 'hellbat', 'hellion', 'liberator', 'marauder', 
                            'marine', 'medivac', 'mule', 'raven', 'reaper', 'siegetank', 'thor', 'viking', 'widowmine'];
        this.terranBuildings = ['armory', 'barracks', 'bunker', 'commandcenter', 'engineeringbay', 'factory', 'fusioncore', 'ghostacademy', 
                                'missleturret', 'orbitalcommand', 'reactor', 'refinery', 'sensortower', 'starport', 'supplydepot',
                                'techlab'];
        this.terranUpgrades = ['placeholder'];
        this.tableRowCounter = 1;
    }

    // A simple checker to see if the production is a valid input
    typeChecker(productionName){
        if (this.terranUnits.includes(productionName)){
            return 'units';
        } if (this.terranBuildings.includes(productionName)){
            return 'buildings';
        } if (this.terranUpgrades.includes(productionName)){
            return 'upgrades';
        } else {
            return false;
        }
    }

    makeFigure(productionName, timerId) {

        let newFigure = document.createElement('figure');
        newFigure.classList.add('showing');

        let figureImage = document.createElement('img');
        let productionType = this.typeChecker(productionName)
        console.log(productionType);
        figureImage.src = `resources/icons/${productionType}/${productionName}.png`

        let figureLabel = document.createElement('figcaption');
        figureLabel.innerHTML = `${productionName}`;

        let figureTimer = document.createElement('figcaption');
        figureTimer.innerHTML = 'Timer';
        figureTimer.id = timerId;

        newFigure.append(figureImage);
        newFigure.append(figureLabel);
        newFigure.append(figureTimer);

        this.figureContainer.append(newFigure);

    }

    addTableData(parsedProduction, minutes, seconds, supply) {

        let formValues = [parsedProduction, minutes, seconds, supply]
        if (formValues.every(value => value !== "") && this.typeChecker(parsedProduction)){

            let time = `${minutes}:${seconds}`;
            let tableRow = document.createElement('tr');

            // Counter to be able to access this data by it's class. 
            tableRow.id = `tableRow-${this.tableRowCounter + 1}`;
            console.log(tableRow.id);

            let productionData = document.createElement('td');
            productionData.innerHTML =  parsedProduction;            
            productionData.classList.add('production');

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

            let createdElements = [productionData, supplyData, timeData, deleteButton];
            createdElements.forEach((data) => tableRow.append(data));

            // appending new row to table

            createdElements.forEach((data) => tableRow.append(data));
            document.getElementById('buildOrderBody').append(tableRow);            
            
        } else {
            alert(`There's a problem with your form values.`);
        }
    }

    fromJson = (data) =>{

        // Getting the player 1 data
     
        let build1 = data['build']
    
        for(let x in build1){
            
            let production = build1[x][0]
            let minutes = Math.floor(build1[x][1] / 60)
            let seconds = build1[x][1] % 60
            let supply = build1[x][2]
            
            let parsedProduction = production.toLowerCase().split(' ').join('');
            
            // Check to see if the production is an add on, and fixing the format if so
            // Also fixing supplydepot (can be read as supplydepotlowered)

            if(parsedProduction.includes('techlab')){
                parsedProduction = 'techlab'
            } 
            
            if (parsedProduction.includes('reactor')) {
                parsedProduction = 'reactor'
            } 

            if(parsedProduction.includes('lowered')){
                parsedProduction = 'supplydepot'
            }
            
            console.log('adding to table')
            this.addTableData(parsedProduction, minutes, seconds, supply);
            
        }
    }
    
    
    // Method needs to be defined like this in order to have access to this.properties
    // This methods gets the data from the user form, then passes it to add to table
    getData = () => {

       //Getting the values of all elements
       let minutes = document.getElementById('minuteSelector').value;
       let seconds = document.getElementById('secondSelector').value;
       let supply = document.getElementById('supplySelector').value;
       let production = document.getElementById('objectSelector').value;

       let parsedProduction = production.split(' ').join('');

       console.log('trying');
       this.addTableData(parsedProduction, minutes, seconds, supply)

    }
}
