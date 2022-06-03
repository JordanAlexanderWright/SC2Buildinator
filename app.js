const myWorker = new Worker('worker.js');

myWorker.onmessage = function(message){
    console.log('got message');
    document.getElementById('counterOne').innerHTML = message['data'];
}

const workerButton = document.getElementById('worker');
const otherButton = document.getElementById('notWorker');

workerButton.addEventListener('click', sendMessage);
// otherButton.addEventListener('click', () => console.log('Hello, Jordan'));


let testFunction = function(){
    
    let counter = 1;

    let myInterval = setInterval(function(){
        console.log(counter);
        document.getElementById('counterTwo').innerHTML = counter
        counter += 1
        
        if (counter > 10){
            clearInterval(myInterval);
        }
     }, 1000);
 
 }


otherButton.addEventListener('click', testFunction);

function sendMessage(){
    myWorker.postMessage('Hello World');
}
