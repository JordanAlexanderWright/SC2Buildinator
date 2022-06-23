
self.onmessage = function(message){

    console.log(message);
    let elementId = message['data'];
    console.log(elementId);
    let counter = 1;

   let myInterval = setInterval(function(){
        console.log(counter);

        self.sendMessage({
            'count': counter,
            'id': elementId
        });
        counter += 1

        if (counter > 10){
            clearInterval(myInterval);
        }
    }, 1000);
}

sendMessage = function(count){
    self.postMessage(count)
}




