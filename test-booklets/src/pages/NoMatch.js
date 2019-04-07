import React from "react";
import styled from "styled-components";

const Error = styled.div`
    text-align: center;
`;

const NoMatch = () =>
    <Error>
        <h1>404</h1>
        <p>Page not found</p>
    </Error>;

export default NoMatch;