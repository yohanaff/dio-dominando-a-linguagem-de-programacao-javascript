let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if(currentNumber > 10) {
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = '#008000'
    }
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < -10) {
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = '#ff0000'
    }
}