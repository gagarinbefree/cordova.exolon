define(["src/app"], function (app) {
  console.log("run game");
  window.onReady(app.onload.bind(app));
});
