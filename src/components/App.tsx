import React from "react";
import SplitPane from "react-split-pane";
import Canvas from "./Canvas";
import "./App.css";

function App() {
  return (
    <SplitPane split="vertical" minSize={50} defaultSize={300}>
      <div>Settings</div>
      <div>
        <h2>Result</h2>
        <Canvas />
      </div>
    </SplitPane>
  );
}

export default App;
