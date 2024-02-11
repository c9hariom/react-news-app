import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render () {
    return (
        <div>
            <footer className="bg-dark text-light py-4">
  <div className="container">
    <div className="row">
    <div className="col-md-4">
        <h5>C9News</h5>
        <p>C9News is your trusted source for the latest news and updates. Stay informed with our reliable reporting.</p>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: c9hariom@gmail.com</p>
        <p>Phone: 123-456-xxxx</p>
      </div>
      <div className="col-md-4">
        <h5>Pages</h5>
        <p>
                <Link className='nav-link' to='/'>
                  Home
                </Link></p>
                <p><Link className='nav-link' to='/about'>
                  About Us
                </Link></p>
                <p> <Link className='nav-link' to='/contact'>
                  Contact Us
                </Link></p>
               
             
      </div>
    </div>
    <hr className="mt-4 mb-3"/>
    <div className="text-center">
      <p>&copy; 2024 c9News. All rights reserved.</p>
    </div>
  </div>
</footer>

        </div>
    )
  }
}
