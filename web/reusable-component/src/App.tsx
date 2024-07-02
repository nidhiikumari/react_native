import React from "react";
// import logo from './logo.svg';
import "./App.css";
import MapView from "map/mapView";
import ReusableTable from "materialUi/table";
import MouseOverPopover from "materialUi/checkFile";
import OverrideColumnMenuGrid from "materialUi/muiTable";
import Login from "auth/login";
import CountryFlag from "country/countryFlag";
import MarkerFlag from "map/markerFlag";

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
      <MarkerFlag />
      {/* <MapView /> */}
      {/* <ThreatDetails /> */}
      {/* <CustomPopups /> */}

      {/* <ReusableTable /> */}
      {/* working table */}
      {/* <OverrideColumnMenuGrid /> */}

      {/* <MouseOverPopover /> */}
      {/* <Login /> */}

      {/* country flag */}
      {/* <CountryFlag /> */}
    </div>
  );
}

export default App;
