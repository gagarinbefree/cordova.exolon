var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var GameEngine = (function (_super) {
                    __extends(GameEngine, _super);
                    function GameEngine() {
                        _super.call(this, 1024, 800, Phaser.CANVAS, 'content', null, null, false);
                        this.state.add('Boot', Client.Boot, false);
                        this.state.add('Preloader', Client.Preloader, false);
                        this.state.add('MainMenu', Client.MainMenu, false);
                        this.state.add('Level01', Client.Level01, false);
                        this.state.start('Boot');
                    }
                    return GameEngine;
                }(Phaser.Game));
                Client.GameEngine = GameEngine;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
window.onload = function () {
    new exolon.phaser.ts.Client.GameEngine();
};
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var Player = (function (_super) {
                    __extends(Player, _super);
                    function Player(game, x, y) {
                        _super.call(this, game, x, y, 'hero');
                        this.jumpTimer = 0;
                        this.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 20, true);
                        this.animations.add('left', [19, 18, 17, 16, 15, 14, 13, 12, 11, 10], 20, true);
                        this.animations.add('downleft', [23], 20, true);
                        this.animations.add('downright', [21], 20, true);
                        this.animations.add('jumpleft', [11], 20, true);
                        this.animations.add('jumpright', [8], 20, true);
                        game.add.existing(this);
                        game.physics.arcade.enable(this);
                        this.body.collideWorldBounds = true;
                        this.body.gravity.y = 300;
                        this.scale = new Phaser.Point(4, 4);
                    }
                    Player.prototype.update = function () {
                        var anim = this.animations.currentAnim;
                        var keys = this.game.input.keyboard;
                        this.body.velocity.x = 0;
                        if (keys.isDown(Phaser.Keyboard.LEFT) && this.body.touching.down) {
                            this.body.velocity.x = -150;
                            this.animations.play('left');
                        }
                        else if (keys.isDown(Phaser.Keyboard.RIGHT) && this.body.touching.down) {
                            this.body.velocity.x = 150;
                            this.animations.play('right');
                        }
                        else if (keys.isDown(Phaser.Keyboard.DOWN) && this.body.touching.down) {
                            if (this._sideAnim(anim) == 1)
                                this.animations.play('downright');
                            else
                                this.animations.play('downleft');
                        }
                        else if (keys.isDown(Phaser.Keyboard.UP) && this.body.touching.down) {
                            if (this.body.touching.down && this.jumpTimer === 0) {
                                this.jumpTimer = 1;
                                this.body.velocity.y = -256;
                            }
                            else if (this.jumpTimer > 0 && this.jumpTimer < 31) {
                                this.jumpTimer++;
                                this.body.velocity.y = -256 + (this.jumpTimer * 7);
                            }
                            if (this._sideAnim(anim) == 1) {
                                this.animations.play('jumpright');
                            }
                            else {
                                this.animations.play('jumpleft');
                            }
                        }
                        else {
                            if (this.body.touching.down || this.jumpTimer == 0) {
                                if (this._sideAnim(anim) == 1)
                                    this.animations.frame = 0;
                                else
                                    this.animations.frame = 14;
                                this.jumpTimer = 0;
                            }
                        }
                    };
                    Player.prototype._sideAnim = function (anim) {
                        return anim.name.lastIndexOf('right') > -1 ? 1 : 0;
                    };
                    return Player;
                }(Phaser.Sprite));
                Client.Player = Player;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var Boot = (function (_super) {
                    __extends(Boot, _super);
                    function Boot() {
                        _super.apply(this, arguments);
                    }
                    Boot.prototype.preload = function () {
                    };
                    Boot.prototype.create = function () {
                        this.stage.setBackgroundColor(0x000000);
                        this.input.maxPointers = 1;
                        this.stage.disableVisibilityChange = true;
                        if (this.game.device.desktop) {
                            this.scale.pageAlignHorizontally = true;
                        }
                        else {
                            this.scale.minWidth = 960;
                            this.scale.minHeight = 660;
                            this.scale.maxWidth = 960;
                            this.scale.maxHeight = 660;
                            this.scale.forceLandscape = true;
                            this.scale.pageAlignHorizontally = true;
                            this.scale.refresh();
                        }
                        this.game.state.start('Preloader', true, false);
                    };
                    return Boot;
                }(Phaser.State));
                Client.Boot = Boot;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var Level01 = (function (_super) {
                    __extends(Level01, _super);
                    function Level01() {
                        _super.apply(this, arguments);
                    }
                    Level01.prototype.preload = function () {
                        this.tilemapLoader = this.load.tilemap('TilemapLevel01', 'assets/tilemaps/maps/map01.json', null, Phaser.Tilemap.TILED_JSON);
                        this.imageLoader = this.load.image('TileLevel01', 'assets/tilemaps/maps/map01.png');
                    };
                    Level01.prototype.create = function () {
                        this.map = this.game.add.tilemap('TilemapLevel01', 8, 8, 32, 22);
                        this.tileset = this.map.addTilesetImage('8x8', 'TileLevel01');
                        this.groundGroup = this._createGround();
                        this.tilesLayer01 = this._createLayer('TilesLayer01Level01');
                        this.player = this._createPlayer('right');
                        this.tilesLayer02 = this._createLayer('TilesLayer02Level01');
                        this.physics.startSystem(Phaser.Physics.ARCADE);
                        this.game.world.enableBody = true;
                    };
                    Level01.prototype.update = function () {
                        this.game.physics.arcade.collide(this.player, this.groundGroup);
                    };
                    Level01.prototype._createLayer = function (layer) {
                        var result = this.map.createLayer(layer);
                        result.scale = new Phaser.Point(4, 4);
                        return result;
                    };
                    Level01.prototype._createPlayer = function (animationName) {
                        var result = new Client.Player(this.game, 135, 400);
                        result.animations.play(animationName);
                        return result;
                    };
                    Level01.prototype._findObjectsByType = function (type, map, layer) {
                        var result = new Array();
                        this.map.objects[layer].forEach(function (element) {
                            if (element.type === type) {
                                result.push(element);
                            }
                        });
                        return result;
                    };
                    Level01.prototype._createFromTiledObject = function (element, group) {
                        var sprite = this.game.add.sprite(element.x * 4, element.y * 4);
                        sprite.width = element.width * 4;
                        sprite.height = element.height * 4;
                        sprite.name = element.name;
                        sprite.key = element.name;
                        group.add(sprite);
                        this.groundSprite = sprite;
                    };
                    Level01.prototype._createGround = function () {
                        var self = this;
                        var result = this.game.add.group();
                        result.enableBody = true;
                        result.physicsBodyType = Phaser.Physics.ARCADE;
                        var grounds = this._findObjectsByType('ground', this.map, 'ObjectsLayerLevel01');
                        grounds.forEach(function (element) {
                            self._createFromTiledObject(element, result);
                        }, this);
                        result.setAll('body.allowGravity', false);
                        result.setAll('body.immovable', true);
                        return result;
                    };
                    Level01.prototype.render = function () {
                        this.game.debug.text(Math.round(this.player.x).toString() + ';' + Math.round(this.player.y).toString(), 0, 800);
                    };
                    Level01.prototype.renderGroup = function (member) {
                        this.game.debug.body(member);
                    };
                    return Level01;
                }(Phaser.State));
                Client.Level01 = Level01;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var MainMenu = (function (_super) {
                    __extends(MainMenu, _super);
                    function MainMenu() {
                        _super.apply(this, arguments);
                    }
                    MainMenu.prototype.create = function () {
                        this.game.state.start('Level01', true, false);
                    };
                    MainMenu.prototype.fadeOut = function () {
                        this.add.audio('click', 1, false).play();
                        var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
                        tween.onComplete.add(this.startGame, this);
                    };
                    MainMenu.prototype.startGame = function () {
                        this.game.state.start('Level01', true, false);
                    };
                    return MainMenu;
                }(Phaser.State));
                Client.MainMenu = MainMenu;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
var exolon;
(function (exolon) {
    var phaser;
    (function (phaser) {
        var ts;
        (function (ts) {
            var Client;
            (function (Client) {
                var Preloader = (function (_super) {
                    __extends(Preloader, _super);
                    function Preloader() {
                        _super.apply(this, arguments);
                    }
                    Preloader.prototype.preload = function () {
                        this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                        this.loaderText.anchor.setTo(0.5);
                        this.load.image('titlepage', './assets/ui/titlePage.png');
                        this.load.image('logo', './assets/ui/gameLogo.png');
                        this.load.audio('click', './assets/sounds/click.ogg', true);
                        this.load.spritesheet('hero', 'assets/tilemaps/hero/hero.png', 24, 32);
                    };
                    Preloader.prototype.create = function () {
                        var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
                        tween.onComplete.add(this.startMainMenu, this);
                    };
                    Preloader.prototype.startMainMenu = function () {
                        this.game.state.start('MainMenu', true, false);
                    };
                    return Preloader;
                }(Phaser.State));
                Client.Preloader = Preloader;
            })(Client = ts.Client || (ts.Client = {}));
        })(ts = phaser.ts || (phaser.ts = {}));
    })(phaser = exolon.phaser || (exolon.phaser = {}));
})(exolon || (exolon = {}));
//# sourceMappingURL=game.js.map