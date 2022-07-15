// Creating a worker, and a figure handler from my figure class in figures.js

const myWorker = new Worker('scripts/worker.js');
let figureTool = new figureCreator();

// this Sets up what will happen when I recieve data from my worker
myWorker.onmessage = function(message){
   
    // The object selectors here are a custom object that I am making, using the event. data is where the
    // Information from the worker is passed, as an object, and then I select what pieces I want

    document.getElementById(message['data']['id']).innerHTML = message['data']['count'];

    // Deletes the figure if the counter is completed, after 5 seconds. 
    
    if (message['data']['count'] >= message['data']['timeToBuild']){
            document.getElementById(message['data']['id']).parentElement.classList.add('goAway')
            setTimeout(() => document.getElementById(message['data']['id']).parentElement.remove(), 5000);
    }
}

myWorker.onerror = function(e){
    console.log(e);
}

function makeFormFigure(){
  
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
    for(key in myData){
       
        // Taking the time data, and splitting it so it can be passed to time. + is the urnary operator, makes it a number. 
        splitTime = myData[key]['time'].split(":");

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

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

let jsonEntryBox = document.getElementById('jsonEntry');
let jsonButton = document.getElementById('jsonButton');


function importJson(){

    let importData = jsonEntryBox.value;

    if (isJsonString(importData)){
        try {
            importData = JSON.parse(importData)
            figureTool.fromJson(importData)
        } catch {
            alert('Something Went Wrong')
        }
    }  
}
jsonButton.addEventListener('click', importJson);

let jsonData ;

jsonEntryBox.addEventListener('click', function(e){
    jsonData = e.target.value;
    console.log(e.target)
    console.log(jsonData);  
    console.log(isJsonString(jsonData));
    } 
)



async function getJson(){

    const response = await fetch('../resources/icons/testjson.json')
    const data = await response.json();

    return data[0]
}

// let myObject = getJson()
//     myObject.then(data => figureTool.fromJson(data))
