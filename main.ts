function plot () {
    rendereraMask()
    led.plot(apple[0], apple[0])
}
input.onButtonPressed(Button.A, function () {
    riktning += -1
    if (riktning < 0) {
        riktning = 3
    }
})
function flyttaApple () {
    apple = [randint(0, planBredd), randint(0, planHojd)]
    while (apple[0] == mask[maskLangd - 1][0] && apple[1] == mask[maskLangd - 1][1]) {
        apple = [randint(0, planBredd), randint(0, planHojd)]
    }
}
function flyttaMask (taBortSvans: boolean) {
    if (riktning == 0) {
        dx = 0
        dy = -1
    } else if (riktning == 1) {
        dx = 1
        dy = 0
    } else if (riktning == 2) {
        dx = 0
        dy = 1
    } else {
        dx = -1
        dy = 0
    }
    mask.push([mask[maskLangd - 1][0] + dx, mask[maskLangd - 1][0] + dy])
    if (taBortSvans) {
        mask.shift()
    }
}
function kollaKollision () {
	
}
input.onButtonPressed(Button.B, function () {
    riktning += 1
    if (riktning > 3) {
        riktning = 0
    }
})
function rendereraMask () {
    for (let value of mask) {
        let list: number[] = []
        led.plot(list[0], list[0])
    }
}
let dy = 0
let dx = 0
let apple: number[] = []
let mask: number[][] = []
let planBredd = 0
let planHojd = 0
let maskLangd = 0
let riktning = 0
riktning = 1
maskLangd = 1
planHojd = 5
planBredd = 5
mask = [[2, 2], [2, 3]]
flyttaApple()
loops.everyInterval(500, function () {
    plot()
    flyttaMask(false)
})
