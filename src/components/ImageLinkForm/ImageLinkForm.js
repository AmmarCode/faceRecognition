import React from "react";
import "tachyons";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="relative">
      <p className="center f2">{"Try this cool face recognition feature"}</p>
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
            className="sega w-30 grow f4 link ph3 pv2 dib bg-light-green center"
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
