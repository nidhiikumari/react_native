import React, { useRef, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PolygonMap from "./PolygonMap";
import SateliteView from "./sateliteView";
import MapView from "./mapView";

const MarkerFlag = ({
  setSelectedCountry,
  setZoomValue,
  setMapCenter,
  setSelectedMapView,
}: any) => {
  const [countriesData, setCountriesData] = useState<any>([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data, "data");
        const countries = data?.map((country: any) => ({
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

  const flagIcon = (flagUrl: any) =>
    L.divIcon({
      html: `<div class='marker'>
        <img src="${flagUrl}" alt="Flag" style="width: 70%; height: 70%; border-radius: 50%; transform: translate(0%, 21%);" />
        </div>`,
    });

  const handleMarkerClick = (event: any) => {
    setSelectedCountry(event.latlng);
    console.log(event, "event");
    // setMapCenter([32.0, -102.0])
    setMapCenter([event.latlng.lat, event.latlng.lng]);
    setZoomValue(6);
    setSelectedMapView("polygon");
  };

  return (
    <div
    // style={{ width: "100vw", height: "100vh" }}
    >
      {/* 
      -----------This is for only map marker and country flag on global level-------------
      */}

      {/* <MapContainer
        className="markercluster-map"
        center={[51.0, 19.0]}
        // ref={mapRef}
        zoom={6}
        // boundsOptions={{ padding: [1, 1] }}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
      {countriesData.map((country: any, index: number) => (
        <Marker
          key={index}
          position={country.position}
          icon={flagIcon(country.flagUrl)}
          eventHandlers={{ click: handleMarkerClick }}

          // icon={
          //   new Icon({
          //     iconUrl: MarkerIconPng,
          //     iconSize: [35, 51],
          //     iconAnchor: [22, 41],
          //   })
          // }
        >
          <Popup>
            <h2>{country.name}</h2>
          </Popup>
        </Marker>
      ))}
      {/* </MapContainer> */}

      {/* polgon view */}
      {/* <PolygonMap /> */}

      {/* staleite view */}
      {/* <SateliteView /> */}

      {/* <MapView /> */}
    </div>
  );
};

export default MarkerFlag;
