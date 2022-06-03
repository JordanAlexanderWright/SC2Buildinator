// function onmessage(message){
//     console.log(message);
// }

self.onmessage = function(message){
    console.log(message);
    console.log(message['data']);

    self.postMessage('You suck');
}

