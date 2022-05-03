import { combineReducers } from "redux";

import categoryReducer from "./Category/category.reducers";
import productReducer from "./Products/products.reducers";
import bannerReducer from "./Banners/banners.reducers";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    banners: bannerReducer,
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer
})

export default  rootReducer;