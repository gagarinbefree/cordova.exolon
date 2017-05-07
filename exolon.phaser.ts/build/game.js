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
                        _super.call(this, game, x, y, 'level01-sprites', 1);
                        this.anchor.setTo(0.5);
                        this.animations.add('fly', [0, 1], 5, true);
                        game.add.existing(this);
                        game.physics.enable(this);
                        this.body.collideWorldBounds = true;
                        this.body.setCircle(20);
                    }
                    Player.prototype.update = function () {
                        this.body.velocity.x = 0;
                        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                            this.body.velocity.x = -50;
                            this.animations.play('fly');
                            if (this.scale.x === -1) {
                                this.scale.x = 1;
                            }
                        }
                        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                            this.body.velocity.x = 50;
                            this.animations.play('fly');
                            if (this.scale.x === 1) {
                                this.scale.x = -1;
                            }
                        }
                        else {
                            this.animations.frame = 0;
                        }
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
                        this.layer = this.map.createLayer('TilesLayerLevel01');
                        this.layer.resizeWorld();
                        this.layer.scale = new Phaser.Point(4, 4);
                        this.physics.startSystem(Phaser.Physics.ARCADE);
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