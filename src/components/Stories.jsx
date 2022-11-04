import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Stories = ({story: {title, news}}) => {
  return (
    <>
      <div className="nike-container mt-12 rounded">
      <div className="rounded">
        <Splide className="mt-8 rounded">
          {news?.map((val, i) => (
            <SplideSlide key={i} className="rounded max-w-3xl">
              <div className="border w-full h-full">
                <img src={val.img} alt="" className="rounded h-full w-full" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      </div>
    </>
  );
};

export default Stories;
