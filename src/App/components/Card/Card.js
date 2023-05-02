import React from "react";
import "./styles.css";
const Card = (props) => {
  const { vehicle } = props;
  return (
    <div className="cardWrapper">
      <img
        src={vehicle.img}
        className="imagediv"
        style={{ aspectRatio: 16 / 9 }}
      />
      <div>
        <div style={{ lineClamp: 2 }}>Model: {vehicle.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Cost:{vehicle.Cost} lakhs</div>
        </div>
        <div
          style={{ fontSize: 12, color: "Window", paddingTop: 4 }}
        >
          <div>MaximumPower: {vehicle.MaximumPower} bhp</div>
          <div>Chargingtime:{vehicle.Chargingtime} min</div>
          <div>BatteryCapacity:{vehicle.BatteryCapacity} KWh</div>
          <div>MaximumTorque: {vehicle.MaximumTorque} nm/rpm</div>
          <div>Weight:{vehicle.Weight} kgs</div>
          <div>MileageFullcharge:{vehicle.MileageFullcharge} km</div>

          <div>MaximumSpeed:{vehicle.MaximumSpeed} km/hr</div>
          <div>BootSpace:{vehicle.BootSpace} Litres</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
