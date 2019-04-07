import axios from "axios";

export function fetchFood(url) {
    return dispatch => axios.get(url)
        .then(response => {dispatch({type: "FOOD_FETCH_SUCCESS", payload: response.data})});
}

const food = (state = {food: []}, action) => {
    switch(action.type) {
        case "FOOD_FETCH_SUCCESS":
            return {...state, food: action.payload};
        default:
            return state;
    }
}

export default food;