module exolon.phaser.ts.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        map: Phaser.Tilemap;
        layer01: Phaser.TilemapLayer;
        layer02: Phaser.TilemapLayer;
        tileset: Phaser.Tileset;
        tilemapLoader: Phaser.Loader;
        imageLoader: Phaser.Loader;

        preload() {
            this.tilemapLoader = this.load.tilemap('TilemapLevel01', 'assets/tilemaps/maps/map01.json', null, Phaser.Tilemap.TILED_JSON);
            this.imageLoader = this.load.image('TileLevel01', 'assets/tilemaps/maps/map01.png');
        }
    
        create() {                    
            this.map = this.game.add.tilemap('TilemapLevel01', 8, 8, 32, 22);
            
            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
            this.tileset = this.map.addTilesetImage('8x8', 'TileLevel01');

            //  Creates a layer from the World1 layer in the map data.
            //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
            this.layer01 = this.map.createLayer('TilesLayer01Level01');
            //  This resizes the game world to match the layer dimensions
            // this.layer.resizeWorld();
            this.layer01.scale = new Phaser.Point(4, 4);            

            this.player = new Player(this.game, 140, 448);
            //this.player.anchor.setTo(3, 10);
            this.player.scale = new Phaser.Point(4, 4);

            this.layer02 = this.map.createLayer('TilesLayer02Level01');
            //  This resizes the game world to match the layer dimensions
            // this.layer.resizeWorld();
            this.layer02.scale = new Phaser.Point(4, 4);            

            this.physics.startSystem(Phaser.Physics.ARCADE);

            //this.background = this.add.sprite(0, 0, 'level01-sprites','background');                       
                       
            this.game.physics.arcade.enable(this.player);
        }
    }
}