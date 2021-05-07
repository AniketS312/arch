// Map Google API
let map;

const yegDowntown = { lat: 53.544388, lng: -113.490929}
const yycDowntown = { lat: 53.544388, lng: -113.490929}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.048615, lng: -113.811241 },
    zoom: 8,
  });
}

new google.maps.Marker({
  position: yegDowntown,
  map,
  title: "Hello World!",
});

new google.maps.Marker({
  position: yycDowntown,
  map,
  title: "Hello World!",
});
