import React, { useEffect } from "react";
import parse from "html-react-parser";
import { categories } from "../assets/data";
import { useDispatch, useSelector } from "react-redux";
import { getServicesFetch } from "../actions/actions";

export const Services = () => {
  const dispatch = useDispatch();
  const servicesFetch = useSelector(
    (state: any) => state.fetchServices.services
  );

  useEffect(() => {
    dispatch(getServicesFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative bg-light_white w-full mt-[60%] md:mt-[10%] sm:mt-[20%] "
      id="services"
    >
      <div className="absolute  container mx-auto px-4 z-10 -top-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 lg:space-y-0 items-center justify-center md:flex-row bg-white py-2 lg:px-8 space-x-6 lg:space-x-10 shadow-2xl rounded-sm text-[gray] font-bold">
        {categories.map((service, index) => (
          <div key={index}>
            <span>{service}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col  items-center px-10 md:px-44 pt-[60%] md:pt-[10%] sm:pt[20%] [&>*:nth-child(odd)]:self-end [&>*:nth-child(even)]:self-start  w-full">
        {servicesFetch.map((service: any, index: any) => (
          <div
            key={index}
            className={`flex flex-col md:flex-col items-center mb-28  ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div
              className={` mb-16 md:mb-0 ${
                index % 2 === 0 ? "mr-0 md:mr-40" : "ml-0 md:ml-40"
              }  `}
            >
              <img src={service.icon} alt={service.title} width={3500} />
            </div>

            <div className="flex flex-col">
              <img
                src={service.photo}
                alt="icon"
                width={60}
                className={`pb-5  ${index % 2 === 0 ? "self-start" : ""}`}
              />
              <span className="text-[34px] pb-8 leading-normal font-bold text-[#333132]">
                {service.title}
              </span>
              <span className="text-gray pb-10">
                {parse(service.description1)}
              </span>
              <span className="bg-bg_gray p-6 text-[16px]">
                {parse(service.description2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
