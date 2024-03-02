import "./App.css";
import * as React from "react";
import WeatherData from "./components/Weather.jsx";
import Clock from "./components/Clock.jsx";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-page">left Section</div>
        <div className="right-page">
          <Clock />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default App;
