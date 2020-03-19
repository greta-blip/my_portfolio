function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 13; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
}

$('#photos').append(allImages);
