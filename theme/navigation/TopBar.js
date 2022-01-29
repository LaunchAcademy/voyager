import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import Icon from "../icons/Icon.js";
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
            <Disclosure.Button className="top-bar-navigation__menu-toggle-button">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <Icon name="times" className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Icon name="bars" className="block h-6 w-6" aria-hidden="true" />
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

TopBar.propTypes = {
  logo: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TopBar;
