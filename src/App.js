import React, { useState } from 'react';

function App() {

  const [redlight, setRedlight] = useState("");
  const [yellowlight, setYellowlight] = useState("");
  const [greenlight, setGreenlight] = useState("");
  
  return (
    <>
    <div className="trafficLight">
      <div className="circles">
      <button type="button" className={"btn btn-danger rounded-circle buttonstyle " + redlight}  onClick={() => (setRedlight("light"), setYellowlight(""), setGreenlight(""))}> </button>
      <button type="button" className={"btn btn-warning rounded-circle buttonstyle " + yellowlight} onClick={() => (setRedlight(""), setYellowlight("light"), setGreenlight(""))}> </button>
      <button type="button" className={"btn btn-success rounded-circle buttonstyle " + greenlight } onClick={() => (setRedlight(""), setYellowlight(""), setGreenlight("light"))}> </button>
      </div>
    </div>
    </>
  );
}

export default App;
