// IMPLEMENTED CLICKABLE POLYGON TO GET LATITUDE AND LONGITUDE
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Circle } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { jakarta, ukPolygon, ukCoordinates, polygonData } from "./data";

const PolygonMap = ({
  setZoomValue,
  setMapCenter,
  setSelectedState,
  setIsAssetsView,
  setSelectedMapView
}: any) => {
  const [coordinates, setCoordinates] = useState<any>([]);

  useEffect(() => {
    setCoordinates(jakarta.map((row: any) => [row[1], row[0]]));
  }, []);

  const handlePolygonClick = (event: any) => {
    console.log("Polygon clicked!", event);
    setSelectedMapView("assets");
    // setMapCenter([event.latlng.lat, event.latlng.lng]) this is for dynamic
    setMapCenter([51.505, -0.09]); //for static data
    setZoomValue(13);
    setSelectedState(event.latlng);
    setIsAssetsView(true); //set to view assets

    // here call the api for assests
    // Add your click event logic here
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* {coordinates.length && (
        <MapContainer
          style={{ width: 100 + "%", height: 100 + "%" }}
          // bounds={coordinates}
          boundsOptions={{ padding: [1, 1] }}
          zoom={7}
          center={[32.0, -102.0]}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
      {polygonData.map((polygon: any, index: number) => (
        <Polygon
          key={index}
          positions={polygon}
          color="red"
          eventHandlers={{ click: handlePolygonClick }}
        />
        // <Circle key={index} positions={polygon} color="red" />
      ))}
    </div>
  );
};

export default PolygonMap;
