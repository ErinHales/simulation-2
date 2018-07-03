const initialState = {
    name: "",
    address: "", 
    city: "", 
    state: "",
    zipcode: null,
    image: "",
    mortgage: null, 
    rent: null
}

const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_RENT = "UPDATE_RENT";
const CANCEL = "CANCEL";

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zipcode: action.payload.zipcode
            });
        case UPDATE_IMAGE:
            return Object.assign({}, state, {image: action.payload.image});
        case UPDATE_RENT:
            return Object.assign({}, state, {
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })
        case CANCEL:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}


export function updateAddress(name, address, city, state, zipcode) {
    return {
        type: UPDATE_ADDRESS,
        payload: {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
    }
}

export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: {
            image: image
        }
    }
}

export function updateRent(mortgage, rent) {
    return {
        type: UPDATE_RENT,
        payload: {
            mortgage: mortgage,
            rent: rent
        }
    } 
}

export function cancel() {
    return {
        type: CANCEL,
        payload: initialState
    }
}