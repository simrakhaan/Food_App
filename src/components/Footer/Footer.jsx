import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            
            <img src="/images/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam dolores hic iste consectetur numquam quaerat aliquam, deserunt fugiat officia vitae ut ipsa tempora facere maiores. Soluta illo earum animi.</p>
            <div className="footer-social-icons">
                <img src="/images/facebook_icon.png" alt="" />
                <img src="/images/twitter_icon.png" alt="" />
                <img src="/images/linkedin_icon.png" alt="" />
            </div>

        </div>
        <div className="footer-content-center">

<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>

        </div>
        <div className="footer-content-right">

             <h2>GET IN TOUCH</h2>
             <ul>
                <li>03876539017</li>
                <li>khansimra@gmail.com</li>
             </ul>
        </div>
      </div>
      <hr/>
      <p className="footer_copyright">
             Copyright 2024 @ Simra Khan.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
