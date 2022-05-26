import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h2>{time}</h2>
      <button>Time</button>
    </div>
  );
}

export default App;
