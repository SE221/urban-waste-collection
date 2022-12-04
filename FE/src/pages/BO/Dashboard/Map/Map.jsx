import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import "./marker.css";

const geojson = {
  type: "FeatureCollection",
  features: [],
};

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFpYnVpLWhjbXV0IiwiYSI6ImNsYjh0cDhrNTBvaHQzdm1yODdsOGc1NzMifQ.-L9ltwmYO7M5dvIYfZvvXQ";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(106.680879);
  const [lat, setLat] = useState(10.768878);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // get mcps data
    axios
      .get("http://localhost:1337/api/mcps")
      .then((res) => {
        const objs = res.data;
        objs.map((obj) => {
          const marker = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [obj.Lng.$numberDecimal, obj.Lat.$numberDecimal],
            },
            properties: {
              title: obj.Name,
              description:
                obj.Status === "OK"
                  ? obj.Status
                  : `${obj.Status} (${obj["Overloaded Time"]})`,
            },
            status: obj.Status,
          };
          geojson.features.push(marker);
        });

        //add markers to map
        geojson.features.map((feature) => {
          const el = document.createElement("div");
          let htmlString;
          if (feature.status === "OK") {
            htmlString = `<h3>${feature.properties.title}</h3><p class="ok-description">${feature.properties.description}</p>`;
            el.className = "ok marker";
          } else if (feature.status === "Overloaded") {
            htmlString = `<h3>${feature.properties.title}</h3><p class="overloaded-description">${feature.properties.description}</p>`;
            el.className = "overloaded marker";
          }

          // make a marker for each feature and add it to the map
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(htmlString)
            )
            .addTo(map.current);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  for (const feature of geojson.features) {
    // create a HTML element for each feature
  }

  return <div className="map" ref={mapContainer}></div>;
};

export default Map;
