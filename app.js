function time() {
    const currentDate = new Date();
    const doomsday = new Date('September 1, 2021 00:00:00');

    const instatime = (doomsday - currentDate) / 1000;

    const days = Math.floor(instatime / 3600 / 24);
    const hours = Math.floor(instatime / 3600 % 24);
    const minutes = Math.floor(instatime / 60 % 60);
    const seconds = Math.floor(instatime) % 60;


    let daysEl = document.getElementById('days').innerHTML = zeroTime(days);
    let hoursEl = document.getElementById('hours').innerHTML = zeroTime(hours);
    let minutesEl = document.getElementById('minutes').innerHTML = zeroTime(minutes);
    let secondsEl = document.getElementById('seconds').innerHTML = zeroTime(seconds);

    function zeroTime(zero) {
        return zero < 10 ? (`0${zero}`) : zero;
    }
}



time();
setInterval(time, 1000);