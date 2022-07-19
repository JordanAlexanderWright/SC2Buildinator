class figureCreator{

    constructor(){
        this.figureContainer = document.getElementById('counterContainer');
        this.tableRowCounter = 1;        
    }

    makeFigure(productionName, timerId) {

        let newFigure = document.createElement('figure');
        newFigure.classList.add('showing');

        let figureImage = document.createElement('img');
        let productionType = dataManipulator.typeChecker(productionName)

        console.log(productionType);
    
        figureImage.src = `resources/icons/${productionType}/${productionName}.png`

        let figureLabel = document.createElement('figcaption');
        
        let displayName = dataManipulator.getDisplayName(productionName);

        figureLabel.innerHTML = `${displayName}`;

        let figureTimer = document.createElement('figcaption');
        figureTimer.innerHTML = '0';
        figureTimer.id = timerId;

        newFigure.append(figureImage);
        newFigure.append(figureLabel);
        newFigure.append(figureTimer);

        this.figureContainer.append(newFigure);
    }

    makeFormFigures = () =>{
        
        // Getting table parent container, the count for use later, and the items for iteration. 
        const buildItemContainer = document.getElementById('buildOrderBody');
        const buildItemCount = buildItemContainer.children.length;
        const buildItems = buildItemContainer.children;
    
        // Initializing a data object to hold all the data points
        let myData = {};
    
        // Loops through each build item and set their data into an object, for iteration. 
    
        for (let i = 0; i < buildItemCount; i++) {
            myData[i] = {
                'production': buildItems[i].children[0].innerHTML,
                'supply':  buildItems[i].children[1].innerHTML,
                'time': buildItems[i].children[2].innerHTML,
            }
        }
    
        // Iterating through each data point in my object I created
        for(let key in myData){
           
            // Taking the time data, and splitting it so it can be passed to time. + is the urnary operator, makes it a number. 
            let splitTime = myData[key]['time'].split(":");
    
            let minutes = +splitTime[0];
            let seconds = +splitTime[1];
    
            let production = myData[key]['production'];
            let parsedProduction = production.toLowerCase();
            parsedProduction = parsedProduction.split(' ').join('');
    
            let timeToBuildSeconds = (minutes * 60) + seconds
    
            let counterContainer = document.getElementById('counterContainer');
            let counterNumber = counterContainer.childElementCount;
    
            // Creating an object of the parsed data to be passed to worker 
            
            let creationData = {}
    
            creationData['timeToBuild'] = timeToBuildSeconds;
            creationData['whatToBuild'] = parsedProduction;
            creationData[`timerId`] = counterNumber + 1;
    
            // Creating the figure then starting the worker up
          
            if(creationData){
                figureTool.makeFigure(`${creationData[`whatToBuild`]}`, (counterNumber + 1))
                myWorker.postMessage(creationData);
            } else {
                console.log('please check your inputs');
            }
        }  
    }
}

