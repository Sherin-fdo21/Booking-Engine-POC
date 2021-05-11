import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
const RoomNum = (props) => {
    var list = [];
    for (var i = 1; i <= props.total; i++) {
      list.push(i);
    }
  return (  
    <div>
        
    {list.map(function(i){
        return (<div >
            <h6>Room-{i}</h6>
            <div class="col-md-offset-5 col-md-10 d-flex">
                <label  >Adults</label>
                <input type="number" min="1" max="7" className="col-md-3 mx-2" name="adults" />
                <label>Child</label>
                <input type="number" min="0" max="7" className="col-md-3 mx-2" name="child" />
            </div>
      
            
            
        </div>)
    })}

      
    </div>
  );
};
export default RoomNum;
