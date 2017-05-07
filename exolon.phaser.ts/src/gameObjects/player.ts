module exolon.phaser.ts.Client {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y,'hero');
            //this.anchor.setTo(0.5);

            this.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.animations.add('left', [10, 11, 12, 13, 14, 15, 15, 17, 18, 19]);            

            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            this.body.collideWorldBounds = true;
            this.body.setCircle(20);
        }

        update() {
            this.body.velocity.x = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -50;
                this.animations.play('fly');
                if (this.scale.x === -1) {
                    this.scale.x = 1;
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 50;
                this.animations.play('fly');
                if (this.scale.x === 1) {
                    this.scale.x = -1;
                }
            } else {
                this.animations.frame = 0;
            }
        }
    }
}