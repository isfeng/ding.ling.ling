function Profile(img, x, y, easing) {
  this.bitmap = new createjs.Bitmap(img);
  this.easing = easing;
  this.vr = Math.PI * 2 / _.random(360, 420);
  this.cosvr = Math.cos(this.vr);
  this.sinvr = Math.sin(this.vr);

  this.shape = new createjs.Shape();
  this.shape.graphics.beginStroke("rgba(0,0,0,1)").beginBitmapFill(this.bitmap.image).drawCircle(40, 40, 40).endStroke();
  this.shape.x = x;
  this.shape.y = y;
}

Profile.prototype.draw = function(stage) {
  stage.addChild(this.shape);
};

Profile.prototype.arround = function(mouseX, mouseY, max_distance) {
  var dx = mouseX - this.shape.x;
  var dy = mouseY - this.shape.y;
  if (Math.sqrt(dx * dx + dy * dy) > max_distance) {
    this.shape.x += dx * this.easing;
    this.shape.y += dy * this.easing;
  } else if (Math.sqrt(dx * dx + dy * dy) < 120) {
    this.shape.x -= dx * this.easing;
    this.shape.y -= dy * this.easing;
  }
  var x1 = this.shape.x - mouseX;
  var y1 = this.shape.y - mouseY;
  var x2 = x1 * this.cosvr - y1 * this.sinvr;
  var y2 = y1 * this.cosvr + x1 * this.sinvr;
  this.shape.x = mouseX + x2;
  this.shape.y = mouseY + y2;
};