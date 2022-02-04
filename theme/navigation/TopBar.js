import React, { Fragment, Suspense } from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "../icons/Icon.js";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import "./topBar.css";

const TopBar = ({ logo, children }) => (
  <div className="top-bar-navigation-container">
    <Disclosure as="nav" className="top-bar-navigation">
      {({ open }) => (
        <>
          <div className="flex-initial flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center top-bar__logo">
              { logo }
            </div>
          </div>
          <div className="top-bar-navigation__menu-toggle">
            <Disclosure.Button className="top-bar-navigation__menu-toggle-button" aria-label="Navigation Menu">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <Icon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Icon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          <div
            className={`${
              open ? "top-bar-navigation__menu-list__open" : "top-bar-navigation__menu-list__closed"
            }`}
          >
            {children}
          </div>
        </>
      )}
    </Disclosure>
  </div>
);

export default TopBar;
