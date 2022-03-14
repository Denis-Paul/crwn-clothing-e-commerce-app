import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => ( // dispatch can be found in ...otherProps
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />)
        )) : (<span className='empty-message'> Your cart is empty </span>)
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}> 
      Go To Checkout 
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// connect passes dispatch into components as props if the second argument is not supplied (e.g. mapDispatchToProps)
export default withRouter(connect(mapStateToProps)(CartDropdown)); // withRouter takes component from connect call as the component argument