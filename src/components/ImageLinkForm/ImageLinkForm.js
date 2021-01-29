import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, imageUrl }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Search will detect faces in your pictures. Give it a try."}
      </p>
      {imageUrl === "" ? (
        <div className="exemple-box">
          <h1>Exemple link:</h1>
          <div className="text-box">
            <div className="text-exemple">
              https://i2-prod.mirror.co.uk/incoming/
              article14334083.ece/ALTERNATES/s615/
              3_Beautiful-girl-with-a-gentle-smile.jpg
            </div>
          </div>
        </div>
      ) : null}
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue"
            onClick={onButtonSubmit}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
