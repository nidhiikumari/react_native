import React from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";

const SateliteView = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapContainer
        center={[40.44695, -345.23437]}
        zoom={2}
        className="markercluster-map"
      >
        {/* <BaseLayer name="Satellite View"> */}
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt1", "mt2", "mt3"]}
        />
        {/* <TileLayer */}
        {/* </BaseLayer> */}
      </MapContainer>
    </div>
  );
};

export default SateliteView;
