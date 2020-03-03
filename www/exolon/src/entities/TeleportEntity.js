define(
  [
    "src/me",
  ],
  function (
    me
  ) {
      
  var TeleportEntity = me.ObjectEntity.extend({
    
    init: function (x, y, settings) {
      settings.image = "teleport";
      settings.spritewidth = 64;
      this.parent(x, y, settings);
      
      this.collidable = true;
      this.animationspeed = 1;
      this.updateColRect(16, 32, 32, 48);
    },
    
  });
  
  return TeleportEntity;
  
});
