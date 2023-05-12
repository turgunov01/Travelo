// const modal = document.querySelector('.login-modal')
// let btn = document.querySelector('.login-button')

function getUserToken() {
    const admin = sessionStorage.getItem('Admin')
    const pass = sessionStorage.getItem('Pass')

    let checkAuth = document.querySelectorAll('.checkAuth')

    if (admin && pass) {
        // modal.classList.remove('active')
        checkAuth.forEach((item) => {
            item.hidden = true
        })
    }

    if (!admin || !pass) {
        // modal.classList.add('active')

        checkAuth.forEach((item) => {
            item.hidden = false
        })
    }
}

const setSessionItem = (key, value) => {
    const hasItem = sessionStorage.getItem('key')
    if (!hasItem) {
        sessionStorage.setItem(key, value)
        console.log(key, value)
    }
}

function postUser() {
    let login = document.querySelector('#login')
    let pass = document.querySelector('#password')

    if (!login.value.length) {
        alert('Login is required to fill!')
    }
    if (!pass.value.length) {
        alert('Password is required to fill!')
    }

    if (login.value && pass.value) {
        setSessionItem('Admin', login.value)
        setSessionItem('Pass', pass.value)
        modal.style.display = 'none'
    }

    login.value = ''
    pass.value = ''

    console.log(sessionStorage)
}


document.addEventListener('DOMContentLoaded', () => {
    getUserToken()
    let xValue = 0
    let yValue = 0


    const parallax = document.querySelectorAll('.parallax')

    for (let i = 0; i < parallax.length; i++) {
        parallax[i].style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`
    }

    const wrapper = document.querySelector('.wrapper')

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

        const x = event.gamma | 0
        const y = event.beta | 0


        if (window.innerWidth < 990) {
            parallax.forEach(item => {
                let speedx = item.dataset.speedx * 10;
                let speedy = item.dataset.speedy * 10;
                item.style.transform = `translateX(calc(-50% + ${x * speedx}px)) translateY(calc(-50% + ${y * speedy}px))`
            });
        }

    })


})

let aside = document.querySelector('.aside')
let target = document.querySelectorAll('.left')

function getAside() {
    aside.classList.toggle('active')
    animateTextLeft(target, aside)
}

function animateTextLeft(child, par) {
    if (par.classList.contains('active')) {
        setInterval(() => {
            for (let k = 0; k < child.length; k++) {
                child[k].classList.add('active')
            }
        }, 1000);
    }
}


