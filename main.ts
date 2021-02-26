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
radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # . . . #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
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
