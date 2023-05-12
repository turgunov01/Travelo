
document.addEventListener('DOMContentLoaded', () => {
    let xValue = 0
    let yValue = 0

    function getCurrentClientPosition(e) {

    }

    const parallax = document.querySelectorAll('.parallax')

    for (let i = 0; i < parallax.length; i++) {
        parallax[i].style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`
    }
    getCurrentClientPosition(event)

    window.addEventListener('mousemove', (e) => {
        xValue = e.clientX - window.innerWidth / 2
        yValue = e.clientY - window.innerHeight / 2


        for (let i = 0; i < parallax.length; i++) {
            parallax[i]
            let speedx = parallax[i].dataset.speedx;
            let speedy = parallax[i].dataset.speedy;
            parallax[i].style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`
        }
    })


    window.addEventListener('deviceorientation', (event) => {
        const x = event.beta
        const y = event.gamma

        for (let j = 0; j < parallax.length; j++) {
            parallax[i].style.transform = `translateX(calc(-50% + ${-x}px)) translateY(calc(-50% + ${y}px))`
        }
    })


})
