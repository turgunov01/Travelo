
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
        if (window.innerWidth > 990) {
            xValue = e.clientX - window.innerWidth / 2
            yValue = e.clientY - window.innerHeight / 2


            for (let i = 0; i < parallax.length; i++) {
                parallax[i]
                let speedx = parallax[i].dataset.speedx;
                let speedy = parallax[i].dataset.speedy;
                parallax[i].style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`
            }
        }
    })


    window.addEventListener('deviceorientation', (event) => {

        const x = event.beta | 0
        const y = event.gamma | 0


        if (window.innerWidth < 990) {
            parallax.forEach(item => {
                let speedx = item.dataset.speedx;
                let speedy = item.dataset.speedy;
                item.style.transform = `translateX(calc(-50% + ${x + speedx}px)) translateY(calc(-50% + ${y * speedy}px))`
            });
        }

    })


})
