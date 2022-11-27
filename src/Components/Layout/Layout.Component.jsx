import React from "react";
import { Outlet } from "react-router-dom";
import Navbarcomponent from "./Navbar.Component/Navbar.Component";
import { FooterComponent } from "../Layout/Footer.Component";

const LayoutComponent = () => {
  return (
    <>
      <Navbarcomponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
