/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '@/styles/components/Header.scss';
import AnimatedLink from './AnimatedLink';
import { split } from '@/animations/text';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

const Header = (logoColor, linkColor) => {
  const [showMenu, setShowMenu] = useState(false);
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const [mbtn, setMbtn] = useState(false);

  // if (logoColor !== '#E7D7C5') {
  //   setMbtn(true);
  // }

  const animateIn = (el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 1,
    });
    split();
    gsap.from('.menu_drop_wrap-links_streaming svg', {
      opacity: 0,
      yPercent: 10,
      stagger: 0.2,
      duration: 1,
    });
  };
  const animateOut = (el, next) => {
    gsap.to(el, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        next;
      },
    });
  };

  const openMenu = () => {
    setShowMenu(true);
    setInProp(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setInProp(false);
  };

  // useEffect(() => {
  //   split();
  // });

  return (
    <>
      <header className="y__header child_wrap animate__fadeIn animate__animated animate__delay-0.5s">
        <p className="y__logo">NS Deco</p>
        <ul>
          <AnimatedLink type="header" color="milch">
            Home
          </AnimatedLink>
          <AnimatedLink type="header" color="milch">
            Shop
          </AnimatedLink>
          <AnimatedLink type="header" color="milch">
            About
          </AnimatedLink>
          <AnimatedLink type="header" color="milch">
            Contact
          </AnimatedLink>
          <AnimatedLink type="header" color="milch">
            Search
          </AnimatedLink>
        </ul>
        <AnimatedLink type="arrowLink" color="cream">
          Explore
        </AnimatedLink>
        <div onClick={openMenu} className="menu_btn">
          {!showMenu && !mbtn && <p className="y__logo">Menu</p>}
          {!showMenu && mbtn && <p>MENU</p>}
        </div>
      </header>
      {/* {showMenu && ( */}
      <Transition
        nodeRef={nodeRef}
        in={inProp}
        timeout={300}
        onEnter={animateIn}
        onExit={animateOut}
        unmountOnExit
      >
        <div className="menu_drop" ref={nodeRef}>
          <div className="menu_drop_wrap child_wrap">
            <div className="menu_drop_wrap_head">
              <p className="y__logo">NS Deco</p>
              <div onClick={closeMenu}>
                <span className="y__logo">close</span>
              </div>
            </div>
            <nav>
              <Link data-animation="h" href="/home">
                Home
              </Link>
              <Link data-animation="h" href="/shop">
                Shop
              </Link>
              <Link data-animation="h" href="/About">
                About
              </Link>
              <Link data-animation="h" href="/contact">
                Contact
              </Link>
              <Link data-animation="h" href="/search">
                Search
              </Link>
            </nav>
            <footer>
              <AnimatedLink type="socials">Check our socials</AnimatedLink>
              <div className="menu_drop_wrap-links">
                <div className="menu_drop_wrap-links_socials">
                  <div class="menu_drop_wrap-in">
                    <AnimatedLink data-animation="h">Instagram</AnimatedLink>
                    <AnimatedLink data-animation="h">Twitter</AnimatedLink>
                    <AnimatedLink data-animation="h">Linkedin</AnimatedLink>
                    <AnimatedLink data-animation="h">Github</AnimatedLink>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </Transition>
      {/* )} */}
    </>
  );
};

export default Header;
