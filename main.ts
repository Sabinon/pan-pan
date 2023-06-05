namespace SpriteKind {
    export const objeto = SpriteKind.create()
}
let mySprite = sprites.create(assets.image`Carta`, SpriteKind.objeto)
animation.runImageAnimation(
mySprite,
assets.animation`Carta`,
100,
true
)
