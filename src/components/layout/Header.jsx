import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => {
    const formattedPath = `/${path}`;
    return currentPath === formattedPath ? "font-bold" : "";
  };

  return (
    <header className="w-full flex py-3 px-4 ">
      <div className="flex  lg:px-28 bg-[#FEFDFF] items-center">
        <div id="logo" className="flex item-center pt-1 mr-4">
          <a href="./">
            <img src="Logo.svg" alt="Logo" />
          </a>
        </div>

        {/* discord */}
        <a
          href="https://discord.gg/PnyMh9325g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="#000000"
          >
            <path
              d="M27.2939 13.3513C29.6508 16.8381 30.8148 20.7712 30.3797 25.299C30.3779 25.3182 30.368 25.3358 30.3523 25.3473C28.5674 26.666 26.8381 27.4663 25.1331 27.9971C25.1198 28.0011 25.1056 28.0009 25.0925 27.9964C25.0793 27.992 25.0679 27.9835 25.0598 27.9721C24.6659 27.4207 24.308 26.8393 23.9944 26.2287C23.9764 26.1928 23.9928 26.1495 24.0299 26.1353C24.5983 25.9198 25.1388 25.6615 25.6587 25.3557C25.6997 25.3316 25.7023 25.2725 25.6645 25.2442C25.5541 25.1617 25.4448 25.0751 25.3402 24.9885C25.3207 24.9725 25.2943 24.9693 25.2721 24.9801C21.8967 26.5484 18.1992 26.5484 14.7839 24.9801C14.7617 24.9701 14.7354 24.9735 14.7163 24.9893C14.612 25.0759 14.5024 25.1617 14.3931 25.2442C14.3553 25.2725 14.3584 25.3316 14.3996 25.3557C14.9195 25.6557 15.4601 25.9198 16.0277 26.1363C16.0645 26.1505 16.082 26.1928 16.0637 26.2287C15.7569 26.8401 15.399 27.4215 14.9978 27.9729C14.9803 27.9952 14.9516 28.0055 14.9245 27.9971C13.2275 27.4663 11.4982 26.666 9.71338 25.3473C9.69851 25.3358 9.68781 25.3174 9.68625 25.2982C9.32259 21.3817 10.0637 17.4161 12.7692 13.3505C12.7757 13.3398 12.7856 13.3314 12.7971 13.3264C14.1283 12.7116 15.5545 12.2594 17.0451 12.0011C17.0722 11.9969 17.0994 12.0095 17.1135 12.0337C17.2976 12.3618 17.5081 12.7825 17.6506 13.1264C19.2218 12.8849 20.8175 12.8849 22.4216 13.1264C22.5641 12.7899 22.7673 12.3618 22.9507 12.0337C22.9572 12.0217 22.9673 12.0121 22.9796 12.0062C22.9919 12.0004 23.0057 11.9986 23.019 12.0011C24.5104 12.2602 25.9366 12.7124 27.2667 13.3264C27.2785 13.3314 27.2881 13.3398 27.2939 13.3513ZM18.4494 20.798C18.4658 19.6401 17.6268 18.6821 16.5737 18.6821C15.5292 18.6821 14.6983 19.6317 14.6983 20.798C14.6983 21.9639 15.5456 22.9136 16.5737 22.9136C17.6185 22.9136 18.4494 21.9639 18.4494 20.798ZM25.3838 20.798C25.4002 19.6401 24.5613 18.6821 23.5084 18.6821C22.4636 18.6821 21.6327 19.6317 21.6327 20.798C21.6327 21.9639 22.4801 22.9136 23.5084 22.9136C24.5613 22.9136 25.3838 21.9639 25.3838 20.798Z"
              fill="#000000"
            />
          </svg>
        </a>

        {/* linkedin */}
        <a
          href="https://www.linkedin.com/company/pmready-global/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8153 9.2002C9.92343 9.2002 9.19995 9.90165 9.19995 10.7658V29.4914C9.19995 30.3556 9.92351 31.0565 10.8153 31.0565H29.4409C30.3331 31.0565 31.0562 30.3555 31.0562 29.4911V10.7658C31.0562 9.90165 30.3331 9.2002 29.4409 9.2002H10.8153ZM15.8417 17.6513V27.4911H12.5711V17.6513H15.8417ZM16.0573 14.6082C16.0573 15.5525 15.3474 16.3081 14.2071 16.3081L14.1856 16.308C13.088 16.308 12.3783 15.5524 12.3783 14.6082C12.3783 13.6425 13.1094 12.908 14.2288 12.908C15.3474 12.908 16.0359 13.6425 16.0573 14.6082ZM20.9223 27.4911H17.652C17.652 27.4911 17.6949 18.5747 17.6522 17.6516H20.9226V19.0444C21.3573 18.3741 22.1354 17.4206 23.8702 17.4206C26.0219 17.4206 27.6352 18.827 27.6352 21.8493V27.4911H24.365V22.2276C24.365 20.9047 23.8914 20.0025 22.7082 20.0025C21.8045 20.0025 21.2664 20.611 21.0301 21.1988C20.9437 21.4085 20.9223 21.703 20.9223 21.9967V27.4911Z"
              fill="#000000"
            />
          </svg>
        </a>

        {/* instagram */}
        <a
          href="https://www.instagram.com/pmready.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="#000000"
          >
            <path
              d="M16.486 20.1218C16.486 18.1112 18.1164 16.481 20.1281 16.481C22.1398 16.481 23.7711 18.1112 23.7711 20.1218C23.7711 22.1323 22.1398 23.7626 20.1281 23.7626C18.1164 23.7626 16.486 22.1323 16.486 20.1218ZM14.5166 20.1218C14.5166 23.2191 17.0289 25.7299 20.1281 25.7299C23.2273 25.7299 25.7396 23.2191 25.7396 20.1218C25.7396 17.0244 23.2273 14.5137 20.1281 14.5137C17.0289 14.5137 14.5166 17.0244 14.5166 20.1218ZM24.6503 14.2913C24.6502 14.5505 24.727 14.8039 24.871 15.0195C25.0151 15.2351 25.2198 15.4032 25.4594 15.5025C25.699 15.6018 25.9626 15.6278 26.217 15.5773C26.4714 15.5269 26.7051 15.4022 26.8886 15.2189C27.0721 15.0357 27.1971 14.8022 27.2478 14.548C27.2985 14.2938 27.2726 14.0303 27.1735 13.7908C27.0743 13.5513 26.9063 13.3465 26.6907 13.2024C26.4751 13.0583 26.2216 12.9814 25.9622 12.9812H25.9617C25.614 12.9814 25.2807 13.1195 25.0348 13.3651C24.7889 13.6107 24.6506 13.9439 24.6503 14.2913ZM15.7131 29.0117C14.6477 28.9632 14.0686 28.7858 13.6837 28.636C13.1735 28.4375 12.8095 28.201 12.4267 27.819C12.044 27.4371 11.8071 27.0736 11.6093 26.5637C11.4593 26.1792 11.2818 25.6003 11.2334 24.5355C11.1804 23.3843 11.1698 23.0385 11.1698 20.1219C11.1698 17.2053 11.1813 16.8604 11.2334 15.7082C11.2819 14.6434 11.4607 14.0656 11.6093 13.6801C11.8079 13.1701 12.0445 12.8063 12.4267 12.4238C12.8089 12.0413 13.1726 11.8045 13.6837 11.6069C14.0684 11.4569 14.6477 11.2796 15.7131 11.2312C16.865 11.1782 17.2111 11.1677 20.1281 11.1677C23.0451 11.1677 23.3915 11.1791 24.5444 11.2312C25.6098 11.2797 26.188 11.4583 26.5738 11.6069C27.084 11.8045 27.448 12.0418 27.8308 12.4238C28.2135 12.8058 28.4496 13.1701 28.6482 13.6801C28.7982 14.0645 28.9757 14.6434 29.0241 15.7082C29.0771 16.8604 29.0877 17.2053 29.0877 20.1219C29.0877 23.0385 29.0771 23.3833 29.0241 24.5355C28.9756 25.6003 28.7973 26.1791 28.6482 26.5637C28.4496 27.0736 28.213 27.4374 27.8308 27.819C27.4485 28.2007 27.084 28.4375 26.5738 28.636C26.1891 28.7859 25.6098 28.9633 24.5444 29.0117C23.3925 29.0646 23.0464 29.0752 20.1281 29.0752C17.2098 29.0752 16.8647 29.0646 15.7131 29.0117ZM15.6226 9.26634C14.4593 9.31928 13.6643 9.50364 12.9701 9.77362C12.2511 10.0524 11.6424 10.4265 11.0342 11.0334C10.426 11.6403 10.0527 12.2495 9.77372 12.9681C9.50358 13.6623 9.31911 14.4564 9.26613 15.619C9.21228 16.7835 9.19995 17.1558 9.19995 20.1218C9.19995 23.0877 9.21228 23.46 9.26613 24.6245C9.31911 25.7873 9.50358 26.5812 9.77372 27.2755C10.0527 27.9936 10.4261 28.6036 11.0342 29.2102C11.6423 29.8168 12.2511 30.1903 12.9701 30.4699C13.6656 30.7399 14.4593 30.9243 15.6226 30.9772C16.7885 31.0302 17.1604 31.0434 20.1281 31.0434C23.0958 31.0434 23.4683 31.031 24.6335 30.9772C25.797 30.9243 26.5914 30.7399 27.2861 30.4699C28.0047 30.1903 28.6137 29.8171 29.222 29.2102C29.8302 28.6033 30.2027 27.9936 30.4825 27.2755C30.7526 26.5812 30.9379 25.7872 30.99 24.6245C31.043 23.4592 31.0554 23.0877 31.0554 20.1218C31.0554 17.1558 31.043 16.7835 30.99 15.619C30.9371 14.4563 30.7526 13.6619 30.4825 12.9681C30.2027 12.2499 29.8292 11.6412 29.222 11.0334C28.6147 10.4255 28.0047 10.0524 27.287 9.77362C26.5914 9.50364 25.7969 9.31841 24.6344 9.26634C23.4692 9.21339 23.0967 9.2002 20.129 9.2002C17.1612 9.2002 16.7885 9.21251 15.6226 9.26634Z"
              fill="#000000"
            />
          </svg>
        </a>
      </div>

      <div
        id="menu"
        className="flex flex-grow justify-end z-20 font-inter text-[#24223C]"
      >
        <ul className="flex gap-6 items-center text-[16px]">
          <li className="hidden lg:block p-3 ">
            <a href="/about" className={isActive("about")}>
              About
            </a>
          </li>
          <li className="hidden lg:block p-3 ">
            <a href="/resources" className={isActive("resources")}>
              Resources
            </a>
          </li>
          <li className="hidden lg:block p-3 ">
            <a href="/program/Home" className={isActive("program")}>
              Program
            </a>
          </li>
          <li className="hidden lg:block p-3 ">
            <a href="/community" className={isActive("community")}>
              Community
            </a>
          </li>
          <li className="hidden lg:block p-3">
            <a href="/contact" className={isActive("contact")}>
              Contact
            </a>
          </li>
          <li className="hidden lg:block px-4 py-3 bg-[#24223C] text-white rounded-full">
            <a
              href="https://docs.google.com/document/d/1t3kpIMlzpOnv5CQD8Ihw8dpa3xEihp1b8WtaKlVXQlc/edit?usp=sharing"
              className={isActive("get involved")}
            >
              Get Involved
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button onClick={toggleMenu}>
          {!isMenuOpen && (
            <img className="block lg:hidden" src="menu.png" alt="Menu" />
          )}
          {isMenuOpen && (
            <img className="block lg:hidden" src="close.svg" alt="Close" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-[65px] right-0 h-full w-4/5 bg-white z-50 shadow-lg font-lexend text-[#24223C] text-lg font-semibold pt-5 pr-5">
          <ul className="flex flex-col justify-start items-end h-full pl-5 space-y-4 text-end">
            <li>
              <a
                href="/about"
                onClick={toggleMenu}
                className={isActive("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/resources"
                onClick={toggleMenu}
                className={isActive("resources")}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/community"
                onClick={toggleMenu}
                className={isActive("community")}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={toggleMenu}
                className={isActive("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
