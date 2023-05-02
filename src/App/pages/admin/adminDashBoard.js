import React, { useState } from "react";
import "./styles.css";
const Admin = () => {
  const adminData = JSON.parse(localStorage.getItem("FORMDATA"));
  const [index, setIndex] = useState();
  const renderCard = () => {
    if (!index)
      return (
        <div>
          <img
            src="https://www.pngfind.com/pngs/m/29-292083_business-people-shadows-of-business-people-hd-png.png"
            alt="manoj"
            className="personsDiv"
            style={{ aspectRatio: 16 / 11 }}
          />
        </div>
      );
    const data = adminData[index];
    return (
      <div className="cardv2">
        <div className="labelWrap"> 
          <span className="label" style={{marginRight:"42px"}}>Name:</span>
          {data.name}
        </div>
        <div className="labelWrap">
          <span className="label" style={{marginRight:"44px"}}>Email:</span>
          {data.email}
        </div>
        <div className="labelWrap">
          <span className="label" style={{marginRight:"20px"}}>Message:</span>
          {data.message}
        </div>
      </div>
    );
  };
  return (
    <div className="adminWrapper">
      <p className="heading">Dashboard</p>
      <div className="box">
        <div className="row1">
          <div className="headingText">Name</div>
          <div className="listDiv">
            {adminData &&
              adminData.map((item, index) => {
                return (
                  <div className="chip" onClick={() => setIndex(`${index}`)}>
                    {item.name}
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div className="divider"></div> */}
        <div className="row2">{renderCard()}</div>
      </div>
    </div>
  );
};

export default Admin;
