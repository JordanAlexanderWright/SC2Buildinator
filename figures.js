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
}