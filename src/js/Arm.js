Kin = Kin || {};

Kin.Arm = Backbone.Model.extend({
  initialize: function(options) {
    this.paper = options.paper;

    this.buildArms();
    this.buildServos();
    this.connectPieces();
    this.setupControls();
    this.redServo.update('');
  },

  buildArms: function() {
    this.red = new Kin.Bar({
      paper: this.paper,
      width: 100,
      height: 60,
      color: 'f00',
      name: 'red'
    });

    this.green = new Kin.Bar({
      paper: this.paper,
      width: 100,
      height: 40,
      color: '0f0',
      name: 'green'
    });

    this.blue = new Kin.Bar({
      paper: this.paper,
      width: 100,
      height: 20,
      color: '00f',
      name: 'blue'
    });
  },

  buildServos: function() {
    this.redServo = new Kin.Servo({
      paper: this.paper,
      draggable: true
    });

    this.greenServo = new Kin.Servo({
      paper: this.paper
    });

    this.blueServo = new Kin.Servo({
      paper: this.paper
    });
  },

  connectPieces: function() {
    this.redServo.position(50, 50);
    this.red.transform('t-10,-30');

    this.greenServo.position(80, 30);
    this.green.transform('t-10,-20');

    this.blueServo.position(80, 20);
    this.blue.transform('t-10,-10');

    this.redServo.addChild(this.red);
    this.red.addChild(this.greenServo);
    this.greenServo.addChild(this.green);
    this.green.addChild(this.blueServo);
    this.blueServo.addChild(this.blue);
  },

  setupControls: function() {
    this.redControl = new Kin.HorizontalSlider({
      paper: this.paper,
      x: 350,
      y: 50,
      low: -180,
      high: 180,
      color: '#f00',
      callback: _.bind(this.redServo.rotation, this.redServo)
    });

    this.greenControl = new Kin.HorizontalSlider({
      paper: this.paper,
      x: 350,
      y: 100,
      low: -180,
      high: 180,
      color: '#0f0',
      callback: _.bind(this.greenServo.rotation, this.greenServo)
    });

    this.blueControl = new Kin.HorizontalSlider({
      paper: this.paper,
      x: 350,
      y: 150,
      low: -180,
      high: 180,
      color: '#00f',
      callback: _.bind(this.blueServo.rotation, this.blueServo)
    });
  }
});
