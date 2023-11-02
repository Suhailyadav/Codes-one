
function displayStopwatch(){
    clearInterval(watchInterval);
    document.querySelector('.display-hours').innerHTML = '00';
    document.querySelector('.display-minutes').innerHTML = '00';
    document.querySelector('.display-seconds').innerHTML = '00';
    document.querySelector('.time-period').innerHTML = '.00';
     document.getElementById('stopwatchbutton').disabled = true;
    document.getElementById('watchbutton').disabled = false;
    document.getElementById('timerbutton').disabled = false;
    let stpwtcbuttons = document.querySelector('.s-s-p');
    stpwtcbuttons.classList.add('stopwatch-clicked');
    let millibutton = document.querySelector('.time');
    // millibutton.classList.add('stopwatch-clicked-milli');
    const timerClickedElement = document.querySelector('.timer-clicked');
    if (timerClickedElement) {
        timerClickedElement.classList.remove('timer-clicked'); // Remove the class
    }
          
}
const tms = document.getElementById('time-ms');
tms.style.width = '26.63px'

let intervalID;
let startTime = 0;
let paused = true;
let elapsedTime = 0;
let currentTime = 0;
let stopwatchHours = '00';
let stopwatchMinutes = '00';
let stopwatchSeconds = '00';
let stopwatchMilliseconds = '00';

document.getElementById('stopwatch-stop').disabled = true; 
document.getElementById('stopwatch-reset').disabled = true; 



function startStopwatch() {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateStopwatch, 100);
        document.getElementById('stopwatch-start').disabled = true; 
        document.getElementById('stopwatch-stop').disabled = false; 
        document.getElementById('stopwatch-reset').disabled = false; 


}


function updateStopwatch() {
   
      elapsedTime =  Date.now() - startTime;
      stopwatchHours = Math.floor((elapsedTime / 3600000) % 60);
      stopwatchMinutes = Math.floor((elapsedTime / 60000) % 60);
      stopwatchSeconds = Math.floor((elapsedTime / 1000) % 60);
      stopwatchMilliseconds = Math.floor((elapsedTime / 10)  % 100);

    document.querySelector('.hs').innerHTML = `${stopwatchHours}`;
    document.querySelector('.ms').innerHTML = `${stopwatchMinutes}`;
    document.querySelector('.ss').innerHTML = `${stopwatchSeconds}`;
    document.querySelector('.time').innerHTML = `.${stopwatchMilliseconds}`;

    if (stopwatchHours < 10) {
        document.querySelector('.hs').innerHTML = `0${stopwatchHours}`;
    } else {
        document.querySelector('.hs').innerHTML = `${stopwatchHours}`;
    }

    if (stopwatchMinutes < 10) {
        document.querySelector('.ms').innerHTML = `0${stopwatchMinutes}`;
    } else {
        document.querySelector('.ms').innerHTML = `${stopwatchMinutes}`;
    }  

    if (stopwatchSeconds < 10) {
        document.querySelector('.ss').innerHTML =`0${stopwatchSeconds}`;
    } else {
        document.querySelector('.ss').innerHTML = `${stopwatchSeconds}`;
    } 

    if (stopwatchMilliseconds < 10) {
        document.querySelector('.time').innerHTML = `.0${stopwatchMilliseconds}`;
    } else {
        document.querySelector('.time').innerHTML = `.${stopwatchMilliseconds}`;
    } 
    

}

function stopStopwatch() {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
    document.getElementById('stopwatch-start').disabled = false; 
    document.getElementById('stopwatch-stop').disabled = true; 
    document.getElementById('stopwatch-reset').disabled = false; 

}

function resetStopwatch() {
    paused = true;
    clearInterval(intervalID);
    startTime =0;
   
     elapsedTime = 0;
     currentTime = 0;
     stopwatchHours = 0;
     stopwatchMinutes = 0;
     stopwatchSeconds = 0;
     stopwatchMilliseconds = 0;
    document.querySelector('.hs').innerHTML = '00';
    document.querySelector('.ms').innerHTML = '00';
    document.querySelector('.ss').innerHTML = '00';
    document.querySelector('.time').innerHTML = '.00';
    
    document.getElementById('stopwatch-start').disabled = false; 
    document.getElementById('stopwatch-stop').disabled = false; 
    document.getElementById('stopwatch-reset').disabled = true;
 



}



    
