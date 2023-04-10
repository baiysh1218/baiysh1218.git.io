import React from "react";
import { signInWithGoole } from "./fire";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}>
      <button
        style={{ width: "50%", height: "20%", border: "none" }}
        onClick={signInWithGoole}>
        Google
      </button>
    </div>
  );
};

export default App;
