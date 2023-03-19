import React from "react";
import parse from "html-react-parser";
import { categories } from "../assets/data";

export const Services = () => {
  const servicesFetch = [
    {
      id: 5,
      title: "Frontier Technologies (Drones, VR..)",
      description1:
        "<p>We experiment with the use of frontier technologies (Drones and Virtual Reality), explore pathways to contextualize and scale up these technologies in the local context of Nepal.</p>",
      description2:
        "<p>We adopt frontier technologies like drones and virtual reality for efficient surveying and mapping and interactive navigation. Unmanned Aerial Vehicles (UAVs) or Drones are the emerging technological tools that help to capture high-resolution images of the earth&rsquo;s surfaces and objects over it while Virtual Reality is a type of reality emulation that the user becomes part of and it convinces the human brain of being in a real environment.</p>\r\n<p>We conduct drone flights for spatial data collection on a large scale. Drone image processing and data analysis are our technical competencies. We perform flight planning, capture aerial datasets, and image processing for UAV based data collection and mapping projects. These projects can be useful for collecting spatial data, mapping the earth&rsquo;s surface features, and carrying out research in the field of surveying and mapping, development projects, agriculture, and the environment.</p>",
      photo: "https://admin.naxa.com.np/media/pics/Services-icon4_nMRtrza.svg",
      icon: "https://admin.naxa.com.np/media/pics/Services-icon4_DBSUx36.svg",
      service_order: 5,
    },
    {
      id: 6,
      title: "Training & Capacity building (GIS and Web GIS)",
      description1:
        "<p>We provide tailored training packages in GIS Mapping, OpenStreetMap, and Web GIS to students, researchers, and government and non-government officials.</p>",
      description2:
        "<p>Besides the active projects that we do, we also put a lot of effort into training, awareness, and soft approaches for promoting mapping as a vital domain. Being one of the earliest startups focusing on geoinformation management and digital mapping in Nepal, NAXA has played a vital role in taking forward the whole sector of digital mapping in a country where mapping was in a really primitive form. The company has advocated for the significance of geodata in better planning and analysis. This includes a series of map literacy training, GIS mapping training, and also crowd mapping sessions that the company has voluntarily engaged in.</p>\r\n<p>We provide tailored training packages in GIS Mapping, OpenStreetMap, and Web GIS to students, researchers, and government and non-government officials. We also carry out research on the localization of the latest geospatial technologies. The team has gained good experience in leading training, advocacy sessions, and technical engagement around the same.</p>",
      photo: "https://admin.naxa.com.np/media/pics/Services-icon2.svg",
      icon: "https://admin.naxa.com.np/media/pics/Services-icon2_6mVrtem.svg",
      service_order: 6,
    },
    {
      id: 4,
      title: "GIS Mapping & Analysis",
      description1:
        "<p>The core domain of the company is digital mapping. We work in desktop, web, and mobile mapping and produce accurate and visually appealing digital maps.</p>",
      description2:
        "<p>We provide GIS-based geodata management and analysis services ranging from geographical data handling to spatial analysis for informed decision-making. We emphasize digital mapping and provide services that allow users to create maps in a digital medium, interact over the maps, and draw meaningful information via map-based queries. We specialize in the development of online GIS applications to visualize and analyze spatial datasets.</p>\r\n<p>We develop location-based digital mapping applications and services for both web and mobile platforms. We also develop geo-portals that allow the organization and even government bodies to create and maintain a map-based inventory of their works, projects, or any other datasets that can be associated with specific locations. Besides, We have developed our custom methodology for Participatory mapping in the communities of Nepal where we combine Digital Mapping techniques with the community-based participatory approach to come up with an updated map of the community in both papers as well as a digital medium.</p>",
      photo: "https://admin.naxa.com.np/media/pics/Services-icon1_we3DfN3.svg",
      icon: "https://admin.naxa.com.np/media/pics/Service-img-2.png",
      service_order: 2,
    },
    {
      id: 2,
      title: "Data Collection & Visualization",
      description1:
        "<p>We focus on the use of location datasets and visualizing them through interactive and customized map-based applications and portals.</p>",
      description2:
        "<p>We have core expertise in data visualization and digital mapping services. Focusing on the use of geo-tagged datasets and visualizing theme map-based applications and platforms, we also promote the use of interactive maps as data dissemination media.</p>\r\n<p>Data visualization is an important aspect as the patterns are necessary for a better understanding of scattered datasets and details. We develop software systems and digital solutions that contribute to data visualization in different forms. We prepare maps on paper as per Client requests, be it Topographical Maps, Tourist Maps, or Project location maps, we provide mapping services under different themes. We design both hard copy and soft copy atlas maps to visualize thematic map data in an easily understandable format. We also develop Information boards both static and interactive digital map boards, which can be installed on streets and outside locations to disseminate map-based information.</p>",
      photo: "https://admin.naxa.com.np/media/pics/Services-icon3_oJoxJLJ.svg",
      icon: "https://admin.naxa.com.np/media/pics/Services-icon3_wqCud6l.svg",
      service_order: 3,
    },
    {
      id: 1,
      title: "Creative Graphic Design",
      description1:
        "<p>The core domain of the company is digital mapping. We work in desktop, web and mobile mapping and produce accurate and visually appealing digital maps.</p>",
      description2: "",
      photo: "https://admin.naxa.com.np/media/pics/Services-7.svg",
      icon: "https://admin.naxa.com.np/media/pics/Services-7_WaCLYD2.svg",
      service_order: 7,
    },
    {
      id: 8,
      title: "ICT & Digital Development Research",
      description1:
        "<p>The core domain of the company is digital mapping. We work in desktop, web and mobile mapping and produce accurate and visually appealing digital maps.</p>",
      description2: "",
      photo: "https://admin.naxa.com.np/media/pics/Services-4.svg",
      icon: "https://admin.naxa.com.np/media/pics/Services-4_a9uPp5x.svg",
      service_order: 4,
    },
    {
      id: 3,
      title: "Software & Apps Development",
      description1:
        "<p>We build digital applications to provide digital solutions that contribute to efficient data collection and visualization focusing mainly on geodata collection and visualization.</p>",
      description2:
        "<p>We develop digital software solutions ensuring smooth performances and user experiences across all modern platforms and devices. Whether it's a digital application for a private organization or a set of software solutions for development organizations, we offer support for the full lifecycle of the software development process that includes system design, development, testing, deployment, handover, and support, these activities are conducted with world-class product design and development practices.</p>\r\n<p>Our services include building custom Android and iOS applications, web applications, and tools. We are particularly strong in customizing open-source applications such as ODKCollect and KoboCollect and building advanced GIS Applications. We specialize in delivering large-scale projects in challenging environments on short timelines. We build products that allow efficient data management, aid in e-governance, and data analysis, visualization of both spatial and demographic datasets by integrating open standards, and advanced software development frameworks and tools. This has allowed our customers to make informed data-driven decisions.</p>",
      photo: "https://admin.naxa.com.np/media/pics/Services-icon5.svg",
      icon: "https://admin.naxa.com.np/media/pics/Service-img-1.png",
      service_order: 1,
    },
  ];

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
        {servicesFetch.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-col items-center mb-28  ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* <div className="w-1/2 md:w-1/3"> */}
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
