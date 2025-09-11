const pomifocus = document.querySelector('.pomifocus'),
    setting = document.querySelector('.setting-button'),
    signin = document.querySelector('.signin-button'),
    mainPomidor = document.querySelector('.pomidor'),
    shortBreak = document.querySelector('.short-break'),
    longBreak = document.querySelector('.long-break'),
    time = document.querySelector('.time'),
    start = document.querySelector('.start-button');
let minutes = 25;
let seconds = 0;
let isPaused = true;
let timer;


function startTimer() {
    if (isPaused) {
        timer = setInterval(updateTimer, 1000);
        start.innerHTML = 'Pause';
        isPaused = false;
    } else {
        isPaused = true;
        clearInterval(timer);
        start.innerHTML = 'Start';
    }
}
function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert('Time is up! Take a break.');
        return;
    } 
    
    if (seconds > 0) {
        seconds--;
    } else {
        seconds = 59;
        minutes--;
    }

    time.textContent = formatTime(minutes, seconds);
}
function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}
start.addEventListener('click', startTimer);