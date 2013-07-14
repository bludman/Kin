Kin = Kin || {};

Kin.Servo = Backbone.View.extend({

  initialize: function(options) {
    this.paper = options.paper;
    this.circle = this.paper.circle(0, 0, 5);
    this.circle.attr('fill', '#000');
    this.circle.attr('stroke', '#fff');
    this.name = options.name;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.transformation = '';
    this.parentTransformation = '';

    var self = this;

    if (options.draggable) {
      this.circle.attr('cursor', 'move');
      this.circle.drag(function (dx, dy, x, y) {
        var newX = this.ox + dx;
        var newY = this.oy + dy;
        self.position(newX, newY);
      }, function (x, y) {
        var split = this.matrix.split();
        this.ox = split.dx;
        this.oy = split.dy;
      }, function () {});
    }

    this.children = [];
  },

  update: function(transformation) {
    this.parentTransformation = transformation;
    this.circle.transform(this.parentTransformation);
    this.circle.transform('...' + this.transformation);
    _.each(this.children, function(child) {
      child.update(this.circle.matrix.toTransformString());
    }, this);
  },

  addChild: function(child) {
    this.children.push(child);
  },

  rotation: function(value) {
    this.angle = value;
    this.calculateTransform();
    this.update(this.parentTransformation);
  },

  position: function(x, y) {
    this.x = x;
    this.y = y;
    this.calculateTransform();
    this.update(this.parentTransformation);
  },

  calculateTransform: function() {
    this.transformation = 't' + this.x + ',' + this.y + 'r' + this.angle;
  }
});