music.playTone(2100, 100)
music.playTone(1000, 100)
basic.forever(function on_forever() {
    basic.clearScreen()
    let l = input.lightLevel()
    if (l > 0) {
        music.playTone(500 + l * 8, 50)
    }
    
    basic.pause(500)
})
