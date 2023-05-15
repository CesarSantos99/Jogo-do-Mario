const mario = document.querySelector('.mario')

const jump = () => {
    mario.classList.add('jump') // add uma classe na classe mario

    setTimeout(() => {
        mario.classList.remove('jump') // removendo uma classe na classe mario
    }, 500)
} // função que add uma classe na outra, ai pula e depois remove o pulo





document.addEventListener('keydown', jump)