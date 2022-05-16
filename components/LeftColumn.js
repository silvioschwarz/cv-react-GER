import React from "react";
// import {cvImage} from "../img/cvImg.png";
import languages from "../data/languages";
import programming from "../data/programming";
import expertise from "../data/expertise";
import Expertise from "./Expertise";
import Language from "./Language";

export default function LeftColumn(props) {
  const expertiseComp = expertise.map((item) => {
    return <Expertise key={item.title} title={item.title} />;
  });

  const languagesComp = languages.map((item) => {
    return (
      <Language
        key={item.language}
        language={item.language}
        skill={item.skill}
      />
    );
  });

  const programmingComp = programming.map((item) => {
    return (
      <Language
        key={item.language}
        language={item.language}
        skill={item.skill}
      />
    );
  });

  return (
    <div className="w3-third left-column">
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          <img src="./img/cvImg.png" className="cvImage" />
          <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2 className="w3-text-white">Silvio Schwarz</h2>
          </div>
        </div>
        <div className="w3-container">
          <div className="nomargin">
            <p>
              <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue-gray"></i>
              Geowissenschaftler (B.Sc.)
            </p>
            <p className="info">
              <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue-gray"></i>
              Potsdam, Deutschland
            </p>
            <p className="info">
              <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue-gray"></i>
              admin@silvioschwarz.com
            </p>
            <p className="info">
              <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue-gray"></i>
              +49 174 6507598
            </p>
          </div>

          <div className="expertise">
            <p className="w3-large extra">
              <b>Expertise</b>
            </p>
            <div className="expertise-container">{expertiseComp}</div>
          </div>

          <div className="skills">
            <p className="w3-large">
              <b>Fähigkeiten</b>
            </p>
            <i className="fa fa-linux fa-fw w3-margin-right w3-xxxlarge w3-text-blue-gray"></i>
            <i className="fa fa-windows fa-fw w3-margin-right w3-xxxlarge w3-text-blue-gray"></i>
            <div>{programmingComp}</div>
          </div>

          <div>
            <p className="w3-large w3-text-theme">
              <b>
                {/* <i className="fa fa-globe fa-fw w3-margin-right w3-text-blue-gray"></i> */}
                Sprachen
              </b>
            </p>
            {languagesComp}
          </div>
          <div>
            <p className="w3-large w3-text-theme">
              <b>Zertifikate</b>
            </p>
            <div className="w3-large w3-text-theme nomargin">
              <u>
                <strong>Tensorflow</strong>
              </u>
              <div className="certificates">
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/WNXPGV8FR3AF">
                  Developer,
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R4LSQ7AK8M83">
                  Data and Deployment,
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5DDY3GKK3YTV">
                  Advanced Techniques,
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/KA3YGBWN8RM2">
                  {/* Generative Adversarial Networks (GANs) */}GANs,
                </a>
                <a href="https://www.coursera.org/account/accomplishments/certificate/JKHKJWYFUT43">
                  {/* Natural Language Processing (NLP) */}NLP,
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/SCJJ3AWTKR4B">
                  {/* Machine Learning Engineering for Production (MLOps) */}
                  MLOps
                </a>
              </div>

              <u>
                <strong>Google</strong>
              </u>
              <div className="certificates">
                <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/U9C59W5MS826">
                  Google IT Support
                </a>
              </div>

              <u>
                <strong>Stanford University</strong>
              </u>

              <div className="certificates">
                <a href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972304~5332413/pdf">
                  Machine Learning
                </a>
              </div>

              <u>
                <strong>IBM</strong>
              </u>
              <div className="certificates">
                <a href="https://www.coursera.org/account/accomplishments/certificate/JNSWNP2SMB6A">
                  IBM Full Stack-Cloudentwickler
                </a>
              </div>
            </div>
          </div>

          <p className="w3-large w3-text-theme">
              <b>Interessen</b>
            </p>
          <div className="wordcloud">
            <img src="./img/wordcloudGER-1.png"></img>
          </div>
        </div>
        <footer className="w3-container w3-blue-gray w3-center w3-margin-top">
      <p>Social Media</p>
      <i className="fa fa-github fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-linkedin fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-instagram fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-twitter fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
    </footer>
      </div>
      <br />

      {/* <!-- End Left Column --> */}
    </div>
  );
}
