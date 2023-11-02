
let timerInterval;
currentTime = 0;
timerstop = true;
let endTime = 0;
let distance = 0;
 getTimer();
function setTimer(){
    document.querySelector('.display-hours').innerHTML = '00';
    document.querySelector('.display-minutes').innerHTML = '00';
    document.querySelector('.display-seconds').innerHTML = '00';
    clearInterval(watchInterval);
    document.getElementById('stopwatchbutton').disabled = false;
    document.getElementById('watchbutton').disabled = false;
    document.getElementById('timerbutton').disabled = true;
    let timerclick = document.querySelector('.time-form-display');
    timerclick.classList.add('timer-clicked'); 
    const stopwatchClickedElement = document.querySelector('.stopwatch-clicked');
    if (stopwatchClickedElement) {
        stopwatchClickedElement.classList.remove('stopwatch-clicked'); // Remove the class
    }
    const stopwatchmilliElement = document.querySelector('.time');
    if(stopwatchmilliElement) {
        stopwatchmilliElement.innerHTML = "";
        
    }

    
}



function getTimer() {
        let hrs = document.querySelector('.input-hours').value
        let mins = document.querySelector('.input-minutes').value
        let secs = document.querySelector('.input-seconds').value
        if (timerstop) { 
        hrs = hrs.padStart(2, '0');
        mins = mins.padStart(2, '0');
        secs = secs.padStart(2, '0');
         if ((hrs >= 0 && hrs <= 12) && (mins >= 0 && mins <= 59) && (secs >= 0 && secs <= 59) && (hrs.length <= 2) && (mins.length <= 2) && (secs.length <= 2)) {
            currentTime = new Date(`1970-01-01T${hrs}:${mins}:${secs}`).getTime()
            console.log(currentTime);
             console.log(`hrs: ${hrs}, mins: ${mins}, secs: ${secs}`);
            document.querySelector('.timerError').innerHTML = '';
            
         }
         else {
            clearInterval(timerInterval);
            document.querySelector('.timerError').innerHTML = 'Enter valid time!';
         }

         
    } 
        else{
         timerstop = true;    
        hrs = document.querySelector('.display-hours').innerHTML;
        mins = document.querySelector('.display-minutes').innerHTML;
        secs = document.querySelector('.display-seconds').innerHTML;
        
            currentTime = new Date(`1970-01-01T${hrs}:${mins}:${secs}`).getTime()
            // console.log(currentTime);
             console.log(`hrs: ${hrs}, mins: ${mins}, secs: ${secs}`);
            
         
        }


}









function displayTimer(){
    
     endTime = new Date("1970-01-01T00:00:00").getTime();
    
     distance =  currentTime-endTime;
     console.log(distance);

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    
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
     
    if (distance <= 0 ){
        document.getElementById('timer-start').disabled = false;
        document.getElementById('timer-stop').disabled = true;
        document.getElementById('timer-reset').disabled = true;
        clearInterval(timerInterval);
        document.querySelector('.input-hours').value = '00'; 
        document.querySelector('.input-minutes').value = '00'; 
        document.querySelector('.input-seconds').value = '00'; 
    } else{
        currentTime -= 1000
    }    
        

    
}

document.getElementById('timer-stop').disabled = true;
document.getElementById('timer-reset').disabled = true;


function startTimer() {
   
     getTimer();
     displayTimer();
     if (timerstop == true) {
        timerInterval = setInterval(displayTimer, 1000);
    }
    
    document.getElementById('timer-start').disabled = true;
    document.getElementById('timer-stop').disabled = false;
    document.getElementById('timer-reset').disabled = false;
     
}

function stopTimer() {
    
        clearInterval(timerInterval);
        timerstop= false; 
       

    document.getElementById('timer-start').disabled = false;
    document.getElementById('timer-stop').disabled = true;
    document.getElementById('timer-reset').disabled = false;
  
}
   
function resetTimer() {
    clearInterval(timerInterval);
    timerstop = true;
    document.querySelector('.input-hours').value = '00'; 
    document.querySelector('.input-minutes').value = '00'; 
    document.querySelector('.input-seconds').value = '00'; 
    document.querySelector('.display-hours').innerHTML = '00';
    document.querySelector('.display-minutes').innerHTML = '00';
    document.querySelector('.display-seconds').innerHTML = '00';
    document.getElementById('timer-start').disabled = false;
    document.getElementById('timer-stop').disabled = false;
    document.getElementById('timer-reset').disabled = true;
}

    









    

