import React from "react";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Footer from "./components/Footer";

export default function App() {
  // const elements = data.map(element => {
  //   return <MyComponent key={element.arg1}  arg1={element.arg1} arg2={element.arg2}/>
  // });
  // return (
  //   <div>
  //     {elements} 
  //   </div>
  // );

  return(
    <div className="w3-content w3-margin-top" style={ {"max-width": "1440px"} }>
      <div className="w3-row-padding">
      <LeftColumn />
      <RightColumn />
      </div>
      <Footer />
    </div>
  )
}