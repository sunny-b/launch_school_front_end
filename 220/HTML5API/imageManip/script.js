var canvas = document.createElement('canvas');

var images = {
  all: ['lady', 'truck', 'car'],
  process: function() {
    paper.setup(canvas);

    this.all.forEach(function(ele) {
      var raster = new paper.Raster(ele);
      manipulator.drawImage(raster);
    });
  },
};

var manipulator = {
  changeColor: function(raster) {
    var rect = new paper.Rectangle(0, 0, raster.width, raster.height);
    var imageData = raster.getImageData(rect);
    var point = new paper.Point(0, 0);

    for (var i = 0; i < imageData.data.length; i += 4) {
      var gray = imageData.data[i] * .3086 + imageData.data[i + 1] * .6094 + imageData.data[i + 2] * .0820;
      imageData.data[i] = gray;
      imageData.data[i + 1] = gray;
      imageData.data[i + 2] = gray;
    }

    raster.setImageData(imageData, point);
  },
  appendImage: function(raster) {
    var img = document.createElement('img');
    var figure = $('<figure>');

    img.src = raster.toDataURL();
    figure.append(img);
    $('.col + .col').append(figure);
  },
  drawImage: function(raster) {
    this.changeColor(raster);
    this.appendImage(raster);
  },
  init: function() {
    images.process();
  }
};

$(window).load(manipulator.init.bind(manipulator));
