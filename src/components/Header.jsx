import React from 'react'
import {Link} from "react-router-dom"

 const Header = () => {
  return (
    <div className='header'>
        <h1>
          <Link to="/" className='logo'>
            Pizzeria Mammamia!
          </Link>
        </h1>
     <div>
        
        <h3>
          <Link to="/cart" className='cart-header'>
            cart
          </Link>
        </h3>
       
     </div>

    </div>
  )
}



export default Header