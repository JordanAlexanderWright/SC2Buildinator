// Creating a worker, and a figure handler from my figure class in figures.js

const myWorker = new Worker('worker.js');
document.getElementById('makeCounter').addEventListener('click', createCounter);
let figureTool = new figureCreator();
const terranUnits = ['scv', 'banshee', 'battlecruiser', 'cyclone', 'ghost', 'hellbat', 'hellion', 'liberator', 'marauder', 
                    'marine', 'medivac', 'mule', 'raven', 'reaper', 'siegetank', 'thor', 'viking', 'widowmine'];
                
// Prevent default behavior of input field 
document.getElementById('objectSelector').addEventListener(`keydown`, function(e){
    if( e.key === 'Enter'){
        console.log('hello');
        e.preventDefault();
        createCounter();
        e.target.value = '';
    }
})

// Checks for length in input and prevets if it is over 2 (two digits of minute / seconds). Also prevents decmial points

document.getElementById('minuteSelector').addEventListener(`keydown`, function(e){
    if ((e.target.value.length >= 2) && (e.code != 'Backspace')){
        e.preventDefault();
    } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false)){
        console.log('prevent')
        e.preventDefault();
    }     
})

// Validates minute field, making sure it is < 60
document.getElementById('minuteSelector').addEventListener(`keyup`, function(e){
    if (parseInt(e.target.value) > 59){
        e.target.value = '';
        console.log('Invalid Minutes Input, Please Try Again');
    }
})

document.getElementById('secondSelector').addEventListener(`keydown`,  function(e){
    if ((e.target.value.length >= 2) && (e.code != 'Backspace')){
        e.preventDefault();
    } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false)){
        console.log('prevent')
        e.preventDefault();
    }     
})

document.getElementById('secondSelector').addEventListener(`keyup`, function(e){
    if (parseInt(e.target.value) > 59){
        e.target.value = '';
        console.log('Invalid Seconds Input, Please Try Again');
    }
})


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

// This function validates the users input

function userInputHandling(){
    let userInput = document.getElementById('objectSelector').value.toLowerCase();
    let parsedInput = userInput.split(' ').join('');
    console.log(parsedInput);

    let creationData = {};

    if(terranUnits.includes(parsedInput)){

        console.log('its valid!');
        creationData[`whatToBuild`] = parsedInput;

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
        console.log('Not a valid unit, try again');
        creationData = false;
    }

    return creationData;

}

function createCounter(){
    let counterContainer = document.getElementById('counterContainer');
    let counterNumber = counterContainer.childElementCount;
    let creationData = userInputHandling();
    // I'm using counter number to be able to count the number of counters that are in the collection
    // I then use that number to assign an id to the counter so that I can pass that to my worker to manipulate it. 

    // Creating the figure then starting the worker up, if it passed validation 

    if(creationData){
        figureTool.makeFigure(`${creationData[`whatToBuild`]}`, (counterNumber + 1))
        myWorker.postMessage((counterNumber + 1));
    } else {
        console.log('please check your inputs')
    }

}


document.getElementById('getInputData').addEventListener('click', figureTool.getData);
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


function testingStuff(data){
    console.log(parseInt(data))
    if(isNaN(parseInt(data))){
        return('That sucked');
    }else {
        return('That worked');
    }
}

console.log(testingStuff('bl'))

