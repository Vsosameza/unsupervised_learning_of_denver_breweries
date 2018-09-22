// Perform GET request to the query URL
d3.csv("brewery_file.csv", createMarkers);

function createMarkers(data){
  // console.log(data)
  var markers = [];
  for (var x = 0; x < data.length; x++){
   brewery = data[x];
   day = 'day' + brewery.DrinkingDay
   var breweryMarker = L.marker([brewery.Latitude, brewery.Longitude], {
     icon: icons[day]
   });
   breweryMarker.addTo(layers[day])
   breweryMarker.bindPopup("<h3>" + brewery.Placemark + "<h3>");
  }
  // console.log(markers)
  // Create a layer group made from the bike markers array, pass it into the createMap function
}


var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 17,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiYnJhbGFyY29uIiwiYSI6ImNqbGgzaG11ODFlNGUzcXBhbm80NHF6ZGIifQ.p_YwVYmRuU2BVq-rS9vIHA"
});
// Create a baseMaps object to hold the lightmap layer
var baseMaps = {
  "Light Map": lightmap
};



// Create an overlayMaps object to hold the breweryStations layer
var layers = {
  day1: new L.LayerGroup(),
  day2: new L.LayerGroup(),
  day3: new L.LayerGroup(),
  day4: new L.LayerGroup(),
  day5: new L.LayerGroup(),
  day6: new L.LayerGroup(),
  day7: new L.LayerGroup(),
  day8: new L.LayerGroup(),
  day9: new L.LayerGroup(),
  day10: new L.LayerGroup(),
  day11: new L.LayerGroup(),
  day12: new L.LayerGroup(),
  day13: new L.LayerGroup(),
  day14: new L.LayerGroup(),
  day15: new L.LayerGroup(),
};

// function connectDots(brewery) {
//   var features = data.features,
//       feature,
//       c = [],
//       i;

//   for (i = 0; i < features.length; i += 1) {
//       feature = features[i];
//       // Make sure this feature is a point.
//       if (feature.geometry === "Brewery") {
//           c.push(feature.geometry.coordinates);
//       }
//   }
//   return c;
// }

// L.polyline(connectDots(brewery)).addTo(map);


var overlayMaps = {
  'day1':layers.day1,
  'day2':layers.day2,
  'day3':layers.day3,
  'day4':layers.day4,
  'day5':layers.day5,
  'day6':layers.day6,
  'day7':layers.day7,
  'day8':layers.day8,
  'day9':layers.day9,
  'day10':layers.day10,
  'day11':layers.day11,
  'day12':layers.day12,
  'day13':layers.day13,
  'day14':layers.day14,
  'day15':layers.day15
};
// create the map object with options
var map = L.map("map-id", {
  center: [39.7392, -104.9903],
  zoom: 12,
  layers: [
  layers.day1,
  layers.day2,
  layers.day3,
  layers.day4,
  layers.day5,
  layers.day6,
  layers.day7,
  layers.day8,
  layers.day9,
  layers.day10,
  layers.day11,
  layers.day12,
  layers.day13,
  layers.day14,
  layers.day15]
});
lightmap.addTo(map);

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(null, overlayMaps).addTo(map);
// .bindPopup("<h3>" + brewery.Placemark + "<h3>");


// Initialize an object containing icons for each layer group
var icons = {
  day1: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "black",
    shape: "star"
  }),
  day2: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "green-light",
    shape: "star"
  }),
  day3: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "star"
  }),
  day4: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "orange-dark",
    shape: "star"
  }),
  day5: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "green",
    shape: "star"
  }),
  day6: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "white",
    shape: "star"
  }),
  day7: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "purple",
    shape: "star"
  }),
  day8: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "grey",
    shape: "star"
  }),
  day9: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "violet",
    shape: "star"
  }),
  day10: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "green-light",
    shape: "star"
  }),
  day11: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "pink",
    shape: "star"
  }),
  day12: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "cyan",
    shape: "star"
  }),
  day13: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "orange",
    shape: "star"
  }),
  day14: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "blue",
    shape: "star"
  }),
  day15: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  })

};