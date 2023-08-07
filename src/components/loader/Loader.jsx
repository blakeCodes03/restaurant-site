import React from "react";
// import styles from "./loader.module.scss";
import "./loader.scss";

function Loader() {
  
  return (
    <div  >
      {/* <div className="loader">
        <div className="tall-stack">
          <div className="butter falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="pancake falling-element"></div>
          <div className="plate">
            <div className="plate-bottom"></div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer> */}

      {/* pulse loader */}
      <div className="pulse-wrapper z-10">
        <div className="pulse z-10"></div>
      </div>
    </div>
  );
}

export default Loader;
