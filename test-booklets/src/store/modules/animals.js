import axios from "axios";

export function fetchAnimals(url) {
    return dispatch => axios.get(url)
        .then(response => {dispatch({type: "ANIMALS_FETCH_SUCCESS", payload: response.data})});
}

const animals = (state = {animals: []}, action) => {
    switch(action.type) {
        case "ANIMALS_FETCH_SUCCESS":
            console.log(action)
            return {...state, animals: action.payload};
        default:
            return state;
    }
}

export default animals;