import React from "react";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactPortfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactPortfolio,
      demo: "https://6687b266f0d09218dac261ab--mianalikhalid-portfolio.netlify.app/",
      code: "https://github.com/MianAliKhalid/react-portfolio"
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://github.com/MianAliKhalid",
      code: "https://github.com/MianAliKhalid"
    },
    {
      id: 3,
      src: navbar,
      demo: "https://github.com/MianAliKhalid",
      code: "https://github.com/MianAliKhalid"
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "https://github.com/MianAliKhalid",
      code: "https://github.com/MianAliKhalid"
    },
    {
      id: 5,
      src: installNode,
      demo: "https://github.com/MianAliKhalid",
      code: "https://github.com/MianAliKhalid"
    },
    {
      id: 6,
      src: reactWeather,
      demo: "https://github.com/MianAliKhalid",
      code: "https://github.com/MianAliKhalid"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project_picture"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo} target="_blank" rel="noreferrer" >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code}  target="_blank" rel="noreferrer" >Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
