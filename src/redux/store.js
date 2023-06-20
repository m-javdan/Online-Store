import {legacy_createStore as createStore} from "redux";

const initialState = [];

export const shoppingCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":

            if (!state.find((item) => item.id === action.payload.id)) {
                return [
                    ...state,
                    {
                        ...action.payload,
                        count: 1,
                    }
                ];
            } else {
                const tempArray = [...state];
                const index = tempArray.findIndex(
                    (item) => item.id === action.payload.id
                );
                tempArray[index].count++;

                return tempArray;
            }

        case "SUB":
            if (action.payload.count > 1) {
                const tempArray = [...state];
                const index = tempArray.findIndex(
                    (item) => item.id === action.payload.id
                );
                tempArray[index].count--;

                return tempArray;
            } else {
                const filteredArray = state.filter(
                    (item) => item.id !== action.payload.id
                );

                return filteredArray;
            }

        case "REMOVE":
            const filteredArray = state.filter(
                (item) => item.id !== action.payload.id
            );

            return filteredArray;

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

const store = createStore(shoppingCardReducer);

export default store;
