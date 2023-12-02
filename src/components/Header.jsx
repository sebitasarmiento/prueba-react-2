import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalContext';

const Header = () => {
  const { cartItems } = useContext(GlobalContext);
  const calculateTotal = () => {
    return (
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 100
    );
  };


  return (
    <div className='header'>
      <h1>
        <Link to='/' className='logo'>
          Pizzeria Mammamia!
        </Link>
      </h1>
      <div>
        <h3>
          <Link to='/cart' className='cart-header'>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart{' '}
            {cartItems.length > 0 && (
              <span className='cart-count'>${calculateTotal()}</span>
            )}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;

