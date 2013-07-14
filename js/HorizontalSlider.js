Kin = Kin || {};

Kin.HorizontalSlider = Backbone.View.extend({

  initialize: function(options) {
    this.paper = options.paper;
    var handleHeight = 30;
    var handleWidth = 30;
    var high = options.high || 100;
    var low = options.low || 0;
    var size = high - low;
    var value = 0;

    this.bg = this.paper.rect(
      options.x,
      options.y + 5,
      size + handleWidth,
      handleHeight - 10
    ).attr({
      stroke: '#000',
      'stroke-width': 0,
      fill: options.color || '#ccc',
      cursor: 'move',
      opacity: 0.6
    });

    this.handle = this.paper.rect(
      options.x + value - low,
      options.y, handleWidth,
      handleHeight,
      3
    ).attr({
      stroke: '#000',
      'stroke-width': 2,
      fill: '#fff',
      cursor: 'move',
      opacity: 0.8
    });

    this.text = this.paper.text(
      options.x + size + handleWidth + 10,
      options.y + (handleHeight / 2),
      value
    ).attr({
      'text-anchor': 'start'
    });
    var self = this;

    this.handle.drag(function (dx, dy, x, y) {
      var newX = this.ox + dx;
      var minX = options.x;
      var maxX = options.x + size;

      newX < minX && (newX = minX);
      newX > maxX && (newX = maxX);
      var value = newX - options.x + low;
      // console.log(value);

      this.attr({x: newX});
      self.text.attr({text: value});
      options.callback(value);
    }, function(x, y) {
      this.ox = this.attr('x');
    }, function() {
    });
  }
});
