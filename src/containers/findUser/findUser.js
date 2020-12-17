import React from "react";

export default function FindUser() {
  return (
    <>
      <div
        className="finduser"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter your delivery location"
          aria-label="Enter your delivery location"
          aria-describedby="button-addon2"
        />

        <button className="btn btn-warning" type="button" id="button-addon2">
          Find Food
        </button>
        <button
          className="btn btn-link"
          style={{
            height: "2.5rem",
            padding: "0 1rem",
            position: "absolute",
            transform: "translate(45rem,0.5rem)",
            color: "red",
          }}
        >
          clear
        </button>
        <button
          className="btn btn-secondary btn-sm"
          style={{
            height: "2.5rem",
            padding: "0 1rem",
            position: "absolute",
            transform: "translate(40rem,0.5rem)",
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/24/000000/compass-north.png"
            alt="c"
          />
          Locate Me
        </button>
      </div>

      <div className="dropdownContainer">
        <ul className="locationList">
          <li>kolkata,west bengal,india</li>
          <li>
            hit ech tea center,Baikunthapur road, paschatyapara, harinavi,
            kolkata,west bengal,india
          </li>
        </ul>
        <div className="locationerr" hidden>
          You have blocked Swiggy from tracking your location. To use this,
          change your location settings in browser.
        </div>
      </div>
    </>
  );
}
