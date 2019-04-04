import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
    list-style-type: none;
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
    <List className={props.className}>
        {props.data.map(item =>
            <Item to={item.link}>
                {item.label}
            </Item>
        )}
    </List>
)

export default AnimalsList;