class dataHandler{

    constructor(race){
        this.tableRowCounter = 1;
        this.dataInit(race)
      
    }

    dataInit = (race) =>{
       
        switch (race){

            case 'terran':
                this.units = terranUnits;
                this.buildings = terranBuildings;
                this.upgrades = terranUpgrades;
                break

            case 'protoss':
                this.units = protossUnits;
                this.buildings = protossBuildings;
                this.upgrades = protossUpgrades;                
                break

            case 'zerg':
                this.units = zergUnits;
                this.buildings = zergBuildings;
                this.upgrades = zergUpgrades;              
                break          
        }
        
    }
    // A simple checker to see if the production is a valid input
    typeChecker = (parsedProduction) => {
        if (Object.keys(this.units).includes(parsedProduction)){
            return 'units';
        } if (Object.keys(this.buildings).includes(parsedProduction)){
            return 'buildings';
        } if (Object.keys(this.upgrades).includes(parsedProduction)){
            return 'upgrades'
        } else {
            return false;
        }
    }

    isJson = (importedData) => {
        try {
            JSON.parse(importedData);
        } catch (e) {
            return false;
        }
        return true;
    }

    getDisplayName = (type, parsedProduction) =>{

        let displayName;

        switch(type){
            case 'units':
                displayName = this.units[parsedProduction];             
                break;
            case 'buildings':
                displayName = this.buildings[parsedProduction];
                break;
            case 'upgrades':
                displayName = this.upgrades[parsedProduction];
                break;
        }        
        
        return displayName
    }

    addTableData(parsedProduction, minutes, seconds, supply) {

        let formValues = [parsedProduction, minutes, seconds, supply]

   
        if (formValues.every(value => value !== "") && this.typeChecker(parsedProduction)){

            let time = `${minutes}:${seconds}`;
            let tableRow = document.createElement('tr');

            // Counter to be able to access this data by it's class. 
            tableRow.id = `tableRow-${this.tableRowCounter + 1}`;

            let productionData = document.createElement('td');

            let productionType = this.typeChecker(parsedProduction)

            // Giving the table Data a display name, and then adding the parsed production as a value for later use. 

            productionData.innerHTML =  this.getDisplayName(productionType, parsedProduction);     
            productionData.value = parsedProduction;       
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
            console.log(parsedProduction)
            console.log('There is a problem with the data');
        }
    }

    fromJson = (data) =>{
        if (data['race'] !== raceState){
            alert('Please make sure you have selected the correct race')
        } else {
            
            let confirmation = confirm('This action will overwrite any data already on the table, do you want to proceed?');
            // Getting the player 1 data
            
            if (confirmation){

                this.clearTable();
                let build1 = data['build'];
        
                for(let x in build1){
                    
                    let production = build1[x][0];
                    let minutes = Math.floor(build1[x][1] / 60);
                    let seconds = build1[x][1] % 60;
                    let supply = build1[x][2];
                    
                    let parsedProduction = production.toLowerCase().split(' ').join('');
                    
                    // Check to see if the production is an add on, and fixing the format if so
                    // Also fixing supplydepot (can be read as supplydepotlowered)
        
                    if(parsedProduction.includes('techlab')){
                        parsedProduction = 'techlab';
                    } 
                    
                    if (parsedProduction.includes('reactor')) {
                        parsedProduction = 'reactor';
                    } 
        
                    if(parsedProduction.includes('lowered')){
                        parsedProduction = 'supplydepot';
                    }
        
                    this.addTableData(parsedProduction, minutes, seconds, supply);
                }
            }
            
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

       let parsedProduction = production.split(' ').join('').toLowerCase();

       this.addTableData(parsedProduction, minutes, seconds, supply)

    }

    clearTable = () => {

        let tableData = document.getElementById('buildOrderBody').children;
        for (let index = tableData.length - 1 ; index >= 0; index--){
            tableData[index].remove();
        }
    }
}

