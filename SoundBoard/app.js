const sounds_bar = document.getElementById('sounds-bar')

const sounds = ["DirilisMusic1","DirilisMusic2","DirilisMusic3","DirilisMusic4"]

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.innerText = sound
    btn.classList.add('btn')
    sounds_bar.appendChild(btn)
    btn.addEventListener('click', () => {
        stopSong()
        document.getElementById(sound).play()
    });
});

const btnStop = document.createElement("button")
btnStop.innerText = `Stop`
btnStop.classList.add('btn-stop')
sounds_bar.appendChild(btnStop)

btnStop.addEventListener('click', () => {
    stopSong()
});

const btnPause = document.createElement("button")
btnPause.innerText = `Pause`
btnPause.classList.add('btn-pause')
sounds_bar.appendChild(btnPause)

btnPause.addEventListener('click', () => {
    pauseSong()
});

const pauseSong = () => {
    sounds.forEach((sound) => {
        const currentSong = document.getElementById(sound)
        currentSong.pause()
    });
}

const stopSong = () => {
    sounds.forEach((sound) => {
        const currentSong = document.getElementById(sound)
        currentSong.pause()
        currentSong.currentTime = 0
    });
}