document.querySelector('#app').innerHTML = `
<div class="container">
<div class="timer-block">
    <h1 class="timer-title">New Year Countdown</h1>
    <div class="timer">
        <div class="timer-item">
            <div class="wrapper">
                <div id="days" class="digit">0</div>
                <div class="unit">days</div>
            </div>
        </div>
        <div class="timer-item">
            <div id="hours" class="digit">0</div>
            <div class="unit">hours</div>
        </div>
        <div class="timer-item">
            <div id="minutes" class="digit">0</div>
            <div class="unit">minutes</div>

        </div>
        <div class="timer-item">
            <div id="seconds" class="digit">0</div>
            <div class="unit">seconds</div>
        </div>
    </div>
</div>
<div class="felicitation-block hide">
    <div class="felicitation-wrapper">
        <div>
            <img src="./img/6oa.gif" alt="">
        </div>
        <h2 class="felicitation show">Happy New Year!</h2>
    </div>
</div>
</div>
`

const deadline = '2022-01-01 00:0';

function getTimeRemiRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemiRemaining(endtime);
        const timerBlock = document.querySelector('.timer-block');
        const felicitationBlock = document.querySelector('.felicitation-block');



        if (t.total < 0) {
            clearInterval(timeInterval);
            timerBlock.classList.add('hide');

            felicitationBlock.classList.remove('hide');
            felicitationBlock.classList.add('show');

        } else {
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
        }
    }
}

setClock('.timer', deadline);
