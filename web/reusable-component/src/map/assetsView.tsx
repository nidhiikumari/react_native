import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Circle,
  LayerGroup,
  Tooltip,
} from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { jakarta } from "./data";

const AssetsView = ({setIsAssetsView, setMapCenter, setZoomValue, setClosePopUpOnClick, setSelectedMapView}: any) => {
  const center: any = [51.505, -0.09];
  const rectangle: any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prevState) => (prevState + 1) % 3);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };

  const handleClickCircle = (event: any) => {
    setSelectedMapView("threatDetails");
    console.log(event?.latlng, "circle click");
    // setMapCenter([event?.latlng.lat, event?.latlng.lng])
    // setMapCenter([52.52, 13.405])
    setMapCenter([51.505, -0.09])
    setZoomValue(15)
    setClosePopUpOnClick(false)
  };

  const circles = [
    { radius: 400, delay: 0.1 },
    { radius: 200, delay: 0.8 },
  ];

  const assetsThreats: any = [
    {
      severity: "high",
      color: "red",
      center: [51.51, -0.08],
    },
    {
      severity: "moderate",
      color: "#FFCC00",
      center: [51.505, -0.09],
    },
    {
      severity: "low",
      color: "#75BB2F",
      center: [51.525, -0.1],
    },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {assetsThreats?.map((threats: any) =>
        threats?.severity === "high" ? (
          <LayerGroup>
            {circles.map((circle, index) => (
              <AnimatedCircle
                key={index}
                radius={circle.radius}
                delay={circle.delay}
                animationState={animationState}
                center={threats.center}
                handleClickCircle={handleClickCircle}
              />
            ))}
          </LayerGroup>
        ) : (
          <LayerGroup>
            {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}
            <Circle
              center={threats?.center}
              fillColor={threats.color}
              radius={130}
              stroke={false}
              fillOpacity={0.4}
              // fillOpacity={0.7}
            />
            <Circle
              center={threats?.center}
              fillColor={threats.color}
              radius={100}
              stroke={false}
              fillOpacity={0.9}
              eventHandlers={{ click: handleClickCircle }}
              // fillOpacity={0.7}
            >
              <Tooltip className="popup">
                <div
                  style={{
                    textAlign: "start",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>3</p>
                  <p>
                    Human intel: <span style={{ fontWeight: "bold" }}>2</span>
                  </p>
                  <p>
                    Open Source: <span style={{ fontWeight: "bold" }}>1</span>
                  </p>
                  <p style={{ color: "red" }}>view details</p>
                </div>
              </Tooltip>
            </Circle>
          </LayerGroup>
        )
      )}

      {/* <Circle className="circle delay1" fillColor="red"  center={[51.51, -0.08]} radius={400} />
      <Circle className="circle delay2" fillColor="red"  center={[51.51, -0.08]} radius={200} />
      <Circle  fillColor="rgb(87, 5, 5)" stroke={false} pathOptions={fillRedOptions} fillOpacity={0.9} center={[51.51, -0.08]} radius={100} /> */}
    </div>
  );
};

const AnimatedCircle = ({ radius, delay, animationState, center, handleClickCircle }: any) => {
  const opacity: any = animationState === 1 ? 0.4 : 0.5;

  return (
    <>
      <div className="animated-circle delay1">
        <Circle
          center={center}
          radius={radius}
          pathOptions={{
            fillColor: "red",
            fillOpacity: opacity,
            stroke: false,
          }}
        />
      </div>
      <Circle
        center={center}
        radius={100}
        pathOptions={{
          fillColor: "rgb(87, 5, 5)",
          stroke: false,
          fillOpacity: 0.7,
        }}
        eventHandlers={{ click: handleClickCircle }}
      >
        <Tooltip className="popup">
          <div
            style={{
              textAlign: "start",
              paddingLeft: "12px",
              paddingRight: "12px"
            }}
          >
            <p style={{ fontWeight: "bold" }}>3</p>
            <p>
              Human intel: <span style={{ fontWeight: "bold" }}>2</span>
            </p>
            <p>
              Open Source: <span style={{ fontWeight: "bold" }}>1</span>
            </p>
            <p style={{ color: "red" }}>view details</p>
          </div>
        </Tooltip>
      </Circle>
    </>
  );
};

export default AssetsView;
