import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MainCarousel from "./MainCarousel";
import RoomInfo from "./RoomInfo";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-main"> 
        <div className="app-left">
          <MainCarousel />
        </div>
        <div className="app-right">
          <RoomInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
