// whenever the main app posts a message to the worker, it does the following code
self.onmessage = function(message){

    let timerId = message['data'][`timerId`];
    let counter = 1;
    let fasterTimeConversion = 1/1.4 * 1000;

    /* this function basically creates a timer that executes every second.
        It sends back a message to the main app to change the timer counter
        to however many seconds have passed, compares it to the intended time
        to build, and then continues if it is not time to remove the figure.
    */ 

   
   let myInterval = setInterval(function(){

        self.sendMessage({
            'count': counter,
            'id': timerId,
            'timeToBuild': message['data']['timeToBuild']
        });
        counter += 1

        if (counter > message['data']['timeToBuild']){
            clearInterval(myInterval);
        }
    }, fasterTimeConversion);
}

sendMessage = function(data){
    self.postMessage(data)
}