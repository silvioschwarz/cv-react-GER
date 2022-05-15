import React from "react";
import Entry from "./Entry";
import education from "../data/education";
import experience from "../data/experience";

export default function RightColumn(props) {
  const educationElements = education.map((item) => {
    return (
      <Entry
        key={item.description}
        jobtitle={item.jobtitle}
        company={item.company}
        date={item.date}
        project={item.project}
        link={item.link}
        description={item.description}
      />
    );
  });

  const experienceElements = experience.map((item) => {
    return (
      <Entry
        key={item.description}
        jobtitle={item.jobtitle}
        company={item.company}
        date={item.date}
        project={item.project}
        link={item.link}
        description={item.description}
      />
    );
  });
  return (
    <div className="w3-twothird right-column">
      {/* <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey ">
          Silvio<strong>Schwarz</strong>
          </h2>
         <h4 className="w3-text-grey ">Geophysicist (B.Sc.)</h4>   
      </div> */}

      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey ">
          <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue-gray"></i>
          Work Experience
        </h2>
        {experienceElements}
      </div>

      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey">
          <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-blue-gray"></i>
          Education
        </h2>
        {educationElements}
      </div>

      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey">
          <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-blue-gray"></i>
          Projects
        </h2>
        haha
      </div>

      {/* <!-- End Right Column --> */}
    </div>
  );
}
