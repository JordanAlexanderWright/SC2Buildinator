// Creating a worker, and a figure handler from my figure class in figures.js

const myWorker = new Worker('worker.js');
let figureTool = new figureCreator();
const terranUnits = ['scv', 'banshee', 'battlecruiser', 'cyclone', 'ghost', 'hellbat', 'hellion', 'liberator', 'marauder', 
                    'marine', 'medivac', 'mule', 'raven', 'reaper', 'siegetank', 'thor', 'viking', 'widowmine']


// this Sets up what will happen when I recieve data from my worker
myWorker.onmessage = function(message){
   
    // The object selectors here are a custom object that I am making, using the event. data is where the
    // Information from the worker is passed, as an object, and then I select what pieces I want

    document.getElementById(message['data']['id']).innerHTML = message['data']['count'];

    if (message['data']['count'] === 10){
        console.log('needs to be removed');
        setTimeout(() => document.getElementById(message['data']['id']).parentElement.remove(), 5000);
    }
}

myWorker.onerror = function(e){
    console.log(e);
}

// function checkRadio(){
//     if(document.getElementById('unit').checked){
//         console.log('unit is checked');
//         console.log(document.getElementById('building').checked)
//         console.log(document.getElementById('unit').value);
//     } else if (document.getElementById('building').checked){
//         console.log('Building is checked');
//     }
// }

// document.getElementById('objectSelector').addEventListener(`click`, (e) => console.log(e.target.value))

// creationData = {'type':'unit', 'whatToBuild': 'marine', 'time', '25seconds'}

function counterCreate(){
    let counterContainer = document.getElementById('counterContainer');
    let counterNumber = counterContainer.childElementCount;

    let creationData = {};
    creationData['whatToBuild']= document.getElementById('objectSelector').value

    switch(true) {
        case document.getElementById('unit').checked:
            console.log('yepppp');
            creationData[`type`] = document.getElementById('unit').value ;
            break;
        case document.getElementById('building').checked:
            creationData[`type`] = document.getElementById('building').value
            break;
        case document.getElementById('upgrade').checked:
            creationData[`type`] = document.getElementById('upgrade').value
            break;
    }

    console.log(creationData);
    console.log(creationData['whatToBuild']);
    // I'm using counter number to be able to count the number of counters that are in the collection
    // I then use that number to assign an id to the counter so that I can pass that to my worker to manipulate it. 

    // Creating the figure, then starting the worker up. SCV is a placeholder, will be manipulated later

    figureTool.makeFigure(`${creationData[`whatToBuild`]}`, (counterNumber + 1))
    // figureTool.makeFigure('SCV', (counterNumber + 1));
    // sendMessage((counterNumber + 1))
}

// Sends the ID of the timer to manipulate over to the Web Worker

function sendMessage(id){
    myWorker.postMessage(id)
}

// Placeholder button for testing 

const makeCounterButton = document.getElementById('makeCounter')
makeCounterButton.addEventListener('click', counterCreate);

// Test code
let today = new Date();

console.log(today.getTime())

let startTime = today.getTime()
let seconds = 10
let miliSeconds = seconds * 1000

endTime = startTime + miliSeconds

console.log(startTime, endTime);

// This is a test function that I am going to be using to set the workers into motion. This will check the timing over and over again until 
// It is time for the worker to pass data back to the main application script. 
// const myTest = setInterval(function(){

//     if ((new Date().getTime()) < endTime){
//         console.log('continuing');
//         console.log(new Date().getTime());
//     } else if ((new Date().getTime()) >= endTime){
//         console.log('Success');
//         clearInterval(myTest);
//     }
// }, 100)



let testData = {
    '1': {'unit': 'scv', 'time': '00:05'},
    '2': {'unit': 'scv', 'time': '00:20'}
}

// document.getElementById(`test`).addEventListener(`click`, checkRadio);

console.log(testData['1'])
console.log(Object.keys(testData));

let someData = (Object.keys(testData));

