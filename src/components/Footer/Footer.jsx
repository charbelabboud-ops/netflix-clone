import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/AULLebanon" >
        <img src={facebook_icon} alt="" /></a>
        <a href="https://www.instagram.com/aul_lebanon" >
        <img src={instagram_icon} alt="" /> </a>
        <a href="https://twitter.com/aul_lebanon?lang=en" >
        <img src={twitter_icon} alt="" /></a>
        <a href="https://www.youtube.com/channel/UCHdbU_r6ML0RnX5WdezvlRg" >
        <img src={youtube_icon} alt="" /></a>
      </div>
      <ul className="no-underline-link">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <a href="mailto:Info@aul.edu.lb" className="no-underline-link">
        <li>Contact Us</li></a>
      </ul>
      <p className='copyright-text'>© 1997-2023 Netflix, Inc. A project made by Charbel Abboud</p>
    </div>
  )
}

export default Footer
