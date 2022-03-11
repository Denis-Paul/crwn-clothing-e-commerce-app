import { createSelector } from 'reselect';

// const selectUser = state => state.user;

const selectCart = state => state.cart; // input selector - return just a piece of the state

export const selectCartItems = createSelector(
    [selectCart], // [selectCart, selectUser]
    (cart) => cart.cartItems // (cart, user)
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
);