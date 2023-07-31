namespace SpriteKind {
    export const objeto = SpriteKind.create()
    export const Moneda = SpriteKind.create()
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
function iniciar () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        Monedona = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 4 5 5 5 5 5 5 f . . . 
            . . . f 4 5 5 5 5 5 5 5 5 f . . 
            . . f 4 5 5 5 5 5 5 5 5 f 5 f . 
            . . f 4 5 5 f 5 5 5 5 5 5 5 f . 
            . . f 4 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 4 5 f 5 5 5 5 5 5 f 5 f . 
            . . f 4 5 f f f f f 5 f f 5 f . 
            . . f 4 4 5 5 5 5 f f f 5 5 f . 
            . . . f 4 4 5 5 5 5 5 5 5 f . . 
            . . . . f 4 4 4 4 4 4 4 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Moneda)
        animation.runImageAnimation(
        Monedona,
        assets.animation`Monedona`,
        500,
        true
        )
        tiles.placeOnTile(Monedona, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Moneda, function (sprite, otherSprite) {
    if (true) {
        sprites.destroy(Monedona, effects.spray, 500)
        info.changeScoreBy(1)
    } else {
    	
    }
})
let Monedona: Sprite = null
let Fantasmon: Sprite = null
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd22222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    fffffffcffffffbffffffddddddddd2222222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
    ffffffcffffffffbdffffddddddd22222222222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
    fcfffffffcdcdffdffdccdddddd22222222222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
    fffffffffdbddcfffffcddddd2222222222222222222222222222222222222222222dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
    fcffffbffbffffffffbbddddd222222222222222222222222222222222222222222d22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
    fcbffffffcfffffffcdddd2222222222222222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
    fdcccffffdbffcffccdddd222222222222222222cc2222222222222222222222222d222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
    fffffffffffffffcdddd2222222222222222222cccc222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
    ffffffffffffffcbddd22222222222222222222cccc22222222222222222222222222222dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
    fffffffddcfffdddddd22222222222222222222ccccc22222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffdddbffbddd222222222222222222222cccccc222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
    ffffffcbfcccddddd222222222222222222222ccccccc22222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
    fffffffffcfddddd2222222222222222222222ccccccc22222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
    ffffffffdfcdddd2222222d22222d222222222cccccccc22222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
    ffffffffcfbddd22222222222222222222222ccccccccc2222222222222222222222222222222222d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
    fffffffcdcdddd22222222222222222222222cccccccccc2222222ccc222222222ccc222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
    fffffbfffcddd22222222222222222222222ccccccccccc2222222cccc222c2222ccc22222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fccffdcbfbddd22222222222222222222222cccccccccccc222222cccc22ccc222ccc2222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fffcffcdfbdd22222222222222222222222ccccccccccccccc2222cc1c22ccc22cccc222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    ffddfffbbbdd2222222222222222222222cccccccccccccccc2222cc1c22ccc22c11c222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
    cfdffffbcdd22222222222222222222222cccccccccccccccc2222ccccccccccccccc2222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
    ffffffccdd222222222222222222222222cccccccccccccccc2222ccccccccccccccc2222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
    ffcfffbdb222222222222222222222222222cccccccccccc222222ccccccccccccccc2222222222222222ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
    fffffcddddd2222222222222222222222222cc1cc1ccd1cc222222ccccccccccccccc2222222222222222ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
    fffffbdddd22222222222222222222222222cc1cc1ccc1cc2222222ccccccccccccc2222222222222222ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
    ffffcbddddd2222222222222222222222222cccccccccccc22222222ccccccccccc22222222222222222d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
    fffccddddd22222222222222222222222222cccccccccccc222222222cccccccccc22222222222222222ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
    ffdcbddddd22222222222222222222222222cccccccccccc222222222ccccccccc222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
    ffccddddddd22222222222222222222222222cccccccccc2222222222ccccccccc2222222222222222222dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
    ffcbdddddd2222222222222222222222222222cccccccc22b22222222ccccccccc222222222222bb2222ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
    ffcbddddd222222222222222222222222222222cccccccbccccccc222ccccccccc2222222222222b2222dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
    fcbbdddddd2222222222cccb2ccc2222cccc222ccccccccccccccccc2ccccccccc2222222222222b2222dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
    fcddddddd2222222222ccccb2cccc22ccccc222cccccccccbbccbbbccccccccccc2222222222222b222ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
    ccddddddd2222222222cccccbcccc22ccccc222cccccccccbbcccbbccccccccccc222222222222222222dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
    ddddddddd2222222222ccc1ccccccccc1ccc222ccccccccccccccccccccccccccc2222222222222b222bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
    dddddddd22222222222cc11ccc11cccc1ccc222ccccccccc1111cccccccccccccc2222222222222b222bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
    dddddddd22222222222cccccccbcccccccccc22cccccccc1111111cccccccccccc2222222222222b222bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
    dddddddd22222222222ccccccccccccccccc222ccccccc1111b1111ccccccccccc2222222222222b2dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
    dddddddddd222222222cccccccccccccccc1bb2ccccccc1111bb111ccccccccccc22222b2222222b2dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
    dddddddddd2222222222cccccccccccccccccccccccccc111111111cccccccccccbb22222222222b2db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
    dddddddddd22222222222cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb222222222b2db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
    ddddddddd1d22222222222ccccccccccccbbcbbccccccc1111111b1cccccccccccc2b2222222222bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
    ddddddddd1d22b22222222ccccccccccccbccbcccccccc111111bb1cccccccccccc222222222222bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
    ddddddddd1d22b22222222cccccccccccccccccccccccc1111111bbcccccccccccc22222222222bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
    dddddddddddddbbd2bb222cccccccccccc111d1cccccccd1d1111bbcccccccccccc22222222222bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
    dddddddddddddbbd2b2222ccccccccccccddbccccccccccc1ddddbccccccccccccc22222222bb2bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbd2b22bbccccccccccccccccccccccccccbcccccccccccccccccb2d222222bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbb2b22bbccccccccccccccccccccccccccccccccccccccccccccd2222b2222bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
    dddddddddddddddb2b2db1ccccccccccccccccccccccccccccccccccccccccccccc2222d2222bbb11d1dddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
    ddddddddddddddddbb2bbdccccccccccccccccccccccccccccccccccccccccccccb2222d2222bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddddbb2bbdccccccccccccccccccccccccccccccccccccccccccccb2b22d2222bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
    ddddddddddddddddbb2b11cccccccccccccccccccccccccccccccccccccccccccccbbb222222bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
    ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb222d222bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
    ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb2222222bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
    ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb22222bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
    ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb22222bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
    dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb2222bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
    dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb2222bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b22222bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb222bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb2bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
    bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
    bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
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
iniciar()
game.onUpdate(function () {
    Fantasmon.vy += 50
})
