input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    radio.sendString("go")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # # .
        # . . # .
        # # # . .
        `)
    radio.sendString("stop")
})
radio.setGroup(1)
basic.forever(function () {
	
})
