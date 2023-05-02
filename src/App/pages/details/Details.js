import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
const DetailsScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      return navigate("/");
    }
  });

  return (
    <div className="DetailsDiv">
      <div className="vehicleName">{state.name}</div>
      <div className="cardDetails">
        <img
          src={state.img}
          alt={"manoj"}
          style={{ aspectRatio: 16 / 9 }}
          className="imageDiv"
        />
        <ul className="listDiv">
          <li>Vehicle Name:{state.name}</li>
          <li>Cost:{state.Cost} lakhs</li>
          <li>MaximumPower:{state.MaximumPower} bhp</li>
          <li>Chargingtime:{state.Chargingtime} min</li>
          <li>BatteryCapacity:{state.BatteryCapacity} KWh</li>
          <li>MaximumTorque:{state.MaximumTorque} nm/rpm</li>
          <li>Weight:{state.Weight} kgs</li>

          <li>MileageFullcharge:{state.MileageFullcharge} km</li>

          <li>MaximumSpeed:{state.MaximumSpeed} km/hr</li>

          <li>BootSpace:{state.BootSpace} Litres</li>
        </ul>
      </div>
    </div>
  );
};
export default DetailsScreen;
