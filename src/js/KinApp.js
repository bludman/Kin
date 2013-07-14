Kin = Kin || {};

Kin.KinApp = Backbone.Model.extend({
  initialize: function() {
    var paper = Raphael('canvas', 900, 600);

    this.arm = new Kin.Arm({paper: paper});
    console.log('App initialized');
  }
});
