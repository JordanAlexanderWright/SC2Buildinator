const myWorker = new Worker('worker.js');

myWorker.onmessage = function(message){
    console.log('Message Recieved From Worker');
    console.log(message);
}

const workerButton = document.getElementById('worker');
const otherButton = document.getElementById('notWorker');

workerButton.addEventListener('click', sendMessage);
otherButton.addEventListener('click', () => console.log('Hello, Jordan'));


function sendMessage(){
    myWorker.postMessage('Hello World');
}