window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function from executing altogether.
    audio.currentTime =0; //rewinds to start
    audio.play();
});