import { BUY_ICECREAM } from "./iceCreamTypes";

const initailState = {
    numOfIceCream: 20,
};

export const iceCreamReducer = (state = initailState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            };

        default:
            return state;
    }
};
