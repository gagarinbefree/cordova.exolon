module exolon.phaser.ts.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        map: Phaser.Tilemap;

        tilesLayer01: Phaser.TilemapLayer;
        tilesLayer02: Phaser.TilemapLayer;

        tileset: Phaser.Tileset;
        tilemapLoader: Phaser.Loader;
        imageLoader: Phaser.Loader;

        groundGroup: Phaser.Group;

        groundSprite: Phaser.Sprite;
       
        preload() {
            this.tilemapLoader = this.load.tilemap('TilemapLevel01', 'assets/tilemaps/maps/map01.json', null, Phaser.Tilemap.TILED_JSON);
            this.imageLoader = this.load.image('TileLevel01', 'assets/tilemaps/maps/map01.png');
        }

        create() {
            // map
            this.map = this.game.add.tilemap('TilemapLevel01', 8, 8, 32, 22);
            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
            this.tileset = this.map.addTilesetImage('8x8', 'TileLevel01');

            // ground        
            this.groundGroup = this._createGround();

            // layer01
            this.tilesLayer01 = this._createLayer('TilesLayer01Level01');

            // player  
            this.player = this._createPlayer('right');            

            // layer02
            this.tilesLayer02 = this._createLayer('TilesLayer02Level01');                        

            // physics
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.world.enableBody = true;
        }            

        update() {
            this.game.physics.arcade.collide(this.player, this.groundGroup);
        }
  
        //  Creates a layer
        private _createLayer(layer: string): Phaser.TilemapLayer {            
            //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
            var result: Phaser.TilemapLayer = this.map.createLayer(layer);
            //  This resizes the game world to match the layer dimensions
            // this.layer.resizeWorld();
            result.scale = new Phaser.Point(4, 4);   

            return result;  
        }        

        // Creates player  
        private _createPlayer(animationName: string): Player  {            
            var result: Player = new Player(this.game, 135, 400);            
                        
            result.animations.play(animationName);

            return result;
        }

        private _findObjectsByType(type: string, map: Phaser.Tilemap, layer: string): any[] {
            var result: any[] = new Array();
            this.map.objects[layer].forEach(function (element: any) {
                if (element.type === type) {
                    result.push(element);
                }
            });

            return result;
        }

        private _createFromTiledObject(element: any, group: Phaser.Group) {
            var sprite: Phaser.Sprite = this.game.add.sprite(element.x * 4, element.y * 4);
            sprite.width = element.width * 4;
            sprite.height = element.height * 4;
            sprite.name = element.name;
            sprite.key = element.name;            

            group.add(sprite);

            this.groundSprite = sprite;
        }

        private _createGround(): Phaser.Group {           
            var self: any = this;

            var result: Phaser.Group = this.game.add.group();
            result.enableBody = true;    
            result.physicsBodyType = Phaser.Physics.ARCADE;                                                      

            var grounds: any[] = this._findObjectsByType('ground', this.map, 'ObjectsLayerLevel01');
            grounds.forEach(function (element: any) {
                self._createFromTiledObject(element, result);
            }, this);

            result.setAll('body.allowGravity', false);
            result.setAll('body.immovable', true);

            return result;
        }

        // test
        render() {
            //this.groundGroup.forEachAlive(this.renderGroup, this);
            this.game.debug.text(Math.round(this.player.x).toString() + ';' + Math.round(this.player.y).toString(), 0, 800);
        }

        renderGroup(member) {
            this.game.debug.body(member);
        }       
    }
}