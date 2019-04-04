window.onload = getExif;
let pic1El = document.getElementById("pic1");
let pic2El = document.getElementById("pic2");
let pic3El = document.getElementById("pic3");
let pic4El = document.getElementById("pic4");
let pic5El = document.getElementById("pic5");
let pic6El = document.getElementById("pic6");
let pic7El = document.getElementById("pic7");
let pic8El = document.getElementById("pic8");

function getExif() {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");
  var img5 = document.getElementById("img5");
  var img6 = document.getElementById("img6");
  var img7 = document.getElementById("img7");
  EXIF.getData(img1, function() {
    var allMetaData = EXIF.getAllTags(this);
    console.log(this);

    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;
    longitudeFormat = longitudeFormat * -1;

    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic1El.appendChild(linkEl);

    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic1El.appendChild(latLongEl);

    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic1El.appendChild(mapEl);
  });
  EXIF.getData(img2, function() {
    var allMetaData = EXIF.getAllTags(this);
    console.log(this);

    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;
    longitudeFormat = longitudeFormat * -1;

    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic2El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic2El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic2El.appendChild(mapEl);
  });
  EXIF.getData(img3, function() {
    console.log(this);
    var allMetaData = EXIF.getAllTags(this);
    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;

    longitudeFormat = longitudeFormat * -1;
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic3El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic3El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic3El.appendChild(mapEl);
  });
  EXIF.getData(img4, function() {
    console.log(this);
    var allMetaData = EXIF.getAllTags(this);
    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;

    longitudeFormat = longitudeFormat * -1;
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic4El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic4El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic4El.appendChild(mapEl);
  });
  EXIF.getData(img5, function() {
    console.log(this);
    var allMetaData = EXIF.getAllTags(this);
    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;

    longitudeFormat = longitudeFormat * -1;
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic5El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic5El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic5El.appendChild(mapEl);
  });
  EXIF.getData(img6, function() {
    console.log(this);
    var allMetaData = EXIF.getAllTags(this);
    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;

    longitudeFormat = longitudeFormat * -1;
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic6El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic6El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic6El.appendChild(mapEl);
  });
  EXIF.getData(img7, function() {
    console.log(this);
    var allMetaData = EXIF.getAllTags(this);
    let latitude = EXIF.getTag(this, "GPSLatitude");
    let latDeg = latitude[0];
    let latMin = latitude[1];
    let latSec = latitude[2];
    let latitudeFormat = latDeg + (latMin + latSec / 60) / 60;

    let longitude = EXIF.getTag(this, "GPSLongitude");
    let longDeg = longitude[0];
    let longMin = longitude[1];
    let longSec = longitude[2];
    let longitudeFormat = longDeg + (longMin + longSec / 60) / 60;

    longitudeFormat = longitudeFormat * -1;
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");

    // let linkEl = document.createElement("div");
    // linkEl.innerHTML =
    //   '<a href="http://www.google.com/maps/place/' +
    //   latitudeFormat +
    //   "," +
    //   longitudeFormat +
    //   '" target="_blank">Google Maps</a>';
    // pic7El.appendChild(linkEl);
    let latLongEl = document.createElement("div");
    latLongEl.innerHTML = `Lat: ${latitudeFormat}, Long: ${longitudeFormat}`;
    pic7El.appendChild(latLongEl);
    let mapEl = document.createElement("iframe");
    mapEl.width = "500";
    mapEl.height = "450";
    mapEl.frameBorder = "0";
    mapEl.style = "border:0";
    mapEl.src = `https://www.google.com/maps/embed/v1/place?q=${latitudeFormat},${longitudeFormat}&key=AIzaSyATf8NNNa5TcLx6IPa9Ox00FNRuEZtG2yY`;

    pic7El.appendChild(mapEl);
  });

  // https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates
  function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  var distance = distanceInKmBetweenEarthCoordinates(
    39.758888,
    -86.1475,
    33.7216,
    -111.934875
  );
  console.log(distance);
}
