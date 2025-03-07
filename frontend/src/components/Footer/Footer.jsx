import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" 
                height={50} width={200}
                />
                <p>Our On-Demand Food Delivery App connects users with their favorite restaurants, 
                    offering fast and convenient food delivery at their doorstep. 
                    With real-time tracking and an easy-to-use interface,
                     we ensure a seamless ordering experience. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
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
                    <li>+92 3244914082</li>
                    <li>talkwithmalaika@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Final Year project - BSCS (Virtual University of pakistan) 
        </p>
    </div>
  )
}

export default Footer