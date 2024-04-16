import React, { useEffect, useRef } from "react";
import "./mapViewStyles.css";
import "leaflet/dist/leaflet.css";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

const locations = [
  { lat: 51.505, lng: -0.09 }, // Example location 1
  { lat: 51.51, lng: -0.1 }, // Example location 2
  // Add more locations as needed
];

const CustomPopups = () => {
  const marker1Ref: any = useRef(null);
  const marker2Ref: any = useRef(null);

  useEffect(() => {
    if (marker1Ref.current) {
      marker1Ref.current.openPopup();
    }
    if (marker2Ref.current) {
      marker2Ref.current.leafletElement.openPopup();
    }
  }, []);
  return (
    <div
      style={{
        width: "70vw",
        height: "90vh",
        overflow: "scroll",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15}
        className="markercluster-map"
        closePopupOnClick={false}
        // style={{ height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Popup position={[51.505, -0.09]} autoClose={false}>
          <div
            style={{
              width: "200px",
              // border: '1px solid #F43E33',
              // padding: '0px',
              // margin: '0px',
              // boxShadow: '3.545px 2.026px 14.179px 0px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "0.0625rem",
                  backgroundColor: "rgba(144, 212, 77, 0.13)",
                  width: "78px",
                  height: "30px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#90D44D",
                  }}
                ></div>
                <p>Low</p>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                }}
              >
                <p>human</p>
              </div>
            </div>

            <p>
              Fire Department Activity / Road Closure: H St NW MPD Reports H
              Street , NW , Between , 5th and 7th Streets,{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Location:</span> US Copilot
              Building, Washington DC
            </p>
          </div>
        </Popup>
        <Popup position={[51.51, -0.1]} autoClose={false}>
          <div
            style={{
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "0.0625rem",
                  backgroundColor: "rgba(144, 212, 77, 0.13)",
                  width: "78px",
                  height: "30px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#90D44D",
                  }}
                ></div>
                <p>moderate</p>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                }}
              >
                <p>human</p>
              </div>
            </div>

            <p>
              Fire Department Activity / Road Closure: H St NW MPD Reports H
              Street , NW , Between , 5th and 7th Streets,{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Location:</span> US Copilot
              Building, Washington DC
            </p>
          </div>
        </Popup>
      </MapContainer>
    </div>
  );
};

export default CustomPopups;
