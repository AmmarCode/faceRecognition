import React from "react";
import "tachyons";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div style={{ position: "relative" }}>
      <p className="f3 center">{"Try this cool face recognition feature"}</p>
      <div className="center">
        <div
          className="center pa4 br3 shadow-5"
          style={{
            background: "linear-gradient(to left, #00ffcc 30%, #99ff99)",
          }}
        >
          <input
            className="pa2 f4 w-70 dib pv2 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            style={{
              color: "#2952a3",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
            className="w-30 grow f4 link ph3 pv2 dib bg-light-green center"
			onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
