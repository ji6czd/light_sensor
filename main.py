    def on_forever():
                basic.clear_screen()
    l = input.light_level()
    if l > 0:
        music.play_tone(500+l*8, 50)
    basic.pause(500)

music.play_tone(2100, 100)
music.play_tone(1000, 100)
basic.forever(on_forever)
