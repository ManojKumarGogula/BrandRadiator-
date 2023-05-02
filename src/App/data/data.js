import Hundai from "../asserts/Hyundai.jpg";
import MahindraEV from "../asserts/Mahindraeverito.jpg";
import MadhindraEzo from "../asserts/Mahindraezoplus.jpg";
import Mgzs from "../asserts/Mgzs.jpg";
import Stromr3 from "../asserts/Stromr3.jpg";
import Tatanexon from "../asserts/Tatanexon.jpg";
import TataTigor from "../asserts/Tatatigor.jpg";

export const vehicles = [
  {
    name: "Hyundai Kona",
    img: Hundai,
    Cost: 24,
    MaximumPower: 134.14,
    Chargingtime: 57,
    BatteryCapacity: 39.2,
    MaximumTorque: 394.91,
    Weight: 1535,
    MileageFullcharge: 452,
    MaximumSpeed: 165,
    BootSpace: 332,
  },
  {
    name: "Tata Tigor ",
    img: TataTigor,
    Cost: 13,
    MaximumPower: 73.75,
    Chargingtime: 120,
    BatteryCapacity: 26,
    MaximumTorque: 73.75,
    Weight: 1235,
    MileageFullcharge: 306,
    MaximumSpeed: 120,
    BootSpace: 316,
  },
  {
    name: "MG ZS ",
    Cost: 25,
    img: Mgzs,
    MaximumPower: 140.8,
    Chargingtime: 360,
    BatteryCapacity: 44.5,
    MaximumTorque: 350,
    Weight: 1609,
    MileageFullcharge: 340,
    MaximumSpeed: 140,
    BootSpace: 470,
  },
  {
    name: "Storm Motor r3",
    img: Stromr3,
    Cost: 4.5,
    MaximumPower: 20.11,
    Chargingtime: 180,
    BatteryCapacity: 6,
    MaximumTorque: 90,
    Weight: 550,
    MileageFullcharge: 200,
    MaximumSpeed: 80,
    BootSpace: 300,
  },
  {
    name: "Mahindra E verito",
    img: MahindraEV,
    Cost: 11,
    MaximumPower: 41.57,
    Chargingtime: 120,
    BatteryCapacity: 21.2,
    MaximumTorque: 91,
    Weight: 1704,
    MileageFullcharge: 140,
    MaximumSpeed: 86,
    BootSpace: 510,
  },
  {
    name: "Tata Nexon ",
    img: Tatanexon,
    Cost: 17,
    MaximumPower: 127,
    Chargingtime: 90,
    BatteryCapacity: 30.2,
    MaximumTorque: 245,
    Weight: 1400,
    Mileagefullcharge: 312,
    MaximumSpeed: 120,
    BootSpace: 350,
  },
  {
    name: "Mahindra ezo plus",
    img: MadhindraEzo,
    Cost: 11,
    MaximumPower: 40,
    Chargingtime: 75,
    BatteryCapacity: 10.08,
    MaximumTorque: 91,
    Weight: 1310,
    MileageFullcharge: 99.9,
    MaximumSpeed: 80,
    BootSpace: 135,
  },
];
let keys = [];
let idealData = {
  name: null,
  img: null,
  Cost: null,
  MaximumPower: null,
  Chargingtime: null,
  BatteryCapacity: null,
  MaximumTorque: null,
  Weight: null,
  Mileagefullcharge: null,
  MaximumSpeed: null,
  BootSpace: null,
};
keys = Object.keys(vehicles[0]);

export const data = () => {
  vehicles.map((vehicle) => {
    keys.map((key) => {
      if (idealData[key] < vehicle[key]) {
        idealData[key] = vehicle[key];
      }
    });
  });
  return idealData;
};
