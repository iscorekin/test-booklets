import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
`;

const Item = styled(Link)`
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;

    &:hover {
        background-color: #555;
        color: white;
    }
`;

const AnimalsList = props => (
    <List>
        {props.data.map((item, index) =>
            <Item to={item.link} key={index}>
                {item.label}
            </Item>
        )}
    </List>
)

export default AnimalsList;