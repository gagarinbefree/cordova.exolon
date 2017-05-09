module exolon.phaser.ts.Client {

    export class Player extends Phaser.Sprite {
        jumpTimer: number = 0;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'hero');

            this.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, true);
            this.animations.add('left', [19, 18, 17, 16, 15, 14, 13, 12, 11, 10], 20, true);
            this.animations.add('downleft', [23], 20, true);
            this.animations.add('downright', [21], 20, true);
            this.animations.add('jumpleft', [11], 20, true)
            this.animations.add('jumpright', [8], 20, true)
            
            game.add.existing(this);
            // Physics
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;           
            this.body.gravity.y = 300;
                        
            this.scale = new Phaser.Point(4, 4);   
        }

        update() {
            var anim: Phaser.Animation = this.animations.currentAnim;
            var keys: Phaser.Keyboard = this.game.input.keyboard;
                    
            this.body.velocity.x = 0;
            if (keys.isDown(Phaser.Keyboard.LEFT) && this.body.touching.down) {
                this.body.velocity.x = -150;
                this.animations.play('left');
            } else if (keys.isDown(Phaser.Keyboard.RIGHT) && this.body.touching.down) {
                this.body.velocity.x = 150;
                this.animations.play('right');
            } else if (keys.isDown(Phaser.Keyboard.DOWN) && this.body.touching.down) {
                if (this._sideAnim(anim) == 1)
                    this.animations.play('downright');
                else
                    this.animations.play('downleft');
            } else if (keys.isDown(Phaser.Keyboard.UP) && this.body.touching.down) {
                if (this.body.touching.down) {
                    this.body.velocity.y = -256;
                }
                
                if (this._sideAnim(anim) == 1) {
                    this.animations.play('jumpright');                    
                }
                else {
                    this.animations.play('jumpleft');
                }

                //this.body.velocity.y = -350;     
            } else {
                if (this.body.touching.down) {
                    if (this._sideAnim(anim) == 1)
                        this.animations.frame = 0;
                    else
                        this.animations.frame = 14;

                    this.body.gravity.x = 0;
                }
            } 
        }

        // right - 1; left - 0;
        private _sideAnim(anim: Phaser.Animation): number {
            return anim.name.lastIndexOf('right') > -1 ? 1 : 0;
        }
    }
}