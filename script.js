let clicks = 0;
let timeSeconds = 10;
let timeMileseconds = 0;
let timeLeft;
let cps;
let milisecondsLeft = 0;
let secondsLeft = 0;
let startTime = 10;
const startZone = document.querySelector('.startZone');
const startAnimation = document.querySelector('.startAnimation');
const clickZone = document.querySelector('.clickZone');
const timePlus = document.getElementById('time+');
const timeMinus = document.getElementById('time-');
const timeBlock = document.getElementById('timeBlock');
const clickBlock = document.querySelector('.clickBlock');
const cpsBlock = document.querySelector('.cpsBlock');
const results = document.querySelector('.backgroundMask');
const resultCps = document.getElementById('resultCps');
const clicksResult = document.getElementById('clicksResult');
const restartButton = document.querySelector('.restartButton');
const timeArrowTop = document.getElementById('timeArrowTop');
const timeArrowBottom = document.getElementById('timeArrowBottom');
const speedArrow = document.querySelector('.speedArrow');
const speedIndicator = document.querySelector('.speedIndicator');
const arrowRotate = document.querySelector('.arrowRotate');
const resultArrowRotate = document.querySelector('.resultArrowRotate')
document.oncontextmenu = function(){
    return false;
}
startZone.onclick = function () {
    startZone.style.display = 'none';
    startAnimation.style.display = 'flex';
    timePlus.style.display = 'none';
    timeMinus.style.display = 'none';
    timeArrowTop.style.display = 'flex';
    timeArrowBottom.style.display = 'flex';
    arrowRotate.classList.add('arrowRotateAnimation')
    function testStart() {
        startAnimation.style.display = 'none';
        clickZone.style.display = 'flex';
        let interval = setInterval(timer, 10)
        function timer() {
            let rotate;
            let rotatePlus;
            timeMileseconds--;
            milisecondsLeft++;
            if (milisecondsLeft > 9) {
                timeLeft = String(secondsLeft) + '.' + String(milisecondsLeft);
            }
            if (milisecondsLeft < 10) {
                timeLeft = String(secondsLeft) + '.0' + String(milisecondsLeft);
            }
            if (milisecondsLeft == 99) {
                secondsLeft++;
                milisecondsLeft = -1;
            }
            if (timeMileseconds < 0) {
                timeSeconds--;
                timeMileseconds = 99;
            }
            if (timeMileseconds < 9) {
                timeBlock.innerText = timeSeconds + '.' + '0' + timeMileseconds;
            } else if (timeMileseconds > 9) {
                timeBlock.innerText = timeSeconds + '.' + timeMileseconds;
            }
            cpsBlock.innerText = (+cps).toFixed(2);
            cps = clicks / timeLeft;
            rotate = (+cps) * 8.4 - 105;
            rotatePlus = (+cps) * 8.4;
            if ((+cps) < 12.5) {
                speedArrow.style.transform = `rotate(${rotate}deg)`;
            } else if ((+cps) > 12.5) {
                speedArrow.style.transform = `rotate(${rotatePlus}deg)`;
                if ((rotatePlus) >= 105) {
                    speedArrow.style.transform = `rotate(105deg)`;
                }
            }
            if (timeSeconds == 0 && timeMileseconds == 0) {
                clearInterval(interval);
                results.style.display = 'flex';
                resultCps.innerText = (+cps).toFixed(2);
                clicksResult.innerText = clicks;
                if ((+cps) < 12.5) {
                    resultArrowRotate.style.transform = `rotate(${rotate}deg)`;
                } else if ((+cps) > 12.5) {
                    resultArrowRotate.style.transform = `rotate(${rotatePlus}deg)`;
                    if ((rotatePlus) >= 105) {
                        resultArrowRotate.style.transform = `rotate(105deg)`;
                    }
                }
            }
        }
    }
    setTimeout(testStart, 2300);
    clickZone.onclick = function click() {
        clicks++;
        clickBlock.innerText = clicks;
    }
    clickZone.oncontextmenu = function () {
        clicks++;
        clickBlock.innerText = clicks;
    }

}
timePlus.onclick = function () {
    timeSeconds++;
    startTime++
    if (timeSeconds > 99) {
        timeSeconds = 1;
        startTime = 1;
    }
    timeBlock.innerText = timeSeconds + '.00';
}
timeMinus.onclick = function () {
    timeSeconds--;
    startTime--;
    if (timeSeconds < 1) {
        timeSeconds = 99;
        startTime = 99;
    }
    timeBlock.innerText = timeSeconds + '.00';
}
restartButton.onclick = function () {
    results.style.display = 'none';
    clicks = 0;
    timeSeconds = startTime;
    timeMileseconds = 0;
    timeLeft;
    cps;
    milisecondsLeft = 0;
    secondsLeft = 0;
    startAnimation.style.display = 'none';
    clickZone.style.display = 'none';
    startZone.style.display = 'flex';
    timeBlock.innerText = timeSeconds + '.00';
    cpsBlock.innerText = 0.00;
    clickBlock.innerText = 0.00;
    timePlus.style.display = 'flex';
    timeMinus.style.display = 'flex';
    timeArrowTop.style.display = 'none';
    timeArrowBottom.style.display = 'none';
    speedArrow.style.transform = `rotate(-105deg)`;
    resultArrowRotate.style.transform = `rotate(-105deg)`;
}
