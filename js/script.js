const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const jump = () => {
    mario.classList.add('jump') // add uma classe na classe mario

    setTimeout(() => {
        mario.classList.remove('jump') // removendo uma classe na classe mario
    }, 500)
} // função que add uma classe na outra, ai pula e depois remove o pulo

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '43px'

        clearInterval(loop)
    }
},10)



document.addEventListener('keydown', jump)