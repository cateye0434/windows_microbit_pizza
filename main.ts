function morseF (num: number) {
    if (num == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
    } else {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
    }
}
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 3; index++) {
        morseF(0)
        for (let index = 0; index < 2; index++) {
            morseF(1)
        }
        morseF(0)
        music.rest(music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            morseF(0)
        }
        music.rest(music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 2; index++) {
                morseF(1)
            }
            for (let index = 0; index < 2; index++) {
                morseF(0)
            }
            music.rest(music.beat(BeatFraction.Whole))
        }
        morseF(0)
        morseF(1)
        music.rest(music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        led.enable(true)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        led.enable(false)
        led.enable(true)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        led.enable(false)
    }
    basic.pause(1000)
    led.enable(true)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
})
let morse = 0
basic.showString("Hallo! Pizza, bitte!")
