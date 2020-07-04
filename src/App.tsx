import React from "react";
import SplitPane from "react-split-pane";
import "./App.css";

function App() {
  return (
    <SplitPane split="vertical" minSize={50} defaultSize={300}>
      <div>Settings</div>
      <div>Result</div>
    </SplitPane>
  );
}

export default App;
