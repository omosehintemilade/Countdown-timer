const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')


let countdown

function timer(seconds) {
    // clear existing timers 
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    console.table(now, then);
    displayTimeLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
            //    check if timer reaches 0 and stop
        if (secondsLeft <= 0) {
            clearInterval(countdown)
        }
        // display it
        displayTimeLeft(secondsLeft)
            // console.log(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minuites = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const display = `${minuites}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`
    timerDisplay.textContent = display
    document.title = display
        // console.log({ minuites, remainderSeconds });

}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const min = end.getMinutes()
    endTime.textContent = `Be Back At ${hour>12 ?hour-12:hour }:${min<10 ? '0': ''}${min}`
}

function startTimer() {
    // console.log(this.dataset.time);
    const seconds = parseInt(this.dataset.time)
    console.log(seconds);
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputValue = this.minutes.value
    console.log(inputValue);
    timer(inputValue * 60)
    this.reset()
})