define(
  [
    "src/me",
    "src/util",
    "src/screens",
  ],
  function (
    me,
    util,
    screens
  ) {
      
  var LevelCompleteWindowEntity = Object.extend({
    
    /**
     * @param {Object} bonus see ExitEntity#createBonus for details
     */
    init: function (bonus) {
      this.bonus = bonus;
      this.visible = true;
      this.listenKeys = false;
      
      this.bgImg = me.loader.getImage("level_complete_window");
      
      this.fontPurple = new me.BitmapFont("font_purple", 16);
      this.fontPurple.set("left");
      
      this.fontWhite = new me.BitmapFont("font_white", 16);
      this.fontWhite.set("left");
      
      this.fontGreen = new me.BitmapFont("font_green", 16);
      this.fontGreen.set("left");
      
      this.fontYellow = new me.BitmapFont("font_yellow", 16);
      this.fontYellow.set("left");
      
      this.fontCyan = new me.BitmapFont("font_cyan", 16);
      this.fontCyan.set("left");
    },
    
    update: function () {
      if (this.listenKeys && me.input.isKeyPressed('fire')) {
        me.state.change(screens.BONUS);
      }
      return true;
    },
    
    draw: function (context) {
      context.drawImage(this.bgImg, 112, 48);
      this.fontPurple.draw(context, "BRAVERY BONUS", 160, 96);
      this.fontWhite.draw(context, util.strlpad(this.bonus.bravery, "0", 5), 224, 128);
      this.fontGreen.draw(context, "LIVES BONUS", 176, 160);
      this.fontYellow.draw(context, this.bonus.lives + " X " + this.bonus.lifePrice, 208, 192);
      this.fontCyan.draw(context, "PRESS FIRE TO", 160, 224);
      this.fontCyan.draw(context, "RESUME PLAY", 176, 256);
    },
    
    onAwardComplete: function () {
      this.listenKeys = true;
    },
    
  });
  
  return LevelCompleteWindowEntity;
  
});
