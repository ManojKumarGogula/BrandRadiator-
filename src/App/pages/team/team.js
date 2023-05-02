import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Autoplay } from "swiper";
import Header from "../../components/Header/header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
function SupportTeamContactDetails() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const moveSlideForward = () => {
    swiperInstance.slideNext();
  };

  const moveSlideBackward = () => {
    swiperInstance.slidePrev();
  };
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess("Copied to clipboard!");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  };
  const teamData = [
    {
      name: "K.Tejaswi",
      jntu: "19341A0242",
      email: "tejaswikorada26@gmail.com",
      phone: "8317661499",
    },

    {
      name: "V. Lalitha Devi",
      jntu: "19341A0248",
      email: "lalithavalisetty23@gmail.com",
      phone: "73370 95664",
    },
    {
      name: "G.Shreya",
      jntu: "19341A0230",
      email: "shreyachandan123@gmail.com",
      phone: "7032930354",
    },
    {
      name: "B.Suresh",
      jntu: "19341A0210",
      email: "mr.sureshballahh@gmail.com",
      phone: "9390621918",
    },
    {
      name: "M.Dheeraj ",
      jntu: "19341A0254 ",
      email: "dheerajmadugula3@gmail.com",
      phone: "9441345451",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-200 text-primaryText">
        <div className="flex flex-col items-center ">
          <div className="text-24 font-700 my-28 "> Our Support Team</div>
          <div className="flex flex-row items-center">
            <div>
              <div onClick={moveSlideForward}>
                <ArrowBackIosIcon />
              </div>
            </div>
            <Swiper
              onInit={(swiper) => {
                setSwiperInstance(swiper);
              }}
              loop={true}
              speed={800}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              slidesPerView={window.innerWidth <= 640 ? 1 : 3}
              spaceBetween={30}
              pagination={true}
              effect={"cards"}
              className="w-[80vw] xl:w-[80vw]  rounded-2xl"
            >
              {teamData.map((item, id) => {
                return (
                  <SwiperSlide key={`slide-${id}`}>
                    <div className="w-full  px-4 py-8 bg-subChip rounded-lg shadow-lg text-13">
                      <h1 className="text-3xl font-bold mb-4 hover:text-secondary">
                        {item.name}
                      </h1>
                      <div className="mb-4 group">
                        <h2 className="text-xl font-bold mb-2">JNTU NO:</h2>
                        <div className="flex flex-row items-center w-5/6">
                          <p
                            className="text-gray-700 hover:text-secondary"
                            onClick={() => handleCopyClick(item.jntu)}
                          >
                            {item.jntu}
                          </p>
                          <p className="text-8 text-inputText hidden group-hover:block ml-auto">
                            {copySuccess || "click to copy"}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 group">
                        <h2 className="text-xl font-bold mb-2">Phone:</h2>
                        <div className="flex flex-row items-center w-5/6">
                          <p
                            className="text-gray-700 hover:text-secondary"
                            onClick={() => handleCopyClick(item.phone)}
                          >
                            +91 {item.phone}
                          </p>
                          <p className="text-8 text-inputText hidden group-hover:block ml-auto ">
                            {copySuccess || "click to copy"}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 group">
                        <h2 className="text-xl font-bold mb-2">Email:</h2>
                        <div className="flex flex-row items-center">
                          <p
                            className="text-gray-700 hover:text-secondary"
                            onClick={() => handleCopyClick(item.email)}
                          >
                            {item.email}
                          </p>
                          <p className="text-8 text-inputText hidden group-hover:block ml-auto">
                            {copySuccess || "click to copy"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div onClick={moveSlideBackward}>
              <ArrowForwardIosSharpIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTeamContactDetails;
