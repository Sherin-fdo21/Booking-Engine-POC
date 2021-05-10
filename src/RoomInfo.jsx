import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RoomInfo.css";
import RoomNum from "./roomnum";
function RoomInfo() {
  const [selectedArrDate, setSelectedArrDate] = useState(null);
  const [selectedDepDate, setSelectedDepDate] = useState(null);
  function setRooms(event) {
    ReactDOM.render(
      <RoomNum total={event.target.value} />,
      document.getElementById("AllRooms")
    );
  }
  return (
    <div>
      <div className="main">
        <div className="main-top">
          <div className="main-topleft">
            <div>
              <h4>Arrival</h4>
              <DatePicker
                selected={selectedArrDate}
                onChange={(date) => setSelectedArrDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="dd/MM/yyyy"
              />
            </div>
            <div>
              <h4>Departure</h4>
              <DatePicker
                selected={selectedDepDate}
                onChange={(date) => setSelectedDepDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="main-topright">
            <div className="main-trt">
              <label for="rooms">No of Rooms:</label>
              <select name="Rooms" id="rooms" onChange={setRooms}>
              <option value="0">Select value</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div id="AllRooms"></div>
          </div>
           
        </div>
        <div className="main-bottom">
          <button className="btn btn-primary" style={{ width: "76%" }}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default RoomInfo;
