
import React from "react";
import Header from "../App/components/Header/header";
import Footer from "../App/components/Footer/Footer";
import "./styles.css"
const LayOut = (element) => {
  return (
    <div className="layoutWrapper">
      <div className="Headerwrap">
        <Header />
      </div>
      {element}
      <div className="footerWrapperDiv">
        <Footer />
      </div>
    </div>
  );
};
export default LayOut;
