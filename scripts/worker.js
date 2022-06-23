
self.onmessage = function(message){

    console.log(message);
    let timerId = message['data'][`timerId`];
    console.log(timerId);
    let counter = 1;

   let myInterval = setInterval(function(){
        console.log(counter);

        self.sendMessage({
            'count': counter,
            'id': timerId,
            'timeToBuild': message['data']['timeToBuild']
        });
        counter += 1

        if (counter > message['data']['timeToBuild']){
            clearInterval(myInterval);
        }
    }, 1000);
}

sendMessage = function(count){
    self.postMessage(count)
}




