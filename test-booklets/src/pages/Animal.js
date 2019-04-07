import React from "react";
import Animal from "../containers/Animal"
import styled from "styled-components";
import UISelect from "../ui/Select";

const Page = styled.div`
    margin-left: 4px;
    text-align: center;
    width: 100%;
`;

const AnimalPage = props =>
    <Page>
        <Animal id={props.match.params.id} />
        <UISelect data={[{value: "sdsd", label: "sdss"}]}/>
    </Page>;

export default AnimalPage;
