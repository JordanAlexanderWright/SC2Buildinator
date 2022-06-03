// function onmessage(message){
//     console.log(message);
// }

self.onmessage = function(message){

    let counter = 1;

   let myInterval = setInterval(function(){
        console.log(counter);

        self.sendMessage(counter);
        counter += 1

        if (counter > 10){
            clearInterval(myInterval);
        }
    }, 1000);

}

sendMessage = function(count){
    self.postMessage(count)
}




