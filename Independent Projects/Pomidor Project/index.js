const pomifocus = document.querySelector('.pomifocus'),
    setting = document.querySelector('.setting-button'),
    signin = document.querySelector('.signin-button'),
    mainPomidor = document.querySelector('.pomidor'),
    shortBreak = document.querySelector('.short-break'),
    longBreak = document.querySelector('.long-break'),
    time = document.querySelector('.time'),
    bodyElement = document.querySelector('body'),
    fullPage = document.querySelector('.full-page'),
    table = document.querySelector('.table'),
    reset = document.querySelector('.reset-button'),
    start = document.querySelector('.start-button');

let minutes = 25;
let seconds = 0;
let isPaused = true;
let sessionCount = parseInt(localStorage.getItem('sessionCount')) || 1;
let shortBreakCount = parseInt(localStorage.getItem('shortBreakCount')) || 1;
let longBreakCount = parseInt(localStorage.getItem('longBreakCount')) || 1;
let currentMode = "pomidor";
let timer;

updateNumber();

document.querySelector('.number-of-focs').innerHTML = `Pomodoro #${sessionCount}`;
function startTimer() {
    if (isPaused) {
        timer = setInterval(updateTimer, 1);
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
        isPaused = true;
        clearInterval(timer);
        start.innerHTML = 'Start';

        if (currentMode === "pomidor") {
            sessionCount++;
            localStorage.setItem('sessionCount', sessionCount);
            document.querySelector('.number-of-focs').innerHTML = `#${sessionCount}`;
            alert('Time is up! Take a break.');
            if (sessionCount % 4 === 0) {
                blueBreak();
            } else{
                cyanBreak();
            }
            return;
        } else if (currentMode === "short") {
            shortBreakCount++;
            localStorage.setItem('shortBreakCount', shortBreakCount);
            alert('Short break done! Back to work.');
            redBreak();
            return;
        } else if (currentMode === "long") {
            longBreakCount++;
            localStorage.setItem('longBreakCount', longBreakCount);
            alert('Long break done! Back to work.');
            redBreak();
            return;
        }
        updateNumber();
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
function redBreak() {
    currentMode = "pomidor"
    fullPage.className = 'full-page red-theme';
    table.className = 'table red-card'
    minutes = 25;
    seconds = 0;
    time.textContent = formatTime(minutes, seconds);
    updateNumber();
}
function cyanBreak() {
    currentMode = "short"
    fullPage.className = 'full-page cyan-theme'
    table.className = 'table cyan-card'
    minutes = 5;
    seconds = 0;
    time.textContent = formatTime(minutes, seconds);
    updateNumber();
}
function blueBreak() {
    currentMode = "long";
    fullPage.className = 'full-page blue-theme';
    table.className = 'table blue-card';
    minutes = 15;
    seconds = 0;
    time.textContent = formatTime(minutes, seconds);
    updateNumber();
}

function updateNumber() {
    if (currentMode === "pomidor") {
        document.querySelector('.number-of-focs').innerHTML = `Pomodoro #${sessionCount}`;
    } else if (currentMode === "short") {
        document.querySelector('.number-of-focs').innerHTML = `Short Break #${shortBreakCount}`;
    } else if (currentMode === "long") {
        document.querySelector('.number-of-focs').innerHTML = `Long Break #${longBreakCount}`;
    }
}
function resetTimer() {
    sessionCount = shortBreakCount = longBreakCount = 1;
    localStorage.removeItem('sessionCount');
    localStorage.removeItem('shortBreakCount');
    localStorage.removeItem('longBreakCount');
    updateNumber();
}
reset.addEventListener('click', resetTimer);
start.addEventListener('click', startTimer);
mainPomidor.addEventListener('click', redBreak);
shortBreak.addEventListener('click', cyanBreak);
longBreak.addEventListener('click', blueBreak);