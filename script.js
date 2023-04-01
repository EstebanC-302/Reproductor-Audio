const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')
const volumenCancion = document.querySelector('.volumen')

let audio;

for (elemento of playCancion) {
   elemento.addEventListener('click', function(){
       let cancion = this.getAttribute('id')
       audio = new Audio(`./Audios/${cancion}.mp3`)
       audio.play()
   })
}

for (elemento of stopCancion) {
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}

volumenCancion.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
})