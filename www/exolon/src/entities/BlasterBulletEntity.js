define(
  [
    "src/me",
    "src/global",
    "src/entities/BlasterExplosion",
  ],
  function (
    me,
    global,
    BlasterExplosion
  ) {
      
  var BlasterBulletEntity = me.ObjectEntity.extend({
    
    init: function (x, y, direction) {
      var settings = {};
      settings.image = "blaster_bullet";
      this.parent(x, y, settings);
      
      this.name = "blaster_bullet";
      
      this.direction = direction;
      this.gravity = 0;
      this.passedDistance = 0;
      
      this.configureVelocity();
    },
    
    update: function () {
      this.updateMovement();
      this.updatePassedDistance();
      this.handleCollisions();
      return true;
    },
    
    configureVelocity: function () {
      this.vel.x = this.direction == "right" ? BlasterBulletEntity.SPEED : -BlasterBulletEntity.SPEED;
    },
    
    updatePassedDistance: function () {
      this.passedDistance += BlasterBulletEntity.SPEED;
      if (this.passedDistance > BlasterBulletEntity.RANGE) {
        me.game.remove(this);
      }
    },
    
    handleCollisions: function () {
      var res = me.game.collide(this);
      
      if (this.vel.x == 0 || (res && (res.obj.isSolid || res.obj.isDestroyable))) {
        me.game.remove(this);
      }
      
      if (res && res.obj.isSolid) {
        this.createExplosion();
      }
    },
    
    createExplosion: function () {
      var explosion = new BlasterExplosion(this.pos.x, this.pos.y - 5);
      me.game.add(explosion, this.z);
      me.game.sort.defer();
      
      me.audio.play("explosion2");
    },
    
    onDestroyEvent: function () {
      global.aliveBlasterBulletCount--;
    },
    
  });
  
  BlasterBulletEntity.SPEED = 6;
  BlasterBulletEntity.WIDTH = 16;
  BlasterBulletEntity.RANGE = 210;
  
  return BlasterBulletEntity;
  
});
