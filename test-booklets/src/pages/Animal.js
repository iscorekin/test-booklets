import React from "react";
import Animal from "../containers/Animal"
import styled from "styled-components";
import FoodSelect from "../containers/FoodSelect";

const Page = styled.div`
    margin-left: 4px;
    text-align: center;
    width: 100%;
`;

const AnimalPage = props =>
    <Page>
        <Animal id={props.match.params.id} />
        <FoodSelect />
    </Page>;

export default AnimalPage;
