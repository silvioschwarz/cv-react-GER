import React from "react";

export default function Entry(props) {
  const desc = props.description;
  const elements = desc.map((element) => <li key={element}>{element}</li>);
  return (
    <div className="w3-container">
      <h5 className="w3-opacity nomargin">
        <b className="entry-title">
          <span>{props.jobtitle}</span><span>{props.company}</span>
        </b>
      </h5>
      <h6 className="w3-text-blue-gray no-top-margin">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        {props.date}
        {/* <!-- <span className="w3-tag w3-blue-gray w3-round">Current</span> --> */}
      </h6>
      <p className="nomargin">{props.project} {props.link && <a href={props.link}>Example</a>}</p>
      <ul>{elements}</ul>
      {/* <hr className="entry-hr"/> */}
    </div>
  );
}
