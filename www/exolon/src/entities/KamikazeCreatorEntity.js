define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var KamikazeCreatorEntity = Object.extend({
    
    // in sec
    delay: 5,
    
    init: function (x, y, settings) {
      if (settings) {
        if (settings.behavior) {
          this.behavior = settings.behavior;
        }
        if (settings.delay) {
          this.delay = settings.delay;
        }
      }
      
      this.vitorc = null;
      this.timer = 0;
    },
    
    update: function () {
      if (this.vitorc == null) {
        this.vitorc = me.game.getEntityByName("vitorc")[0];
      }
      if (this.vitorc.isCurrentAnimation("die")) {
        this.timer = 0;
      }
      this.timer +=  me.timer.tick / me.sys.fps;
      if (this.timer > this.delay) {
        this.timer = 0;
        this.createKamikaze();
      }
      return false;
    },
    
    createKamikaze: function () {
      if (!this.shouldCreate()) {
        return;
      }
      var kamikaze = this.createSpecificKamikaze(512, this.vitorc.pos.y + 2);
      me.game.add(kamikaze, this.vitorc.z);
      me.game.sort.defer();
    },
    
    createSpecificKamikaze: function () {
      // should be overriden by subclasses
    },
    
    shouldCreate: function () {
      if (this.vitorc.pos.x > 320) {
        return false;
      }
      return true;
    },
    
  });
  
  return KamikazeCreatorEntity;
  
});
