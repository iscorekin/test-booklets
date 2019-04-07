import React from "react";
import styled from "styled-components";

const Name = styled.div`
    text-align: center;
    width: 100%;
`;

const Animal = props => (
    <Name>
        <h1>{props.name}</h1>
    </Name>
)

export default Animal;