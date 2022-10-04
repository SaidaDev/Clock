const hands = document.querySelectorAll('.hand')



const setTime = () => {
    const date = new Date()
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours() - 12;
    const milliSeconds = date.getMilliseconds()

    const secondsDeg = seconds * 6 + milliSeconds * 0.006
    const minuteDeg = minutes * 6 + secondsDeg / 60
    const hourDeg = hour * 30 + minuteDeg / 12


    hands[0].style.transform = 'rotate(' + secondsDeg + 'deg)'
    hands[1].style.transform = 'rotate(' + minuteDeg + 'deg)'
    hands[2].style.transform = 'rotate(' + hourDeg + 'deg)'




}
setInterval(setTime, 100);