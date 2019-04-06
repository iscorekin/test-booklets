
const initialState = {
    animals: [],
}

const animals = (state = initialState, action) => {
    switch(action.type) {
        case "ANIMALS_REQUEST":
            return state;
        case "ANIMALS_FETCH_SUCCESS":
            return action.animals;
        default:
            return state;
    }
}

export default animals;