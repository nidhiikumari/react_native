import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
import "./styles.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";
import { useEffect, useRef, useState } from "react";

const MAP_CENTER: any = [52.52, 13.405];
const MARKER_POSITION: any = [52.49913882549316, 13.418318969833383];

const ThreatDetails = ({ mapCenter }: any) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true); // Initial state to open the popup

  // Coordinates of the specific location
  const locationCoordinates: any = [51.505, -0.09];

  // Close the popup after a certain delay
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 5000); // Close the popup after 5 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  // const locationCoordinates: any = [51.505, -0.09];

  const ThreatData: any = [
    {
      severity: "Low",
      intel: "Human Intel",
      details:
        "Fire Department Activity / Road Closure: H St NW MPD Reports HStreet , NW , Between , 5th and 7th Streets,",
      location: "US Copilot Building, Washington DC",
      coordinates: [51.505, -0.09],
    },
    {
      severity: "High",
      intel: "Open Intel",
      details:
        "Fire Department Activity / Road Closure: H St NW MPD Reports HStreet , NW , Between , 5th and 7th Streets,",
      location: "US Copilot Building, Washington DC",
      coordinates: [51.51, -0.1],
    },
    // {
    //   severity: "Moderate",
    //   intel: "Open Intel",
    //   details:
    //     "Fire Department Activity / Road Closure: H St NW MPD Reports HStreet , NW , Between , 5th and 7th Streets,",
    //   location: "US Copilot Building, Washington DC",
    //   coordinates: [51.52, -0.101],
    // },
  ];

  const coordinates = [{ cord: [51.505, -0.09] }, { cord: [51.51, -0.1] }, { cord: [51.52, -0.102] }];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      {coordinates?.map((list: any) => (
        <Popup position={list?.cord} autoClose={false} className={`custom-popup`}>
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
      ))}
    </div>
  );
};
export default ThreatDetails;
