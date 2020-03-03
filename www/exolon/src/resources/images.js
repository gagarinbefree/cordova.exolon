define(function () {
  
  var images = [
    
    {
      name: "loading_bg",
      type: "image",
      src: "exolon/images/loading_bg.gif",
    },
    
    // fonts
    {
      name: "font_white",
      type: "image",
      src: "exolon/images/font_white.gif",
    },
    {
      name: "font_cyan",
      type: "image",
      src: "exolon/images/font_cyan.gif",
    },
    {
      name: "font_green",
      type: "image",
      src: "exolon/images/font_green.gif",
    },
    {
      name: "font_purple",
      type: "image",
      src: "exolon/images/font_purple.gif",
    },
    {
      name: "font_yellow",
      type: "image",
      src: "exolon/images/font_yellow.gif",
    },
    {
      name: "font_red",
      type: "image",
      src: "exolon/images/font_red.gif",
    },
    
    // tiles
    {
      name: "metatiles",
      type: "image",
      src: "exolon/images/metatiles.gif",
    },
    {
      name: "tiles",
      type: "image",
      src: "exolon/images/tiles.gif",
    },
    {
      name: "rocks",
      type: "image",
      src: "exolon/images/rocks.gif",
    },
    {
      name: "ship",
      type: "image",
      src: "exolon/images/ship.gif",
    },
    {
      name: "gate",
      type: "image",
      src: "exolon/images/gate.gif",
    },
    
    // entities
    {
      name: "star",
      type: "image",
      src: "exolon/images/star.gif",
    },
    {
      name: "vitorc",
      type: "image",
      src: "exolon/images/vitorc.gif",
    },
    {
      name: "vitorc2",
      type: "image",
      src: "exolon/images/vitorc2.gif",
    },
    {
      name: "blaster_bullet",
      type: "image",
      src: "exolon/images/blaster_bullet.gif",
    },
    {
      name: "blaster_explosion",
      type: "image",
      src: "exolon/images/blaster_explosion.gif",
    },
    {
      name: "grenade",
      type: "image",
      src: "exolon/images/grenade.gif",
    },
    {
      name: "grenade_trace",
      type: "image",
      src: "exolon/images/grenade_trace.gif",
    },
    {
      name: "grenade_pack",
      type: "image",
      src: "exolon/images/grenade_pack.gif",
    },
    {
      name: "ammo_pack",
      type: "image",
      src: "exolon/images/ammo_pack.gif",
    },
    {
      name: "turret",
      type: "image",
      src: "exolon/images/turret.gif",
    },
    {
      name: "turret_body",
      type: "image",
      src: "exolon/images/turret_body.gif",
    },
    {
      name: "turret_tube",
      type: "image",
      src: "exolon/images/turret_tube.gif",
    },
    {
      name: "turret_bullet",
      type: "image",
      src: "exolon/images/turret_bullet.gif",
    },
    {
      name: "explosion_particle",
      type: "image",
      src: "exolon/images/explosion_particle.gif",
    },
    {
      name: "cocoon",
      type: "image",
      src: "exolon/images/cocoon.gif",
    },
    {
      name: "radar",
      type: "image",
      src: "exolon/images/radar.gif",
    },
    {
      name: "rocket",
      type: "image",
      src: "exolon/images/rocket.gif",
    },
    {
      name: "ship_fire",
      type: "image",
      src: "exolon/images/ship_fire.gif",
    },
    {
      name: "light",
      type: "image",
      src: "exolon/images/light.gif",
    },
    {
      name: "teleport",
      type: "image",
      src: "exolon/images/teleport.gif",
    },
    {
      name: "teleport_flash",
      type: "image",
      src: "exolon/images/teleport_flash.gif",
    },
    {
      name: "piston",
      type: "image",
      src: "exolon/images/piston.gif",
    },
    {
      name: "harbringer",
      type: "image",
      src: "exolon/images/harbringer.gif",
    },
    {
      name: "circular_explosion",
      type: "image",
      src: "exolon/images/circular_explosion.gif",
    },
    {
      name: "bubble",
      type: "image",
      src: "exolon/images/bubble.gif",
    },
    {
      name: "incubator",
      type: "image",
      src: "exolon/images/incubator.gif",
    },
    {
      name: "egg",
      type: "image",
      src: "exolon/images/egg.png",
    },
    {
      name: "double_launcher",
      type: "image",
      src: "exolon/images/double_launcher.gif",
    },
    {
      name: "double_launcher_bullet",
      type: "image",
      src: "exolon/images/double_launcher_bullet.gif",
    },
    {
      name: "mine",
      type: "image",
      src: "exolon/images/mine.gif",
    },
    {
      name: "mine_fire",
      type: "image",
      src: "exolon/images/mine_fire.gif",
    },
    {
      name: "missile_guidance",
      type: "image",
      src: "exolon/images/missile_guidance.gif",
    },
    {
      name: "missile",
      type: "image",
      src: "exolon/images/missile.gif",
    },
    {
      name: "interceptor",
      type: "image",
      src: "exolon/images/interceptor.gif",
    },
    {
      name: "jellyfish",
      type: "image",
      src: "exolon/images/jellyfish.gif",
    },
    {
      name: "waggon",
      type: "image",
      src: "exolon/images/waggon.gif",
    },
    {
      name: "combined_launcher_top",
      type: "image",
      src: "exolon/images/combined_launcher_top.gif",
    },
    {
      name: "combined_launcher_bottom",
      type: "image",
      src: "exolon/images/combined_launcher_bottom.gif",
    },
    {
      name: "square_light",
      type: "image",
      src: "exolon/images/square_light.gif",
    },
    {
      name: "discharge",
      type: "image",
      src: "exolon/images/discharge.gif",
    },
    {
      name: "level_complete_window",
      type: "image",
      src: "exolon/images/level_complete_window.gif",
    },
    {
      name: "fungus",
      type: "image",
      src: "exolon/images/fungus.gif",
    },
    {
      name: "louse",
      type: "image",
      src: "exolon/images/louse.gif",
    },
    {
      name: "beam",
      type: "image",
      src: "exolon/images/beam.gif",
    },
    {
      name: "flasher",
      type: "image",
      src: "exolon/images/flasher.gif",
    },
    {
      name: "fir",
      type: "image",
      src: "exolon/images/fir.gif",
    },
    
    // other
    {
      name: "title",
      type: "image",
      src: "exolon/images/title.gif",
    },
    {
      name: "bonus_screen",
      type: "image",
      src: "exolon/images/bonus_screen.gif",
    },
    {
      name: "arrow",
      type: "image",
      src: "exolon/images/arrow.gif",
    },
  ];
  
  return images;
  
});
