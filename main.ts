namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const ShotProjectile = SpriteKind.create()
    export const invincable = SpriteKind.create()
}
/**
 * Most of these functions are pointless it is important to look over way left
 */
/**
 * Damage physics and knockback
 */
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += 0 - P2_Damage
    P2_Special_Fillage += P2_Damage * 20
    sprites.destroy(sprite, effects.ashes, 100)
    spriteutils.placeAngleFrom(
    otherSprite,
    spriteutils.angleFrom(sprite, otherSprite),
    5,
    otherSprite
    )
})
/**
 * These are the players special abilities and you will want to focus on these. Look closely at the blocks and add a fire effect  during every ability. To tell if a ability needs to be added you can tell by 1 block in the codes place. I can do cooldowns later.
 */
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (Game_Phase == 3) {
        if (P2_Special == 0) {
            effects.clearParticles(mySprite2)
            for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                if (P2_Range == 3400) {
                    for (let index = 0; index < 10; index++) {
                        mySprite2Projectile = sprites.create(img`
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            `, SpriteKind.Projectile2)
                        mySprite2Projectile.setPosition(value.x, value.y)
                        mySprite2Projectile.setFlag(SpriteFlag.DestroyOnWall, false)
                        mySprite2Projectile.setImage(img`
                            . . 2 4 5 4 . . 
                            . 5 2 5 5 5 2 . 
                            4 2 2 4 4 5 4 2 
                            5 5 5 4 2 4 2 4 
                            2 2 4 2 5 2 4 5 
                            4 5 5 2 4 2 5 4 
                            . 2 5 2 5 2 5 . 
                            . . 4 5 5 4 . . 
                            `)
                        mySprite2Projectile.setVelocity(randint(-175, 175), randint(-175, 175))
                        value.startEffect(effects.fire, 500)
                        value.startEffect(effects.fire, 500)
                    }
                } else if (P2_Range == 3000) {
                    mySprite2Projectile.setImage(img`
                        . . . c c . . . 
                        . c a f b c . . 
                        . b f f b c c . 
                        a a f b a b a c 
                        c a c b b f f b 
                        c b f f b f a b 
                        . a f f b b b a 
                        . . a b b c c . 
                        `)
                } else if (P2_Range == 2650) {
                    mySprite2Projectile.setImage(img`
                        . . . . . 5 . . 
                        . . . b b b . . 
                        . . b 1 1 5 d . 
                        . . 5 1 f d 4 . 
                        d d b 5 5 4 4 4 
                        d 5 5 d 5 5 5 . 
                        b d b 5 5 5 5 b 
                        . b d d d 5 b . 
                        `)
                } else if (P2_Range == 2200) {
                    value.setKind(SpriteKind.invincable)
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . c c . . . 
                        . . . . . . c c c c c 6 3 c . . 
                        . . . . . c 6 6 3 3 3 3 6 c c . 
                        . . . . c 6 6 6 6 3 3 3 3 3 6 c 
                        . . . . c 6 6 6 6 6 3 3 3 3 3 c 
                        . . c c c 6 6 6 6 6 6 3 3 3 3 c 
                        . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
                        c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
                        c c c c c c c c c 6 3 3 3 3 3 c 
                        c 5 5 4 c c 5 5 4 c 6 6 c c c . 
                        c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
                        . c c c c c c c c c c c . . . . 
                        `)
                    controller.player2.moveSprite(value, 30, 30)
                    value.startEffect(effects.fire, 6000)
                    value.startEffect(effects.fire, 6000)
                    for (let index = 0; index < 40; index++) {
                        statusbar2.value += 1
                    }
                    timer.after(10000, function () {
                        value.setImage(img`
                            . . . . . . . . . . . c c . . . 
                            . . . . . . . c c c c 6 3 c . . 
                            . . . . . . c 6 3 3 3 3 6 c . . 
                            . . c c . c 6 c c 3 3 3 3 3 c . 
                            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
                            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
                            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
                            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
                            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
                            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
                            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
                            b 5 4 b 4 4 4 4 b b 5 c b b . . 
                            c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
                            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                            . c c c c c c c c c . . c c c . 
                            `)
                        controller.player2.moveSprite(value, 60, 60)
                        value.setKind(SpriteKind.Player2)
                    })
                } else if (P2_Range == 2000) {
                    P2_Attack_rate = P2_Attack_rate / 3
                    value.startEffect(effects.fire, 7000)
                    value.startEffect(effects.fire, 7000)
                    timer.after(7000, function () {
                        P2_Attack_rate = P2_Attack_rate * 3
                    })
                } else if (P2_Range == 1700) {
                    for (let index = 0; index < 2; index++) {
                        mySprite2Projectile = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . f 1 1 1 1 f . . . . . 
                            . . . . f b 1 1 1 1 b f . . . . 
                            . . . f d 1 1 1 1 1 1 d f . . . 
                            . . . f d 1 1 1 1 1 1 d f . . . 
                            . . . f d d c 1 1 c d d f . . . 
                            . . . f c d f 1 1 f d c f . . . 
                            . . . . f b 1 1 1 1 b f . . . . 
                            . . f f f f b 1 b d f f f . . . 
                            . f 1 b 1 b f f f f b 1 b 1 . . 
                            . f b f b f f f f f f b f b . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, SpriteKind.Projectile2)
                        mySprite2Projectile.follow(mySprite, 70)
                        mySprite2Projectile.setPosition(value.x + randint(-30, 30), value.y)
                        mySprite2Projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
                        value.startEffect(effects.fire, 500)
                        value.startEffect(effects.fire, 500)
                    }
                } else if (P2_Range == 1600) {
                    mySprite2Projectile.setImage(img`
                        . . . . 1 1 . . 
                        1 1 . . . . . 1 
                        . . . 1 . . . 1 
                        1 . . 1 . . . . 
                        1 . . . . 1 1 . 
                        . . 1 . . . . . 
                        . . 1 . . . . 1 
                        1 1 . . 1 1 . 1 
                        `)
                } else if (P2_Range == 1500) {
                    mySprite2Projectile.setImage(img`
                        . . 3 3 2 2 . . 
                        . 3 2 2 2 2 2 . 
                        3 2 2 3 3 2 2 2 
                        3 2 3 2 2 c 2 2 
                        2 2 3 2 2 c 2 c 
                        2 2 2 c c 2 2 c 
                        . 2 2 2 2 2 c . 
                        . . 2 2 c c . . 
                        `)
                } else if (P2_Range == 1000) {
                    mySprite2Projectile.setImage(img`
                        . . . . . . e . 
                        . . . . . 5 e 5 
                        . . . . . 5 5 5 
                        . . . . 5 5 5 5 
                        . . . 5 5 5 5 4 
                        . 5 5 5 5 5 4 . 
                        e 5 5 5 5 4 . . 
                        . 5 5 5 4 . . . 
                        `)
                } else if (P2_Range == 850) {
                    mySprite2Projectile.setImage(img`
                        . 6 6 7 6 6 7 . 
                        6 1 7 7 1 7 6 6 
                        7 1 . 1 6 . 6 7 
                        6 6 7 . 6 7 6 1 
                        6 1 6 7 7 6 . 7 
                        7 1 . 6 6 6 6 7 
                        1 7 6 1 1 . 7 6 
                        . 1 7 7 6 7 7 . 
                        `)
                } else if (P2_Range == 700) {
                    mySprite2Projectile.setImage(img`
                        . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . . 
                        `)
                } else if (P2_Range == 600) {
                    mySprite2Projectile.setImage(img`
                        . . . b b . . . 
                        . . b 1 3 b . . 
                        . b 1 1 1 3 b . 
                        . d 1 3 1 1 d . 
                        . d 3 1 1 1 d . 
                        . b d 1 1 3 d . 
                        . c d d d b c . 
                        . . c b d c . . 
                        `)
                }
            }
            P2_Special_Fillage = 0
            P2_Special = 1
        }
    }
})
sprites.onOverlap(SpriteKind.ShotProjectile, SpriteKind.Player2, function (sprite, otherSprite) {
    statusbar2.value += 0 - P1_Damage
    P1_Special_Fillage += P1_Damage * 20
    sprites.destroy(sprite, effects.ashes, 100)
    spriteutils.placeAngleFrom(
    otherSprite,
    spriteutils.angleFrom(sprite, otherSprite),
    5,
    otherSprite
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Phase == 3) {
        if (P1_Special == 0) {
            effects.clearParticles(mySprite)
            for (let value of sprites.allOfKind(SpriteKind.Player)) {
                if (P1_Range == 3400) {
                    for (let index = 0; index < 10; index++) {
                        mySpriteProjectile = sprites.create(img`
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                            `, SpriteKind.ShotProjectile)
                        mySpriteProjectile.setPosition(value.x, value.y)
                        mySpriteProjectile.setFlag(SpriteFlag.DestroyOnWall, false)
                        mySpriteProjectile.setImage(img`
                            . . 2 4 5 4 . . 
                            . 5 2 5 5 5 2 . 
                            4 2 2 4 4 5 4 2 
                            5 5 5 4 2 4 2 4 
                            2 2 4 2 5 2 4 5 
                            4 5 5 2 4 2 5 4 
                            . 2 5 2 5 2 5 . 
                            . . 4 5 5 4 . . 
                            `)
                        mySpriteProjectile.setVelocity(randint(-175, 175), randint(-175, 175))
                        value.startEffect(effects.fire, 500)
                        value.startEffect(effects.fire, 500)
                    }
                } else if (P1_Range == 3000) {
                    mySpriteProjectile.setImage(img`
                        . . . c c . . . 
                        . c a f b c . . 
                        . b f f b c c . 
                        a a f b a b a c 
                        c a c b b f f b 
                        c b f f b f a b 
                        . a f f b b b a 
                        . . a b b c c . 
                        `)
                } else if (P1_Range == 2650) {
                    mySpriteProjectile.setImage(img`
                        . . . . . 5 . . 
                        . . . b b b . . 
                        . . b 1 1 5 d . 
                        . . 5 1 f d 4 . 
                        d d b 5 5 4 4 4 
                        d 5 5 d 5 5 5 . 
                        b d b 5 5 5 5 b 
                        . b d d d 5 b . 
                        `)
                } else if (P1_Range == 2200) {
                    value.setKind(SpriteKind.invincable)
                    value.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . c c . . . 
                        . . . . . . c c c c c 6 3 c . . 
                        . . . . . c 6 6 3 3 3 3 6 c c . 
                        . . . . c 6 6 6 6 3 3 3 3 3 6 c 
                        . . . . c 6 6 6 6 6 3 3 3 3 3 c 
                        . . c c c 6 6 6 6 6 6 3 3 3 3 c 
                        . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
                        c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
                        c c c c c c c c c 6 3 3 3 3 3 c 
                        c 5 5 4 c c 5 5 4 c 6 6 c c c . 
                        c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
                        . c c c c c c c c c c c . . . . 
                        `)
                    controller.moveSprite(value, 30, 30)
                    value.startEffect(effects.fire, 6000)
                    value.startEffect(effects.fire, 6000)
                    for (let index = 0; index < 40; index++) {
                        statusbar.value += 1
                    }
                    timer.after(10000, function () {
                        value.setImage(img`
                            . . . . . . . . . . . c c . . . 
                            . . . . . . . c c c c 6 3 c . . 
                            . . . . . . c 6 3 3 3 3 6 c . . 
                            . . c c . c 6 c c 3 3 3 3 3 c . 
                            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
                            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
                            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
                            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
                            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
                            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
                            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
                            b 5 4 b 4 4 4 4 b b 5 c b b . . 
                            c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
                            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                            . c c c c c c c c c . . c c c . 
                            `)
                        controller.moveSprite(value, 60, 60)
                        value.setKind(SpriteKind.Player)
                    })
                } else if (P1_Range == 2000) {
                    P1_Attack_rate = P1_Attack_rate / 3
                    value.startEffect(effects.fire, 7000)
                    timer.after(7000, function () {
                        P1_Attack_rate = P1_Attack_rate * 3
                    })
                } else if (P1_Range == 1700) {
                    for (let index = 0; index < 2; index++) {
                        mySpriteProjectile = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . f 1 1 1 1 f . . . . . 
                            . . . . f b 1 1 1 1 b f . . . . 
                            . . . f d 1 1 1 1 1 1 d f . . . 
                            . . . f d 1 1 1 1 1 1 d f . . . 
                            . . . f d d c 1 1 c d d f . . . 
                            . . . f c d f 1 1 f d c f . . . 
                            . . . . f b 1 1 1 1 b f . . . . 
                            . . f f f f b 1 b d f f f . . . 
                            . f 1 b 1 b f f f f b 1 b 1 . . 
                            . f b f b f f f f f f b f b . . 
                            . . . . . . f f f f . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, SpriteKind.ShotProjectile)
                        mySpriteProjectile.follow(mySprite2, 70)
                        mySpriteProjectile.setPosition(value.x + randint(-30, 30), value.y)
                        mySpriteProjectile.setFlag(SpriteFlag.GhostThroughWalls, true)
                        value.startEffect(effects.fire, 500)
                        value.startEffect(effects.fire, 500)
                    }
                } else if (P1_Range == 1600) {
                    mySpriteProjectile.setImage(img`
                        . . . . 1 1 . . 
                        1 1 . . . . . 1 
                        . . . 1 . . . 1 
                        1 . . 1 . . . . 
                        1 . . . . 1 1 . 
                        . . 1 . . . . . 
                        . . 1 . . . . 1 
                        1 1 . . 1 1 . 1 
                        `)
                } else if (P1_Range == 1500) {
                    mySpriteProjectile.setImage(img`
                        . . 3 3 2 2 . . 
                        . 3 2 2 2 2 2 . 
                        3 2 2 3 3 2 2 2 
                        3 2 3 2 2 c 2 2 
                        2 2 3 2 2 c 2 c 
                        2 2 2 c c 2 2 c 
                        . 2 2 2 2 2 c . 
                        . . 2 2 c c . . 
                        `)
                } else if (P1_Range == 1000) {
                    mySpriteProjectile.setImage(img`
                        . . . . . . e . 
                        . . . . . 5 e 5 
                        . . . . . 5 5 5 
                        . . . . 5 5 5 5 
                        . . . 5 5 5 5 4 
                        . 5 5 5 5 5 4 . 
                        e 5 5 5 5 4 . . 
                        . 5 5 5 4 . . . 
                        `)
                } else if (P1_Range == 850) {
                    mySpriteProjectile.setImage(img`
                        . 6 6 7 6 6 7 . 
                        6 1 7 7 1 7 6 6 
                        7 1 . 1 6 . 6 7 
                        6 6 7 . 6 7 6 1 
                        6 1 6 7 7 6 . 7 
                        7 1 . 6 6 6 6 7 
                        1 7 6 1 1 . 7 6 
                        . 1 7 7 6 7 7 . 
                        `)
                } else if (P1_Range == 700) {
                    mySpriteProjectile.setImage(img`
                        . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . . 
                        `)
                } else if (P1_Range == 600) {
                    mySpriteProjectile.setImage(img`
                        . . . b b . . . 
                        . . b 1 3 b . . 
                        . b 1 1 1 3 b . 
                        . d 1 3 1 1 d . 
                        . d 3 1 1 1 d . 
                        . b d 1 1 3 d . 
                        . c d d d b c . 
                        . . c b d c . . 
                        `)
                }
            }
            P1_Special_Fillage = 0
            P1_Special = 1
        }
    }
})
sprites.onCreated(SpriteKind.ShotProjectile, function (sprite) {
    timer.after(P1_Range / 2, function () {
        sprites.destroy(sprite)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Phase == 3) {
        timer.throttle("shoot1", P1_Attack_rate, function () {
            for (let value of sprites.allOfKind(SpriteKind.Player)) {
                mySpriteProjectile = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.ShotProjectile)
                mySpriteProjectile.setPosition(value.x, value.y)
                if (P1_Facing == 0) {
                    mySpriteProjectile.setVelocity(0, -150)
                } else if (P1_Facing == 1) {
                    mySpriteProjectile.setVelocity(150, 0)
                } else if (P1_Facing == 2) {
                    mySpriteProjectile.setVelocity(0, 150)
                } else if (P1_Facing == 3) {
                    mySpriteProjectile.setVelocity(-150, 0)
                }
                mySpriteProjectile.setFlag(SpriteFlag.AutoDestroy, false)
                if (P1_Range == 3400) {
                    mySpriteProjectile.setImage(img`
                        . . 2 4 5 4 . . 
                        . 5 2 5 5 5 2 . 
                        4 2 2 4 4 5 4 2 
                        5 5 5 4 2 4 2 4 
                        2 2 4 2 5 2 4 5 
                        4 5 5 2 4 2 5 4 
                        . 2 5 2 5 2 5 . 
                        . . 4 5 5 4 . . 
                        `)
                } else if (P1_Range == 3000) {
                    mySpriteProjectile.setImage(img`
                        . . . c c . . . 
                        . c a f b c . . 
                        . b f f b c c . 
                        a a f b a b a c 
                        c a c b b f f b 
                        c b f f b f a b 
                        . a f f b b b a 
                        . . a b b c c . 
                        `)
                } else if (P1_Range == 2650) {
                    mySpriteProjectile.setImage(img`
                        . . . . . 5 . . 
                        . . . b b b . . 
                        . . b 1 1 5 d . 
                        . . 5 1 f d 4 . 
                        d d b 5 5 4 4 4 
                        d 5 5 d 5 5 5 . 
                        b d b 5 5 5 5 b 
                        . b d d d 5 b . 
                        `)
                } else if (P1_Range == 2200) {
                    mySpriteProjectile.setImage(img`
                        . . . . . . c . 
                        . . . c c c 6 c 
                        . . c 6 6 3 3 c 
                        . c 6 6 6 3 3 c 
                        c 3 c 6 6 6 3 3 
                        6 c c c 6 6 6 c 
                        6 c c 6 c 6 3 c 
                        . 6 c c c 3 c c 
                        `)
                } else if (P1_Range == 2000) {
                    mySpriteProjectile.setImage(img`
                        . . . . . . . . 
                        . . f f f f . . 
                        . f d d d d f . 
                        . f b b b b f . 
                        . f b b b b f . 
                        . . f c c f . . 
                        . . . f f . . . 
                        . . . . . . . . 
                        `)
                } else if (P1_Range == 1700) {
                    mySpriteProjectile.setImage(img`
                        . . 1 1 1 7 . . 
                        . 1 7 7 7 7 7 . 
                        1 7 7 7 7 7 7 7 
                        1 7 7 7 7 7 7 6 
                        1 7 7 7 7 7 7 6 
                        7 7 7 7 7 7 7 6 
                        . 7 7 7 7 7 6 . 
                        . . 7 6 6 6 . . 
                        `)
                } else if (P1_Range == 1600) {
                    mySpriteProjectile.setImage(img`
                        . . . . 1 1 . . 
                        1 1 . . . . . 1 
                        . . . 1 . . . 1 
                        1 . . 1 . . . . 
                        1 . . . . 1 1 . 
                        . . 1 . . . . . 
                        . . 1 . . . . 1 
                        1 1 . . 1 1 . 1 
                        `)
                } else if (P1_Range == 1500) {
                    mySpriteProjectile.setImage(img`
                        . . 3 3 2 2 . . 
                        . 3 2 2 2 2 2 . 
                        3 2 2 3 3 2 2 2 
                        3 2 3 2 2 c 2 2 
                        2 2 3 2 2 c 2 c 
                        2 2 2 c c 2 2 c 
                        . 2 2 2 2 2 c . 
                        . . 2 2 c c . . 
                        `)
                } else if (P1_Range == 1000) {
                    mySpriteProjectile.setImage(img`
                        . . . . . . e . 
                        . . . . . 5 e 5 
                        . . . . . 5 5 5 
                        . . . . 5 5 5 5 
                        . . . 5 5 5 5 4 
                        . 5 5 5 5 5 4 . 
                        e 5 5 5 5 4 . . 
                        . 5 5 5 4 . . . 
                        `)
                } else if (P1_Range == 850) {
                    mySpriteProjectile.setImage(img`
                        . 6 6 7 6 6 7 . 
                        6 1 7 7 1 7 6 6 
                        7 1 . 1 6 . 6 7 
                        6 6 7 . 6 7 6 1 
                        6 1 6 7 7 6 . 7 
                        7 1 . 6 6 6 6 7 
                        1 7 6 1 1 . 7 6 
                        . 1 7 7 6 7 7 . 
                        `)
                } else if (P1_Range == 700) {
                    mySpriteProjectile.setImage(img`
                        . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . . 
                        `)
                } else if (P1_Range == 600) {
                    mySpriteProjectile.setImage(img`
                        . . . b b . . . 
                        . . b 1 3 b . . 
                        . b 1 1 1 3 b . 
                        . d 1 3 1 1 d . 
                        . d 3 1 1 1 d . 
                        . b d 1 1 3 d . 
                        . c d d d b c . 
                        . . c b d c . . 
                        `)
                }
            }
        })
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Game_Phase == 3) {
        timer.throttle("shoot2", P2_Attack_rate, function () {
            for (let value of sprites.allOfKind(SpriteKind.Player2)) {
                mySprite2Projectile = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.Projectile2)
                mySprite2Projectile.setPosition(value.x, value.y)
                if (P2_Facing == 0) {
                    mySprite2Projectile.setVelocity(0, -150)
                } else if (P2_Facing == 1) {
                    mySprite2Projectile.setVelocity(150, 0)
                } else if (P2_Facing == 2) {
                    mySprite2Projectile.setVelocity(0, 150)
                } else if (P2_Facing == 3) {
                    mySprite2Projectile.setVelocity(-150, 0)
                }
                mySprite2Projectile.setFlag(SpriteFlag.AutoDestroy, false)
                if (P2_Range == 3400) {
                    mySprite2Projectile.setImage(img`
                        . . 2 4 5 4 . . 
                        . 5 2 5 5 5 2 . 
                        4 2 2 4 4 5 4 2 
                        5 5 5 4 2 4 2 4 
                        2 2 4 2 5 2 4 5 
                        4 5 5 2 4 2 5 4 
                        . 2 5 2 5 2 5 . 
                        . . 4 5 5 4 . . 
                        `)
                } else if (P2_Range == 3000) {
                    mySprite2Projectile.setImage(img`
                        . . . c c . . . 
                        . c a f b c . . 
                        . b f f b c c . 
                        a a f b a b a c 
                        c a c b b f f b 
                        c b f f b f a b 
                        . a f f b b b a 
                        . . a b b c c . 
                        `)
                } else if (P2_Range == 2650) {
                    mySprite2Projectile.setImage(img`
                        . . . . . 5 . . 
                        . . . b b b . . 
                        . . b 1 1 5 d . 
                        . . 5 1 f d 4 . 
                        d d b 5 5 4 4 4 
                        d 5 5 d 5 5 5 . 
                        b d b 5 5 5 5 b 
                        . b d d d 5 b . 
                        `)
                } else if (P2_Range == 2200) {
                    mySprite2Projectile.setImage(img`
                        . . . . . . c . 
                        . . . c c c 6 c 
                        . . c 6 6 3 3 c 
                        . c 6 6 6 3 3 c 
                        c 3 c 6 6 6 3 3 
                        6 c c c 6 6 6 c 
                        6 c c 6 c 6 3 c 
                        . 6 c c c 3 c c 
                        `)
                } else if (P2_Range == 2000) {
                    mySprite2Projectile.setImage(img`
                        . . . . . . . . 
                        . . f f f f . . 
                        . f d d d d f . 
                        . f b b b b f . 
                        . f b b b b f . 
                        . . f c c f . . 
                        . . . f f . . . 
                        . . . . . . . . 
                        `)
                } else if (P2_Range == 1700) {
                    mySprite2Projectile.setImage(img`
                        . . 1 1 1 7 . . 
                        . 1 7 7 7 7 7 . 
                        1 7 7 7 7 7 7 7 
                        1 7 7 7 7 7 7 6 
                        1 7 7 7 7 7 7 6 
                        7 7 7 7 7 7 7 6 
                        . 7 7 7 7 7 6 . 
                        . . 7 6 6 6 . . 
                        `)
                } else if (P2_Range == 1600) {
                    mySprite2Projectile.setImage(img`
                        . . . . 1 1 . . 
                        1 1 . . . . . 1 
                        . . . 1 . . . 1 
                        1 . . 1 . . . . 
                        1 . . . . 1 1 . 
                        . . 1 . . . . . 
                        . . 1 . . . . 1 
                        1 1 . . 1 1 . 1 
                        `)
                } else if (P2_Range == 1500) {
                    mySprite2Projectile.setImage(img`
                        . . 3 3 2 2 . . 
                        . 3 2 2 2 2 2 . 
                        3 2 2 3 3 2 2 2 
                        3 2 3 2 2 c 2 2 
                        2 2 3 2 2 c 2 c 
                        2 2 2 c c 2 2 c 
                        . 2 2 2 2 2 c . 
                        . . 2 2 c c . . 
                        `)
                } else if (P2_Range == 1000) {
                    mySprite2Projectile.setImage(img`
                        . . . . . . e . 
                        . . . . . 5 e 5 
                        . . . . . 5 5 5 
                        . . . . 5 5 5 5 
                        . . . 5 5 5 5 4 
                        . 5 5 5 5 5 4 . 
                        e 5 5 5 5 4 . . 
                        . 5 5 5 4 . . . 
                        `)
                } else if (P2_Range == 850) {
                    mySprite2Projectile.setImage(img`
                        . 6 6 7 6 6 7 . 
                        6 1 7 7 1 7 6 6 
                        7 1 . 1 6 . 6 7 
                        6 6 7 . 6 7 6 1 
                        6 1 6 7 7 6 . 7 
                        7 1 . 6 6 6 6 7 
                        1 7 6 1 1 . 7 6 
                        . 1 7 7 6 7 7 . 
                        `)
                } else if (P2_Range == 700) {
                    mySprite2Projectile.setImage(img`
                        . . . b b . . . 
                        . . b 5 5 b . . 
                        . b 5 d 1 5 b . 
                        . b 5 3 1 5 b . 
                        . c 5 3 1 d c . 
                        . c 5 1 d d c . 
                        . . f d d f . . 
                        . . . f f . . . 
                        `)
                } else if (P2_Range == 600) {
                    mySprite2Projectile.setImage(img`
                        . . . b b . . . 
                        . . b 1 3 b . . 
                        . b 1 1 1 3 b . 
                        . d 1 3 1 1 d . 
                        . d 3 1 1 1 d . 
                        . b d 1 1 3 d . 
                        . c d d d b c . 
                        . . c b d c . . 
                        `)
                }
            }
        })
    }
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    sprites.destroy(sprite)
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile16`)) {
        tiles.setTileAt(location, assets.tile`myTile14`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile14`)) {
        tiles.setTileAt(location, assets.tile`myTile`)
        tiles.setWallAt(location, false)
    }
})
function reStart () {
    P1_Special = 1
    P2_Special = 1
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 80, 80)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player2)
    controller.player2.moveSprite(mySprite2, 80, 80)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 7))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(22, 15))
    color.startFade(color.Black, color.originalPalette)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
    story.spriteSayText(mySprite, "Pick a fighter P1")
    story.spriteSayText(mySprite2, "Pick a fighter P2")
}
sprites.onCreated(SpriteKind.Projectile2, function (sprite) {
    timer.after(P2_Range / 2, function () {
        sprites.destroy(sprite)
    })
})
scene.onHitWall(SpriteKind.ShotProjectile, function (sprite, location) {
    sprites.destroy(sprite)
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile16`)) {
        tiles.setTileAt(location, assets.tile`myTile14`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`myTile14`)) {
        tiles.setTileAt(location, assets.tile`myTile`)
        tiles.setWallAt(location, false)
    }
})
// This block is for creating players image
function Make_player_images () {
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    if (P1_Range == 3400) {
        mySprite.setImage(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    } else if (P1_Range == 3000) {
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
    } else if (P1_Range == 2650) {
        mySprite.setImage(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
    } else if (P1_Range == 2200) {
        mySprite.setImage(img`
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . c c . c 6 c c 3 3 3 3 3 c . 
            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
            b 5 4 b 4 4 4 4 b b 5 c b b . . 
            c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `)
    } else if (P1_Range == 2000) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (P1_Range == 1700) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . f f f f d b 1 b d c f f f . . 
            f c 1 1 1 c f b f b c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f b f f f f f f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    } else if (P1_Range == 1600) {
        mySprite.setImage(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
    } else if (P1_Range == 1500) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f e e f f c c . . 
            . . f f f f f e e f f c c f . . 
            . . f f f b f e e f b f f f . . 
            . . . f 4 1 f 4 4 f 1 4 f . . . 
            . . . f e 4 4 4 4 4 4 e f . . . 
            . . . f f f e e e e f f f . . . 
            . . f e f b 7 7 7 7 b f e f . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . e e f 6 6 6 6 6 6 f e e . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (P1_Range == 1000) {
        mySprite.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `)
    } else if (P1_Range == 850) {
        mySprite.setImage(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `)
    } else if (P1_Range == 700) {
        mySprite.setImage(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `)
    } else if (P1_Range == 600) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `)
    }
    mySprite2 = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player2)
    if (P2_Range == 3400) {
        mySprite2.setImage(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `)
    } else if (P2_Range == 3000) {
        mySprite2.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
    } else if (P2_Range == 2650) {
        mySprite2.setImage(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
    } else if (P2_Range == 2200) {
        mySprite2.setImage(img`
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . c c . c 6 c c 3 3 3 3 3 c . 
            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
            b 5 4 b 4 4 4 4 b b 5 c b b . . 
            c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `)
    } else if (P2_Range == 2000) {
        mySprite2.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (P2_Range == 1700) {
        mySprite2.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d 1 1 1 1 1 1 1 1 d f . . 
            . . f d d d 1 1 1 1 d d d f . . 
            . . f b d b f d d f b d b f . . 
            . . f c d c f 1 1 f c d c f . . 
            . . . f b 1 1 1 1 1 1 b f . . . 
            . f f f f d b 1 b d c f f f . . 
            f c 1 1 1 c f b f b c 1 1 1 c f 
            f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
            f b f b f b f f f f f f b f b f 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    } else if (P2_Range == 1600) {
        mySprite2.setImage(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
    } else if (P2_Range == 1500) {
        mySprite2.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f c f f f . . . 
            . . f f f f f f c c f f f c . . 
            . . f f f c f f f f f f f c . . 
            . . c c c f f f e e f f c c . . 
            . . f f f f f e e f f c c f . . 
            . . f f f b f e e f b f f f . . 
            . . . f 4 1 f 4 4 f 1 4 f . . . 
            . . . f e 4 4 4 4 4 4 e f . . . 
            . . . f f f e e e e f f f . . . 
            . . f e f b 7 7 7 7 b f e f . . 
            . . e 4 f 7 7 7 7 7 7 f 4 e . . 
            . . e e f 6 6 6 6 6 6 f e e . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (P2_Range == 1000) {
        mySprite2.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `)
    } else if (P2_Range == 850) {
        mySprite2.setImage(img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `)
    } else if (P2_Range == 700) {
        mySprite2.setImage(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `)
    } else if (P2_Range == 600) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `)
    }
}
let P1_Health = 0
let P2_Health = 0
let P2_Special_Recharge = 0
let P1_Special_Recharge = 0
let P2_Facing = 0
let P1_Facing = 0
let P1_Attack_rate = 0
let mySpriteProjectile: Sprite = null
let P1_Range = 0
let P1_Special = 0
let P1_Special_Fillage = 0
let P1_Damage = 0
let mySprite: Sprite = null
let P2_Attack_rate = 0
let statusbar2: StatusBarSprite = null
let mySprite2Projectile: Sprite = null
let P2_Range = 0
let mySprite2: Sprite = null
let P2_Special = 0
let Game_Phase = 0
let P2_Special_Fillage = 0
let P2_Damage = 0
let statusbar: StatusBarSprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 180
}
reStart()
game.onUpdateInterval(7000, function () {
    if (Game_Phase == 3) {
        timer.after(7000, function () {
            statusbar.value += 10
            statusbar2.value += 10
        })
    }
})
game.onUpdateInterval(10, function () {
    if (Game_Phase == 3) {
        P2_Special_Fillage += 10
        P1_Special_Fillage += 10
        if (P1_Special_Fillage >= P1_Special_Recharge) {
            P1_Special_Fillage = P1_Special_Recharge
            if (P1_Special == 1) {
                mySprite.startEffect(effects.halo, 599900)
            }
            P1_Special = 0
        }
        if (P2_Special_Fillage >= P2_Special_Recharge) {
            P2_Special_Fillage = P2_Special_Recharge
            if (P2_Special == 1) {
                mySprite2.startEffect(effects.halo, 5099990)
            }
            P2_Special = 0
        }
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        P1_Facing = 0
    } else if (controller.right.isPressed()) {
        P1_Facing = 1
    } else if (controller.down.isPressed()) {
        P1_Facing = 2
    } else if (controller.left.isPressed()) {
        P1_Facing = 3
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        P2_Facing = 0
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        P2_Facing = 1
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        P2_Facing = 2
    } else if (controller.player2.isPressed(ControllerButton.Left)) {
        P2_Facing = 3
    }
})
/**
 * This is for player creation and stat fromage
 */
forever(function () {
    if (Game_Phase <= 1) {
        if (controller.player2.isPressed(ControllerButton.A)) {
            if (!(mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile0`))) {
                controller.moveSprite(mySprite2, 0, 0)
                timer.after(100, function () {
                    sprites.destroy(mySprite2, effects.ashes, 500)
                    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`myTile0`)
                    Game_Phase += 1
                })
            }
            if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
                story.spriteSayText(mySprite2, "You picked joe")
                P2_Damage = 13
                P2_Attack_rate = 500
                P2_Health = 200
                P2_Range = 2000
                P2_Special_Recharge = 20500
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                story.spriteSayText(mySprite2, "You picked simon")
                P2_Damage = 15
                P2_Attack_rate = 600
                P2_Health = 190
                P2_Range = 1700
                P2_Special_Recharge = 18500
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
                story.spriteSayText(mySprite2, "You picked james")
                P2_Damage = 7
                P2_Attack_rate = 300
                P2_Health = 210
                P2_Range = 1500
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
                story.spriteSayText(mySprite2, "You picked bob")
                P2_Damage = 20
                P2_Attack_rate = 700
                P2_Health = 170
                P2_Range = 3000
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
                story.spriteSayText(mySprite2, "You picked cam")
                P2_Damage = 9
                P2_Attack_rate = 275
                P2_Health = 245
                P2_Range = 700
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
                story.spriteSayText(mySprite2, "You picked mike")
                P2_Damage = 28
                P2_Attack_rate = 950
                P2_Health = 220
                P2_Range = 1000
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
                story.spriteSayText(mySprite2, "You picked will")
                P2_Damage = 13
                P2_Attack_rate = 550
                P2_Health = 205
                P2_Range = 3400
                P2_Special_Recharge = 22500
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
                story.spriteSayText(mySprite2, "You picked sam")
                P2_Damage = 8
                P2_Attack_rate = 375
                P2_Health = 270
                P2_Range = 850
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
                story.spriteSayText(mySprite2, "You picked ben")
                P2_Damage = 22
                P2_Attack_rate = 850
                P2_Health = 185
                P2_Range = 1600
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
                story.spriteSayText(mySprite2, "You picked cael")
                P2_Damage = 44
                P2_Attack_rate = 1800
                P2_Health = 265
                P2_Range = 2200
                P2_Special_Recharge = 25000
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
                story.spriteSayText(mySprite2, "You picked dally")
                P2_Damage = 12
                P2_Attack_rate = 450
                P2_Health = 250
                P2_Range = 2650
            } else if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
                story.spriteSayText(mySprite2, "You picked david")
                P2_Damage = 33
                P2_Attack_rate = 1100
                P2_Health = 295
                P2_Range = 600
            }
        }
    }
})
forever(function () {
    if (Game_Phase <= 1) {
        if (controller.A.isPressed()) {
            if (!(mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`))) {
                controller.moveSprite(mySprite, 0, 0)
                timer.after(100, function () {
                    sprites.destroy(mySprite, effects.ashes, 500)
                    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
                    Game_Phase += 1
                })
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
                story.spriteSayText(mySprite, "You picked joe")
                P1_Damage = 13
                P1_Attack_rate = 500
                P1_Health = 200
                P1_Range = 2000
                P1_Special_Recharge = 20500
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
                story.spriteSayText(mySprite, "You picked simon")
                P1_Damage = 15
                P1_Attack_rate = 600
                P1_Health = 190
                P1_Range = 1700
                P1_Special_Recharge = 18500
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
                story.spriteSayText(mySprite, "You picked james")
                P1_Damage = 7
                P1_Attack_rate = 300
                P1_Health = 210
                P1_Range = 1500
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
                story.spriteSayText(mySprite, "You picked bob")
                P1_Damage = 20
                P1_Attack_rate = 700
                P1_Health = 170
                P1_Range = 3000
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
                story.spriteSayText(mySprite, "You picked cam")
                P1_Damage = 9
                P1_Attack_rate = 275
                P1_Health = 245
                P1_Range = 700
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
                story.spriteSayText(mySprite, "You picked mike")
                P1_Damage = 28
                P1_Attack_rate = 950
                P1_Health = 220
                P1_Range = 1000
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
                story.spriteSayText(mySprite, "You picked will")
                P1_Damage = 13
                P1_Attack_rate = 550
                P1_Health = 205
                P1_Range = 3400
                P1_Special_Recharge = 22500
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
                story.spriteSayText(mySprite, "You picked sam")
                P1_Damage = 8
                P1_Attack_rate = 375
                P1_Health = 270
                P1_Range = 850
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
                story.spriteSayText(mySprite, "You picked ben")
                P1_Damage = 22
                P1_Attack_rate = 850
                P1_Health = 185
                P1_Range = 1600
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
                story.spriteSayText(mySprite, "You picked cael")
                P1_Damage = 44
                P1_Attack_rate = 1800
                P1_Health = 265
                P1_Range = 2200
                P1_Special_Recharge = 25000
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
                story.spriteSayText(mySprite, "You picked dally")
                P1_Damage = 12
                P1_Attack_rate = 450
                P1_Health = 250
                P1_Range = 2650
            } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
                story.spriteSayText(mySprite, "You picked david")
                P1_Damage = 33
                P1_Attack_rate = 1100
                P1_Health = 295
                P1_Range = 600
            }
        }
    }
})
game.onUpdateInterval(100, function () {
    if (Game_Phase == 2) {
        Game_Phase = 3
        timer.after(3000, function () {
            color.startFade(color.originalPalette, color.Black, 500)
            timer.after(1000, function () {
                color.startFade(color.Black, color.originalPalette, 500)
                Make_player_images()
                statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                statusbar.max = P1_Health
                statusbar.value = P1_Health
                statusbar.attachToSprite(mySprite, 1, 0)
                statusbar.setBarBorder(1, 15)
                statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
                statusbar2.max = P2_Health
                statusbar2.value = P2_Health
                statusbar2.attachToSprite(mySprite2, 1, 0)
                statusbar2.setBarBorder(1, 15)
                splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
                splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
                controller.moveSprite(mySprite, 60, 60)
                controller.player2.moveSprite(mySprite2, 60, 60)
                tiles.setCurrentTilemap(tilemap`level5`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
                tiles.placeOnTile(mySprite2, tiles.getTileLocation(37, 37))
            })
        })
    }
})
