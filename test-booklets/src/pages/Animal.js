import React from "react";
import Animal from "../containers/Animal"

const AnimalPage = props => <Animal id={props.match.params.id} />;

export default AnimalPage;
