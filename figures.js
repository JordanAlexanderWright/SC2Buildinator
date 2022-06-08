class figureCreator{

    constructor(){
        this.figureContainer = document.getElementById('counterContainer')
    }

    
    makeFigure(unitType, timerId) {

    let newFigure = document.createElement('figure');

    let figureImage = document.createElement('img');
    figureImage.src = `/resources/icons/units/${unitType}.png`

    let figureLabel = document.createElement('figcaption');
    figureLabel.innerHTML = `${unitType}`;

    let figureTimer = document.createElement('figcaption');
    figureTimer.innerHTML = 'Timer'
    figureTimer.id = timerId

    newFigure.append(figureImage);
    newFigure.append(figureLabel);
    newFigure.append(figureTimer)

    this.figureContainer.append(newFigure);

    }

    getData(){

       let minutes = document.getElementById('minuteSelector').value;
       let seconds = document.getElementById('secondSelector').value;

       let time = `${minutes}:${seconds}`

       let supply = document.getElementById('supplySelector').value;
       let production = document.getElementById('objectSelector').value;

       let tableRow = document.createElement('tr');

       let productionData = document.createElement('td');
       productionData.innerHTML =  production;

       let supplyData = document.createElement('td');
       supplyData.innerHTML = supply

       let timeData = document.createElement('td');
       timeData.innerHTML = time;

       let deleteButton = document.createElement('td');
       let deleteLink = document.createElement('a');        
       deleteLink.href="#";
       deleteLink.innerHTML = "x"
       deleteButton.append(deleteLink);

       // Creating an array of elements to iterate over + appending to new row

       let createdElements = [productionData, supplyData, timeData, deleteButton]
       createdElements.forEach((data) => tableRow.append(data))
        
        // appending new row to table

       document.getElementById('buildOrderTable').append(tableRow);

    }
}