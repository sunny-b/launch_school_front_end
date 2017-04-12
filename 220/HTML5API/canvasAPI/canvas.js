var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var colors = ['#000', '#003', '#006', '#009', '#00c', '#00f'];

function draw() {
  colors.forEach(function(color, i) {
    ctx.fillStyle = color;
    ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);
  });
  colors.push(colors.shift());
}

// setInterval(draw, 200);

// var x = canvas.width / 2;
// var y = canvas.height / 2;
// var radius = y;
//
// ctx.beginPath();
// ctx.arc(x, y, radius, 0, 2 * Math.PI);
// ctx.fill();
// ctx.closePath();
//
// ctx.beginPath();
// ctx.strokeStyle = 'rgba(0, 102, 204, .7)';
// ctx.moveTo(x, y - 50);
// ctx.lineTo(x + 50, y);
// ctx.lineTo(x - 50, y);
// ctx.lineTo(x, y - 50);
// ctx.stroke();
// ctx.closePath();

// var img_src = canvas.toDataURL('png');
// var img = document.createElement('img');
//
// img.src = img_src;
// document.body.appendChild(img);

img = document.querySelector('img');

canvas.width = img.width;
canvas.height = img.height;

ctx.drawImage(img, 0, 0);
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

for (var i = 0; i < imageData.data.length; i += 4) {
  imageData.data[i] += 4
  imageData.data[i + 1] += 4
  imageData.data[i + 2] += 4
}

ctx.putImageData(imageData, 0, 0);
