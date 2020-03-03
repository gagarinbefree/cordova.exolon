define(
  [
    "src/util",
    "src/entities/KamikazeEntity",
    "src/behaviors/AccelerationMovementBehavior",
    "src/behaviors/CircularMovementBehavior",
    "src/behaviors/SwingMovementBehavior",
  ],
  function (
    util,
    KamikazeEntity,
    AccelerationMovementBehavior,
    CircularMovementBehavior,
    SwingMovementBehavior
  ) {
      
  var LouseEntity = KamikazeEntity.extend({
    
    points: 150,
    
    init: function (x, y, behavior) {
      var settings = {};
      settings.image = "louse";
      settings.spritewidth = LouseEntity.WIDTH;
      settings.spriteheight = LouseEntity.HEIGHT;
      this.parent(x, y + LouseEntity.HEIGHT, settings);
      
      this.addAnimation("yellow", [0,1,2,1]);
      this.addAnimation("purple", [3,4,5,4]);
      this.addAnimation("cyan", [6,7,8,7]);
      this.addAnimation("green", [9,10,11,10]);
      this.addAnimation("white", [12,13,14,13]);
      this.addAnimation("red", [15,16,17,16]);
      
      this.setCurrentAnimation(util.arrayRandomElement(["green", "cyan", "purple", "yellow", "red", "white"]));
      
      this.animationspeed = 1;
      this.gravity = 0;
      this.collidable = true;
      this.isDestroyable = true;
      
      if (behavior == "acceleration") {
        this.behavior = new AccelerationMovementBehavior(this);
      }
      else if (behavior == "circular") {
        this.behavior = new CircularMovementBehavior(this);
      }
      else if (behavior == "swing") {
        this.behavior = new SwingMovementBehavior(this);
      }
    },
    
    updateMovement: function () {
      this.behavior.update();
    },
    
  });
  
  LouseEntity.WIDTH = 32;
  LouseEntity.HEIGHT = 32;
  
  return LouseEntity;
  
});
