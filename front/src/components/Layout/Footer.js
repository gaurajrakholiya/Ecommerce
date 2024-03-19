import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">
        All Rights Reserved &copy; Ecommerce
      </h1>
      <p className="text-center mt-2">
        <Link to='/about'  >About</Link>|
        <Link to='/policy'  >Policy</Link>|
        <Link to='/contact'  >Contact</Link>
      </p>
    </div>
  )
}

export default Footer
