import React from "react";

export default function Language(props) {
  return (
    <div>
      <p className="languageTitle">{props.language}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div className="w3-container w3-center w3-round-xlarge w3-blue-gray" style={{ width: props.skill }}>
          {props.skill}
        </div>
      </div>
    </div>
  );
}