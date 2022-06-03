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
