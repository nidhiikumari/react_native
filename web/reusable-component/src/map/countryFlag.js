// @ts-ignore
import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import "./styles.css";
// import "leaflet/dist/leaflet.css";
// import "react-leaflet-markercluster/dist/styles.min.css";
// import MarkerClusterGroup as ComponentType<MarkerClusterGroupProps> from 'react-leaflet-markercluster';

// const countries = [
//   { name: 'United States', position: [37.0902, -95.7129], flag: usFlag },
//   { name: 'United Kingdom', position: [55.3781, -3.4360], flag: ukFlag },
//   // Add more countries as needed
// ];

const countriesData = [
  {
    name: "United States",
    position: [37.0902, -95.7129],
    flagUrl: "https://www.countryflags.io/us/flat/64.png",
  },
  {
    name: "United Kingdom",
    position: [55.3781, -3.436],
    flagUrl: "https://www.countryflags.io/gb/flat/64.png",
  },
  // Add more countries as needed
];

export default function CountryFlag() {
  const [countriesData, setCountriesData] = useState([]);

  //   const flagIcon = (flagUrl: any) => {
  //     return L.icon({
  //       iconUrl: flagUrl,
  //       iconSize: [32, 32], // Adjust the size of the flag icon as needed
  //       iconAnchor: [16, 32], // Adjust the anchor point if necessary
  //     });
  //   };
  //   const flagIcon = L.icon({
  //     iconUrl:
  //       "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg",
  //     iconSize: [30, 20],
  //     iconAnchor: [15, 10],
  //   });

  //   const flagIcon = (flagUrl: any) => {
  //     return L.icon({
  //       iconUrl: flagUrl,
  //       iconSize: [15, 15], // Adjust the size of the flag icon as needed
  //       iconAnchor: [35, 30], // Adjust the anchor point if necessary
  //     });
  //     // iconUrl:
  //   "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg",
  // iconSize: [30, 20],
  // iconAnchor: [15, 10],
  //   };

  // const flagIcon = (flagUrl) =>
  //   L.divIcon({
  //     html: `<img src="${flagUrl}" alt="Flag" style="width: 30px; height: auto;" />`,
  //     className: "leaflet-div-icon", // Required CSS class for Leaflet marker
  //   });

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data, "data");
        const countries = data?.map((country) => ({
          name: country.name.common,
          position: [country.latlng[0], country.latlng[1]],
          flagUrl: country.flags.png,
        }));
        setCountriesData(countries);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };
    fetchCountriesData();
  }, []);

  const position = [51.505, -0.09];

  return (
    <div>
      {/* <MapContainer
      className="markercluster-map"
      // center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
    </MapContainer> */}
    </div>
     
  )
}
