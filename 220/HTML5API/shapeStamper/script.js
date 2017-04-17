paper.install(window);

$(function() {
  paper.setup('myCanvas')

  var shapeStamper = {
    $canvas: $('canvas'),
    $shapes: $('.shapes'),
    currentShape: 'circle',
    currentColor: 'black',
    length: 50,
    clearCanvas: function() {
      project.clear()
    },
    assignShape: function(ele) {
      if (ele.hasClass('clear')) {
        this.clearCanvas();
      } else {
        this.currentShape = ele.attr('class');
        this.$shapes.find('button').removeClass('active');
        ele.addClass('active');
      }
    },
    updateShape: function(e) {
      e.preventDefault();
      var $el = $(e.target);

      if ($el.is('button')) {
        this.assignShape($el);
      }
    },
    renderSquare: function(x, y) {
      var point = new Point(x, y);
      var size = new Size(this.length * 2, this.length * 2);
      var path = new Path.Rectangle(point, size);
      path.fillColor = this.currentColor;
    },
    renderCircle: function(x, y) {
      var path = new Path.Circle(new Point(x, y), this.length);
      path.fillColor = this.currentColor;
    },
    renderTriangle: function(x, y) {
      var len = this.length;
      var triangle = new Path();
      triangle.add(new Point(x, y - len));
      triangle.add(new Point(x + len, y));
      triangle.add(new Point(x - len, y));
      triangle.closed = true;
      triangle.fillColor = this.currentColor;
    },
    printShape: function(e) {
      var x = e.offsetX;
      var y = e.offsetY;

      switch (this.currentShape) {
        case 'circle':
          this.renderCircle(x, y);
          break;
        case 'square':
          this.renderSquare(x - (this.length / 2), y - (this.length / 2));
          break;
        case 'triangle':
          this.renderTriangle(x, y);
          break;
      }
    },
    updateColor: function(e) {
      this.currentColor = $(e.target).val();
    },
    bindings: function() {
      this.$shapes.click(this.updateShape.bind(this));
      this.$shapes.find('input').blur(this.updateColor.bind(this));
      this.$canvas.click(this.printShape.bind(this));
    },
    init: function() {
      this.bindings();
    }
  };

  shapeStamper.init();
});
