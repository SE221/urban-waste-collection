console.log("in mapbox js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpYnVpLWhjbXV0IiwiYSI6ImNsYjh0cDhrNTBvaHQzdm1yODdsOGc1NzMifQ.-L9ltwmYO7M5dvIYfZvvXQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

console.log({ map });
