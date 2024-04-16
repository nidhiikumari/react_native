import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./mapViewStyles.css";
import "leaflet/dist/leaflet.css";
import graphicView from "../assets/graphic.png";
import staliteView from "../assets/staliteView.png";
import MarkerFlag from "./markerFlag";
import PolygonMap from "./PolygonMap";
import AssetsView from "./assetsView";
import ThreatDetails from "./threatDetails";

const MapView = () => {
  const [satelliteView, setSatelliteView] = useState<boolean>(false);
  const [zoomValue, setZoomValue] = useState<number>(6);
  const [selectedCountry, setSelectedCountry] = useState<any>("");
  const [isAssetsView, setIsAssetsView] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<any>("");
  const [mapCenter, setMapCenter] = useState<any>([51.0, 19.0]);
  const [selectedMapView, setSelectedMapView] = useState<string>("global");
  const [closePopUpOnClick, setClosePopUpOnClick] = useState<boolean>(true);

  const toggleSatelliteView = (e: any) => {
    e.stopPropagation();
    setSatelliteView(!satelliteView);
    console.log(satelliteView, "satelliteView");
    // if (satelliteView) {
    //   setZoomValue(4);
    // } else {
    //   setZoomValue(5);
    // }
  };

  // console.log(typeof selectedCountry === "object", "zoomValue");

  console.log(selectedCountry, mapCenter, "selected country");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          position: "relative",
          width: "70vw",
          height: "60vh",
          // overflow: "scroll",
        }}
      >
          <MapContainer
            key={zoomValue}
            style={{ borderRadius: "4px" }}
            center={mapCenter}
            zoom={zoomValue}
            // for others
            // center={[51.505, -0.09]}
            // zoom={13}

            scrollWheelZoom={false}
            className="markercluster-map"
            // scrollWheelZoom={false}
            attributionControl={false}
            closePopupOnClick={closePopUpOnClick}
            // zoomControl={false}
          >
            <div>
              {satelliteView ? (
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  // url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                  //   maxZoom={20}
                  subdomains={["mt1", "mt2", "mt3"]}
                />
              ) : (
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              )}
            </div>

            {selectedMapView === "global" ? (
              <MarkerFlag
                setZoomValue={setZoomValue}
                setSelectedCountry={setSelectedCountry}
                setMapCenter={setMapCenter}
                setSelectedMapView={setSelectedMapView}
              />
            ) : null}

            {selectedMapView === "polygon" ? (
              <PolygonMap
                setZoomValue={setZoomValue}
                setMapCenter={setMapCenter}
                setSelectedState={setSelectedState}
                setIsAssetsView={setIsAssetsView}
                setSelectedMapView={setSelectedMapView}
              />
            ) : null}

            {selectedMapView === "assets" ? (
              <AssetsView
                setZoomValue={setZoomValue}
                setMapCenter={setMapCenter}
                setIsAssetsView={setIsAssetsView}
                setClosePopUpOnClick={setClosePopUpOnClick}
                setSelectedMapView={setSelectedMapView}
              />
            ) : null}

            {selectedMapView === "threatDetails" ? (
              <ThreatDetails mapCenter={mapCenter} />
            ) : null}
            {/* {typeof selectedCountry === "object" ? (
            <>
              {isAssetsView ? (
                <AssetsView
                  setZoomValue={setZoomValue}
                  setMapCenter={setMapCenter}
                  setIsAssetsView={setIsAssetsView}
                  setClosePopUpOnClick={setClosePopUpOnClick}
                />
              ) : (
                <PolygonMap
                  setZoomValue={setZoomValue}
                  setMapCenter={setMapCenter}
                  setSelectedState={setSelectedState}
                  setIsAssetsView={setIsAssetsView}
                />
              )}
            </>
          ) : (
            <MarkerFlag
              setZoomValue={setZoomValue}
              setSelectedCountry={setSelectedCountry}
              setMapCenter={setMapCenter}
            />
          )} */}
            {/* <AssetsView /> */}
            {/* <ThreatDetails setClosePopUpOnClick /> */}
          </MapContainer>
        <div
          className="toggle-button"
          style={{
            width: "3vw",
            height: "4vh",
            borderRadius: "10px",
            cursor: "pointer",
            position: "absolute",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            bottom: "10px",
            zIndex: 1000,
            left: "10px",
          }}
          onClick={toggleSatelliteView}
        >
          <img
            src={satelliteView ? graphicView : staliteView}
            style={{ width: "100%", height: "100%", borderRadius: "3px" }}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default MapView;
