
function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10) {
        document.querySelector('.display-hours').innerHTML = `0${hours}`;
    } else {
        document.querySelector('.display-hours').innerHTML = `${hours}`;
    }

    if (minutes < 10) {
        document.querySelector('.display-minutes').innerHTML = `0${minutes}`;
    } else {
        document.querySelector('.display-minutes').innerHTML = `${minutes}`;
    }

    if (seconds < 10) {
        document.querySelector('.display-seconds').innerHTML = `0${seconds}`;
    } else {
        document.querySelector('.display-seconds').innerHTML = `${seconds}`;
    }

    let timePeriod = document.querySelector('.time-period');

    if (hours < 12) {
        timePeriod.innerHTML = 'am';
    } else {
        timePeriod.innerHTML = 'pm';
    }
}
let watchInterval;



function displayClock(){
    watchInterval = setInterval(displayTime, 1000);
    document.getElementById('watchbutton').disabled = true;
    document.getElementById('stopwatchbutton').disabled = false;
    document.getElementById('timerbutton').disabled = false;
    const stopwatchClickedElement = document.querySelector('.stopwatch-clicked');
    if (stopwatchClickedElement) {
        stopwatchClickedElement.classList.remove('stopwatch-clicked'); 
    }
    const timerClickedElement = document.querySelector('.timer-clicked');
    if (timerClickedElement) {
        timerClickedElement.classList.remove('timer-clicked'); 
    }
    if (paused == false){
     resetStopwatch();
    }
    
}

 


    
  
    


