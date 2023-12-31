const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const initialCakeState = {
    numberOfCakes: 10,
};

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };

        default:
            return state;
    }
};

const iceCream = {
    numberOfIceCreams: 20,
};

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    };
}

const iceCreamReducer = (state = iceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
