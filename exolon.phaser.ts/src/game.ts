module exolon.phaser.ts.Client {

    export class GameEngine extends Phaser.Game {
        //public scaleRate: number = 4;

        constructor() {
            super(1024, 800, Phaser.CANVAS, 'content', null, null, false);

            
            
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level01', Level01, false);

            this.state.start('Boot');
        }
    }
}

window.onload = () => {
    new exolon.phaser.ts.Client.GameEngine();
};