const myWorker = new Worker('worker.js');


// this Sets up what will happen when I recieve data from my worker
myWorker.onmessage = function(message){
   
    // The object selectors here are a custom object that I am making, using the event. data is where the
    // Information from the worker is passed, as an object, and then I select what pieces I want

    document.getElementById(message['data']['id']).innerHTML = message['data']['count'];

    if (message['data']['count'] === 10){
        console.log('needs to be removed');
        setTimeout(() => document.getElementById(message['data']['id']).remove(), 5000);
    }
}

myWorker.onerror = function(e){
    console.log(e);
}

function counterCreate(){
    let counterContainer = document.getElementById('counterContainer');
    let counterNumber = counterContainer.childElementCount;

    // I'm using counter number to be able to count the number of counters that are in the collection
    // I then use that number to assign an id to the counter so that I can pass that to my worker to manipulate it. 

    let counter = document.createElement('p')
    counter.innerHTML = '0'
    counter.id = counterNumber + 1

    console.log(counter);
    counterContainer.appendChild(counter);

    sendMessage(counter.id)
}


const makeCounterButton = document.getElementById('makeCounter')
makeCounterButton.addEventListener('click', counterCreate);

// function sendMessage(event){

//     // this sends the target button's custom data, linking it to a particular p tag
//     myWorker.postMessage(event.target.dataset.display);
// }

function sendMessage(id){
    myWorker.postMessage(id)
}

function makeSCV() {

    let scvFigure = document.createElement('figure');

    let scvIMG = document.createElement('img');
    scvIMG.src = `/resources/icons/SCV.png`

    let scvLabel = document.createElement('figcaption');
    scvLabel.innerHTML = 'SCV';

    scvFigure.append(scvIMG);
    scvFigure.append(scvLabel);

    document.getElementById('counterContainer').append(scvFigure);

}

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

console.log(testData['1'])
console.log(Object.keys(testData));

let someData = (Object.keys(testData));

console.log(someData);
console.log(typeof(someData));
console.log(someData.length)

makeSCV()
makeSCV()