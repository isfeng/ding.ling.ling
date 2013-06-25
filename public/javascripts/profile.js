function Profile(img, x, y, easing) {
  this.image = new createjs.Bitmap(img);
  this.image.x = x;
  this.image.y = y;
  this.easing = easing;
  this.vr = Math.PI*2/_.random(300, 360);
  this.cosvr = Math.cos(this.vr);
  this.sinvr = Math.sin(this.vr);
}

Profile.prototype.draw = function(stage) {
  stage.addChild(this.image);
};

Profile.prototype.arround = function(mouseX, mouseY) {
  var dx = mouseX - this.image.x;
  var dy = mouseY - this.image.y;
  if (Math.sqrt(dx * dx + dy * dy) > 500) {
    this.image.x += dx * this.easing;
    this.image.y += dy * this.easing;
  } else if (Math.sqrt(dx * dx + dy * dy) < 100) {
    this.image.x -= dx * this.easing;
    this.image.y -= dy * this.easing;
  }
  var x1 = this.image.x - mouseX;
  var y1 = this.image.y - mouseY;
  var x2 = x1 * this.cosvr - y1 * this.sinvr;
  var y2 = y1 * this.cosvr + x1 * this.sinvr;
  this.image.x = mouseX + x2;
  this.image.y = mouseY + y2;
};