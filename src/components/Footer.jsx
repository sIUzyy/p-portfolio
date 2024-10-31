const info = [
  {
    title: "Main",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },

  {
    title: "Work",
    path: "/work",
  },

  {
    title: "Projects",
    path: "/projects",
  },

  {
    title: "Uses",
    path: "/uses",
  },
];

import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-[#18181B] py-14 border-x border-t border-[#27272C]  ">
      <div className="md:flex md:items-center md:justify-between md:px-5 lg:px-8 xl:px-12">
        <div className="flex items-center justify-center">
          {info.map((data, key) => (
            <div key={key}>
              <Link
                to={data.path}
                onClick={scrollToTop}
                className="pr-3 text-[#E1E1E4] font-title hover:text-[#A1A1AA] focus:text-[#A1A1AA] "
              >
                {data.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="pt-5 text-center md:pt-0">
          <h1 className="text-[#5E5E66] font-p">
            © {year} Justin Peligro. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
