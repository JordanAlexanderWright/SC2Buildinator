const myWorker = new Worker('worker.js');


// this Sets up what will happen when I recieve data from my worker
myWorker.onmessage = function(message){
   
    // The object selectors here are a custom object that I am making, using the event. data is where the
    // Information from the worker is passed, as an object, and then I select what pieces I want

    document.getElementById(message['data']['id']).innerHTML = message['data']['counter'];
}

const workerButton = document.getElementById('worker');
const workerButtonTwo = document.getElementById('workerTwo')
const otherButton = document.getElementById('notWorker');


otherButton.addEventListener('click', sendMessage);
workerButton.addEventListener('click', sendMessage);
workerButtonTwo.addEventListener(`click`, sendMessage);

function sendMessage(event){

    // this sends the target button's custom data, linking it to a particular p tag
    myWorker.postMessage(event.target.dataset.display);
}
