// Prevent default behavior of input field 
document.getElementById('objectSelector').addEventListener(`keydown`, function(e){
    if( e.key === 'Enter'){
        console.log('hello');
        e.preventDefault();
        createCounter();
        e.target.value = '';
    }
})

// Checks for length in input and prevets if it is over 2 (two digits of minute / seconds). Also prevents decmial points

document.getElementById('minuteSelector').addEventListener(`keydown`, function(e){
    if ((e.target.value.length >= 2) && (e.code != 'Backspace')){
        e.preventDefault();
    } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false)){
        console.log('prevent')
        e.preventDefault();
    }     
})

// Validates minute field, making sure it is < 60
document.getElementById('minuteSelector').addEventListener(`keyup`, function(e){
    if (parseInt(e.target.value) > 59){
        e.target.value = '';
        console.log('Invalid Minutes Input, Please Try Again');
    }
})

document.getElementById('secondSelector').addEventListener(`keydown`,  function(e){
    if ((e.target.value.length >= 2) && (e.code != 'Backspace')){
        e.preventDefault();
    } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false)){
        console.log('prevent')
        e.preventDefault();
    }     
})

document.getElementById('secondSelector').addEventListener(`keyup`, function(e){
    if (parseInt(e.target.value) > 59){
        e.target.value = '';
        console.log('Invalid Seconds Input, Please Try Again');
    }
})

document.getElementById('supplySelector').addEventListener(`keydown`,  function(e){
    if ((e.target.value.length >= 3) && (e.code != 'Backspace')){
        e.preventDefault();
    } if ((e.code.includes('Digit') === false) && (e.code.includes('Backspace') === false)){
        console.log('prevent')
        e.preventDefault();
    }     
})

document.getElementById('supplySelector').addEventListener(`keyup`, function(e){
    if (parseInt(e.target.value) > 200){
        e.target.value = '';
        console.log('Invalid Supply Input, Please Try Again');
    }
})
