import React from "react";
import AnimalsList from "../containers/AnimalsList"

const Layout = ({ children }) => (
  <div>
    <AnimalsList />
    <div>{children}</div>
  </div>
);

export default Layout;
