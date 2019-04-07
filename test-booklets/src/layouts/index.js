import React from "react";
import AnimalsList from "../containers/AnimalsList"
import styled from "styled-components";

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Content = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <LayoutDiv>
    <AnimalsList />
    <Content>{children}</Content>
  </LayoutDiv>
);

export default Layout;
