// Creating a worker, and a figure handler from my figure class in figures.js

const myWorker = new Worker('../scripts/worker.js');
document.getElementById('makeCounter').addEventListener('click', createCounter);
let figureTool = new figureCreator();

// this Sets up what will happen when I recieve data from my worker
myWorker.onmessage = function(message){
   
    // The object selectors here are a custom object that I am making, using the event. data is where the
    // Information from the worker is passed, as an object, and then I select what pieces I want

    document.getElementById(message['data']['id']).innerHTML = message['data']['count'];

    // Deletes the figure if the counter is completed, after 5 seconds. 
    
    if (message['data']['count'] === message['data']['timeToBuild']){
        console.log('needs to be removed');
        console.log('Build it!!!!!')
        setTimeout(() => document.getElementById(message['data']['id']).parentElement.remove(), 5000);
    }
}

myWorker.onerror = function(e){
    console.log(e);
}

function createCounter(){

    //  Using counter number to be able to count the number of counters that are in the collection
    // Then use that number to assign an id to the counter so that I can pass that to my worker to manipulate it. 

    let counterContainer = document.getElementById('counterContainer');
    let counterNumber = counterContainer.childElementCount;

    // Tests to see if data is valid, and creates a data object if it is. 
    let creationData = figureTool.figureDataHandling();
    
    // Creating the figure then starting the worker up, if it passed validation
    creationData[`timerId`] = counterNumber + 1 

    if(creationData){
        figureTool.makeFigure(`${creationData[`whatToBuild`]}`, (counterNumber + 1))
        myWorker.postMessage(creationData);
    } else {
        console.log('please check your inputs');
    }

}

document.getElementById('getInputData').addEventListener('click', figureTool.getData);

// Getting the build order table then
// Adding functionality to the delete buttons with event bubbling.

document.getElementById('buildOrderTable').addEventListener('click', function(e){

    if (e.target.classList.contains('deleteButton')) {
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
});

function makeFormFigure(){
    console.log('MAKING IT');

    // Getting table parent container, the count for use later, and the items for iteration. 
    const buildItemContainer = document.getElementById('buildOrderTable').children[1];
    const buildItemCount = buildItemContainer.children.length;
    const buildItems = buildItemContainer.children;

    // Initializing a data object to hold all the data points
    let myData = {};

    // Loops through each build item and set their data into an object, for iteration. 

    for (let i = 0; i < buildItemCount; i++) {
        myData[i] = {
            'production': buildItems[i].children[0].innerHTML,
            'supply':  buildItems[i].children[1].innerHTML,
            'time': buildItems[i].children[2].innerHTML
        }
    }

    // Iterating through each data point in my object I created
    for(key in myData){
        console.log(key);

        // Taking the time data, and splitting it so it can be passed to time. + is the urnary operator, makes it a number. 
        splitTime = myData[key]['time'].split(":");

        let minutes = +splitTime[0];
        let seconds = +splitTime[1];

        let production = myData[key]['production'];
        let parsedProduction = production.toLowerCase();
        parsedProduction = parsedProduction.split(' ').join('');

        let timeToBuildSeconds = (minutes * 60) + seconds

        let counterContainer = document.getElementById('counterContainer');
        let counterNumber = counterContainer.childElementCount;

        // Tests to see if data is valid, and creates a data object if it is. 
        
        let creationData = {}

        creationData['timeToBuild'] = timeToBuildSeconds;
        creationData['whatToBuild'] = parsedProduction;

        // Creating the figure then starting the worker up, if it passed validation
        creationData[`timerId`] = counterNumber + 1;

        if(creationData){
            figureTool.makeFigure(`${creationData[`whatToBuild`]}`, (counterNumber + 1))
            myWorker.postMessage(creationData);
        } else {
            console.log('please check your inputs');
        }
    }
    
}
    

document.getElementById('formButton').addEventListener('click', makeFormFigure);

// This chunk adds functionality to the nav buttons and lets CSS animations happen

document.getElementById('raceSelector').addEventListener('click', (e) => {

    let navItems = document.getElementById('raceSelector')

    if (e.target.classList.contains('notSelected') || e.target.classList == false){

        // This for loop iterates over the navigation items, and changes all the 
        // items classes to be 'notSelected'
        for ( let i = 0; i < navItems.children.length; i++){
            console.log(i)
            console.log(navItems.children[i])
            console.log(navItems.children[i].children[0].children[0].classList)
            if(navItems.children[i].children[0].children[0].classList.contains('selected')){
                navItems.children[i].children[0].children[0].classList.replace('selected', 'notSelected');
            } if(navItems.children[i].children[0].children[0].classList == false){
                navItems.children[i].children[0].children[0].classList.add('notSelected');
            }           
        }

        //Now changing the users input to be selected

        e.target.classList.replace('notSelected', 'selected');
        console.log(e.target.innerHTML)
        
        // Changing the body class to allow for the page style to change with the race selection
        let bodyElement = document.getElementById('mainBody')

        bodyElement.classList.replace(bodyElement.classList[0], e.target.innerHTML.toLowerCase())
        console.log(bodyElement.classList);

    } else {
        console.log('It is currently selected');
    }
})


let raceSelector = document.getElementById('raceSelector')

console.log(raceSelector.classList);

console.log(raceSelector.classList == false);
// Test code
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

// document.getElementById(`test`).addEventListener(`click`, checkRadio);

console.log(testData['1'])
console.log(Object.keys(testData));

let someData = (Object.keys(testData));


function testingStuff(data){
    console.log(parseInt(data))
    if(isNaN(parseInt(data))){
        return('That sucked');
    }else {
        return('That worked');
    }
}

console.log(testingStuff('bl'))

let someVariable = '2'

someVariable = +someVariable
console.log(typeof(someVariable));

console.log('poop')

// let testRow = document.getElementById(`tableRow-1`);

// console.log(testRow);

// console.log(testRow.childNodes);

// const myElement = testRow;
// let myData = {};

// // Loops through the table row children, and put their information into an object

// for (let i = 0; i < myElement.children.length - 1; i++) {
//   console.log(myElement.children[i].classList);
//   console.log(myElement.children[i].classList[0]);
//   myData[myElement.children[i].classList[0]] = myElement.children[i].innerHTML;

// }

// console.log(myData);

function doMyStuff(){
    let rowCount = document.getElementById('buildOrderTable').children.length;

    console.log(rowCount);

    console.log(document.getElementById('buildOrderTable').children);

}
let testButton = document.getElementById('testButton');
testButton.addEventListener('click', doMyStuff);


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data));

let testObject = {
    1: 'hello',
    2: 'goodbye'
}

console.log(testObject)