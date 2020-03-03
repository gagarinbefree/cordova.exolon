define(["src/me"], function (me) {
  var anchor = null;
  
  function toggleSound() {
    if (me.audio.isAudioEnable()) {
      me.audio.pauseTrack();
      me.audio.disable();
      anchor.text('ENABLE SOUND');
    }
    else {
      me.audio.enable();
      me.audio.resumeTrack();
      anchor.text('DISABLE SOUND');
    }
    return false;
  }
  
  return {
    init: function () {
      anchor = $('<a id="toggleSound" href="#">DISABLE SOUND</a>');
      $('#sound').append(anchor);
      anchor.click(toggleSound);
    },
  };
});
