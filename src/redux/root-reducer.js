// base reducer object that represents all of the states of the app
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage obj from the window browser

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// persist config obj
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // string names of the reducers that you want to store
}

const rootReducer = combineReducers({
    user: userReducer, // handled by Firebase auth
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // returns root reducer with persistence capabilities
