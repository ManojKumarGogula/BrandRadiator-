import React, { useState } from "react";
import Header from "../../components/Header/header";
import Swiper from "../../components/swiper/Swiper";
import SearchBox from "../../components/searchBox";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { vehicles } from "../../data/data";
import { data } from "../../data/data";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import "./styles.css";
const HomePage = () => {
  const [sortField, setSortField] = useState(null);
  const IdealData = data();
  const [value, setValue] = useState(1);
  const [filterData, setFilterData] = useState({});

  const navigate = useNavigate();
  const renderCardsContent = () => {
    if (filterData) {
      const filterValues = Object.keys(filterData);
      const result = vehicles.filter((vehicle) => {
        let showVehicle = true;
        filterValues.map((item) => {
          const vehiclepro = (vehicle[item] / IdealData[item]) * 100;
          if (filterData[item] <= vehiclepro) showVehicle = false;
        });
        if (showVehicle) return vehicle;
      });
      return (
        <>
          <div className="hedingDiv">Best Match</div>
          {result.length ? (
            <div className="cardsMapDiv">
              {result.map((vehicle) => {
                return (
                  <div onClick={() => navigate("/details", { state: vehicle })}>
                    <Card vehicle={vehicle} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="notFoundText">No vehicles found</div>
          )}
        </>
      );
    }
    return (
      <>
        <div className="trendingDiv">Trending Machines</div>
        <div className="cardsGrid">
          {vehicles.map((vehicle) => {
            return (
              <div onClick={() => navigate("/details", { state: vehicle })}>
                <Card vehicle={vehicle} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Outlet />
        <Swiper  />
      <SearchBox
        setSortField={setSortField}
        setValue={setValue}
        value={value}
        sortField={sortField}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      {renderCardsContent()}
      <div>
        <FloatingWhatsApp
          phone={"7032930354"}
          zIndex={999}
          size={50}
          showOnIE={false}
        />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
