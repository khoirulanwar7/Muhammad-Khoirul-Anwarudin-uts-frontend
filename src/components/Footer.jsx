import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container mb-10 text-slate-200">
          <div className="grid items-start justify-items-center grid-cols-3 max-w-6xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className="text-2xl gap-10 lg:text-base md:text-sm uppercase font-semibold">{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center mt-3 gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-xl sm:text-xs">{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-2xl md:text-center">Copyright<sup className="text-base font-bold">&copy;</sup>
              <span className="font-semibold"> Muhammad Khoirul Anwarudin</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
