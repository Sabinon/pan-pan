namespace SpriteKind {
    export const objeto = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        Fantasmon,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f c c c c c f . . . . 
            . . . . f c c 1 f 1 f 1 f . . . 
            . . . . f c 1 1 f 1 f 1 f . . . 
            . . . . f c 1 3 1 1 1 3 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c c 1 1 1 1 1 f . . . 
            . . . . f c c c 1 1 1 1 f . . . 
            . . . . f c c c f c 1 1 f . . . 
            . . . . . f c f . f c f . . . . 
            . . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f c c c c c f . . . . 
            . . . . f c c 1 f 1 f 1 f . . . 
            . . . . f c 1 1 f 1 f 1 f . . . 
            . . . . f c 1 3 1 1 1 3 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c c 1 1 1 1 1 f . . . 
            . . . . f c c c 1 1 1 1 f . . . 
            . . . . f c c c f c 1 1 f . . . 
            . . . . . f c f . f c f . . . . 
            . . . . . . f . . . f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f c c c c c f . . . . 
            . . . . f c c 1 f 1 f 1 f . . . 
            . . . . f c 1 1 f 1 f 1 f . . . 
            . . . . f c 1 3 1 1 1 3 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . . f c 1 1 1 1 1 1 1 f . . 
            . . . f c c c c 1 1 1 f c f . . 
            . . f . f c f f c f f . f c f . 
            . . . . . f . . f . . . . f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        Fantasmon,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . f f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c 1 1 1 1 1 1 1 f . . . 
            . . . f c f c c f c 1 1 f . . . 
            . . f . f c f f . f c f . . . . 
            . . . . . f . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c c c 1 1 1 1 1 f . . . 
            . . f c c f f c c 1 1 f . . . . 
            . . f c f . f c f f c f . . . . 
            . . . f . . . f . . f . . . . . 
            . . f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . f f 1 3 1 1 1 3 f . . 
            . . . . f c 1 1 1 1 1 1 1 f . . 
            . . . f c 1 1 1 1 1 1 1 f f . . 
            . . f c 1 1 1 1 1 1 1 1 f . . . 
            . f c 1 1 1 1 1 1 1 1 c f . . . 
            . f c f f c f c 1 c c f . . . . 
            . . f . . f . f c f f . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . f f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c 1 1 1 1 1 1 1 f . . . 
            . . . f c f c c f c 1 1 f . . . 
            . . f . f c f f . f c f . . . . 
            . . . . . f . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c c c 1 1 1 1 1 f . . . 
            . . f c c f f c c 1 1 f . . . . 
            . . f c f . f c f f c f . . . . 
            . . . f . . . f . . f . . . . . 
            . . f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . f f 1 3 1 1 1 3 f . . 
            . . . . f c 1 1 1 1 1 1 1 f . . 
            . . . f c 1 1 1 1 1 1 1 f f . . 
            . . f c 1 1 1 1 1 1 1 1 f . . . 
            . f c 1 1 1 1 1 1 1 1 c f . . . 
            . f c f f c f c 1 c c f . . . . 
            . . f . . f . f c f f . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c c c 1 1 1 1 1 f . . . 
            . . f c c f f c c 1 1 f . . . . 
            . . f c f . f c f f c f . . . . 
            . . . f . . . f . . f . . . . . 
            . . f . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f 1 1 1 1 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . . f 1 1 f 1 f 1 f . . 
            . . . . . f f 1 3 1 1 1 3 f . . 
            . . . . . f 1 1 1 1 1 1 1 f . . 
            . . . . f c 1 1 1 1 1 1 f f . . 
            . . . . f c 1 1 1 1 1 1 f . . . 
            . . . f c 1 1 1 1 1 1 1 f . . . 
            . . . f c f c c f c 1 1 f . . . 
            . . f . f c f f . f c f . . . . 
            . . . . . f . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        Fantasmon.vy = -350
    }
})
let Fantasmon: Sprite = null
scene.setBackgroundColor(3)
Fantasmon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f c c c c c f . . . . 
    . . . . f c c 1 f 1 f 1 f . . . 
    . . . . f c 1 1 f 1 f 1 f . . . 
    . . . . f c 1 3 1 1 1 3 f . . . 
    . . . . f c 1 1 1 1 1 1 f . . . 
    . . . . f c 1 1 1 1 1 1 f . . . 
    . . . . f c 1 1 1 1 1 1 f . . . 
    . . . . f c c 1 1 1 1 1 f . . . 
    . . . . f c c c 1 1 1 1 f . . . 
    . . . . f c c c f c 1 1 f . . . 
    . . . . . f c f . f c f . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
controller.moveSprite(Fantasmon)
scene.cameraFollowSprite(Fantasmon)
tiles.setCurrentTilemap(tilemap`nivel2`)
game.onUpdate(function () {
    Fantasmon.vy += 50
})
