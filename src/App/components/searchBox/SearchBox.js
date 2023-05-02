import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import "./styles.css";
const SearchBox = (props) => {
  const { setSortField, value, setFilterData, filterData } = props;
  const handleChanges = (event, newValue, item) => {
    let array = { ...filterData };

    array[item] = newValue;
    setFilterData({ ...array });
  };
  const [filterValue, setFilterValue] = useState("");
  const [filters, setFilters] = useState([]);
  const [sortArray, setSortArray] = useState([
    "Cost",
    "MaximumPower",
    "Chargingtime",
    "BatteryCapacity",
    "MaximumTorque",
    "Weight",
    "MileageFullcharge",
    "MaximumSpeed",
    "BootSpace",
  ]);
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleReset = () => {
    setSortField(null);
    setFilterData({});
  };

  const handleFIltersAdd = () => {
    if (filterValue) {
      setFilters([...filters, filterValue]);
      let index = sortArray.indexOf(filterValue);
      let array = [...sortArray];
      array.splice(index, 1);
      setSortArray([...array]);
    }
  };
  return (
    <div className="wrapperDiv">
      <div>
        <p className="heading">Wanna Find Electric Vehicle?</p>
        <div className="selectDiv">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterValue}
            // label="add Filters"
            onChange={handleChange}
            className="select"
          >
            {sortArray.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
          <button className="filterButton" onClick={handleFIltersAdd}>
            Add Filter
          </button>
          <div className="sliderrapper">
            {filters.map((item) => {
              return (
                <div className="silderWrapperDiv">
                  <div className="itemName">{item}</div>
                  <Slider
                    aria-label="Volume"
                    value={filterData[item]}
                    defaultValue={0}
                    min={10}
                    max={100}
                    onChange={(event, newValue) =>
                      handleChanges(event, newValue, item)
                    }
                    style={{ marginLeft: "8%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="showAll">
          <button onClick={handleReset}>Show All</button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
