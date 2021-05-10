import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RoomInfo.css";
function RoomInfo() {
  const [selectedArrDate, setSelectedArrDate] = useState(null);
  const [selectedDepDate, setSelectedDepDate] = useState(null);
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
                  <label>Rooms</label>
                  <input type="number" min="1"/>
                  </div>
              <div className="main-trb">
              <label>Adults</label>
                  <input type="number" min="0"/>
                  <label>Child</label>
                  <input type="number" min="0"/>
              </div>
          </div>
        </div>
        <div className="main-bottom">
             <button className="btn btn-primary" style={{"width":"100%"}}>Search</button>
        </div>
      </div>
    </div>
  );
}
export default RoomInfo;
