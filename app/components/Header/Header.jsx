"use client";

import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";
import MenuBurger from "../../../public/assets/icons/menu.svg";
import CloseBtn from "../../../public/assets/icons/close-square.svg";
import Logo from "../../../public/assets/icons/logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const openMobileMenu = () => {
    setisOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeMobileMenu = () => {
    setisOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
      <div className='container'>
        <nav className={`navigation ${scrolling ? "scrolling" : ""}`}>
          <a href='/' className={`logo ${scrolling ? "scrolling" : ""}`}>
            <Logo aria-label='logo' />
          </a>
          <button type='button' className='menu-btn' onClick={openMobileMenu}>
            <p className={`menu-text ${scrolling ? "scrolling" : ""}`}>Menu</p>
            <MenuBurger aria-label='menu' />
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className='mobile-bcg'>
          <div className='mobile-menu container'>
            <div className='mobile-header'>
              <a href='/' className='logo'>
                Confetti
              </a>
              <button
                type='button'
                className='btn-close'
                onClick={closeMobileMenu}
                aria-label='close-btn'
              >
                <CloseBtn aria-label='close-btn' />
              </button>
            </div>
            <div className='mobile-links'>
              <Link
                to='main'
                smooth={true}
                offset={-70}
                onClick={closeMobileMenu}
              >
                główna
              </Link>
              <Link
                to='about'
                smooth={true}
                offset={-100}
                onClick={closeMobileMenu}
              >
                O nas
              </Link>
              <Link
                to='reviews'
                smooth={true}
                offset={-100}
                onClick={closeMobileMenu}
              >
                Recenzje
              </Link>
              <Link
                to='contacts'
                smooth={true}
                offset={-80}
                onClick={closeMobileMenu}
              >
                Kontakty
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
