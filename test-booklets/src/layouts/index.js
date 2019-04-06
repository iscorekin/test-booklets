import React from "react";
import AnimalsList from "../containers/AnimalsList"
import styled from "styled-components";

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Layout = ({ children }) => (
  <LayoutDiv>
    <AnimalsList />
    <div>{children}</div>
  </LayoutDiv>
);

export default Layout;
