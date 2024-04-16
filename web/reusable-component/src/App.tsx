import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button";
import CountryFlag from "./map/countryFlag";
import MarkerFlag from "map/markerFlag";
import MapView from "map/mapView";
import ThreatDetails from "map/threatDetails";
import CustomPopups from "map/mapExample";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CountryFlag /> */}
      {/* <MarkerFlag /> */}
      <MapView />
      {/* <ThreatDetails /> */}
      {/* <CustomPopups /> */}

    </div>
  );
}

export default App;
