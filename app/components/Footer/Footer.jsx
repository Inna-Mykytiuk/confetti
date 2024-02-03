"use client";

import "./Footer.css";
import Logo from "../../../public/assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <a href='/' className='logo'>
            <Logo aria-label='logo' />
          </a>
          <p>confetti © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
