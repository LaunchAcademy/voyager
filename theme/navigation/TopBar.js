import React from "react";
import { Disclosure } from "@headlessui/react";
import "./topBar.css";

const TopBar = ({ logo, logoAltText, children }) => (
  <Disclosure as="nav" className="top-bar-navigation">
    {({ open }) => (
      <>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt={logoAltText} />
          </div>
        </div>
        <div>
          {children}
        </div>
      </>
    )}
  </Disclosure>
);

export default TopBar;
