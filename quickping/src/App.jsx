import React, { useState } from "react";
import "./styles/App.css";

function App() {
  const [isTesting, setIsTesting] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState(null);

  const startSpeedTest = () => {
    setIsTesting(true);
    setNetworkSpeed(null);
    console.log("Speed Test in Progress ...");

    setTimeout(() => {
      const simulatedSpeed = Math.random() * (100 - 20) + 20; // Random speed between 20 and 100 Mbps
      setNetworkSpeed(simulatedSpeed.toFixed(2));
      setIsTesting(false);
    }, 3000); // Simulate a 3-second network test
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QuickPing</h1>
        <p>Your network speed test tool.</p>
        <button onClick={startSpeedTest} disabled={isTesting}>
          {isTesting ? "Testing..." : "Start Test"}
        </button>
        {networkSpeed && (
          <div className="speed-result">
            <h2>Speed Test Result:</h2>
            <p>{networkSpeed} Mbps</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
