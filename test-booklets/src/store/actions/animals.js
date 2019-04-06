import axios from "axios";

export function requestAnimals() {
    fetchAnimals(`${process.env.PUBLIC_URL}/json/animals.json`)

    return {
        type: "ANIMALS_REQUEST",
    }
}

function fetchAnimals(url) {
    return dispatch => axios.get(url)
        .then(response => dispatch({type: "ANIMALS_FETCH_SUCCESS", payload: response.data}));
}