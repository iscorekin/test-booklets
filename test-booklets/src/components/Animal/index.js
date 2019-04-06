import React from "react";
import styled from "styled-components";

const Name = styled.div`
    text-align: center;
`;

const Animal = props => (
    <Name>
        <h2>{props.name}</h2>
    </Name>
)

export default Animal;