Kin = Kin || {};

Kin.Bar = Backbone.View.extend({

  initialize: function(options) {
    this.paper = options.paper;
    this.rect = this.paper.rect(0, 0, options.width, options.height);
    this.rect.attr('fill', options.color);
    this.rect.attr('stroke', '#fff');
    this.name = options.name;
    this.transformation = '';
    this.parentTransformation = '';

    this.children = [];
  },

  update: function(transformation) {
    this.parentTransformation = transformation;
    this.rect.transform(this.parentTransformation);
    this.rect.transform('...' + this.transformation);
    _.each(this.children, function(child) {
      child.update(this.rect.matrix.toTransformString());
    }, this);
  },

  addChild: function(child) {
    this.children.push(child);
  },

  transform: function(transformation) {
    this.transformation = transformation;
    this.update(this.parentTransformation);
  }
});
