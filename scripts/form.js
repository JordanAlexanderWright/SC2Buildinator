// Prevent default behavior of input field, and allow enter to run function to add the date to table
document.getElementById('userInputs').addEventListener(`keydown`, function(e){
    if( e.key === 'Enter'){
        e.preventDefault();
        figureTool.getData();
        e.target.value = '';
    }
})

// Checks for length in input and prevets if it is over 2 (two digits of minute / seconds). Also prevents decmial points

function userInputExperience (field, fieldLength, maxValue){

    // This makes sure the input is a digit (excluding backspace) and that the length of the field
    // Is staying under the maximum length the field should be.

    field.addEventListener(`keydown`, function(e){ 
        console.log(e.code);
        if ((e.target.value.length >= fieldLength) && (e.code != 'Backspace') && (e.code != 'Tab')){
            e.preventDefault();
        } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false) && (e.code.includes('Tab') === false)){
            console.log('prevent')
            e.preventDefault();
        }})
    // This is validating that the field hasn't gone above the maximum value the field should be. 
    // Has to be placed on 'keyup' or could be grouped in previous EventListener

    field.addEventListener(`keyup`, function(e){
        if (parseInt(e.target.value) > maxValue){
            e.target.value = '';
            console.log('Invalid Minutes Input, Please Try Again');
        }
    })
}

userInputExperience(document.getElementById('minuteSelector'), 2, 59);
userInputExperience(document.getElementById('secondSelector'), 2, 59);
userInputExperience(document.getElementById('supplySelector'), 3, 200);