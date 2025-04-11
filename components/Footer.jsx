import React from 'react';
import '@/styles/components/Footer.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__inner__left">
          <p>
            Made by:{' '}
            <a
              href="mailto:officialkb17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="name"
            >
              Adenuel
            </a>
          </p>
          <a
            href="https://x.com/adenuel_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-adewunmi-613512308/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/adenuel_ns/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Instagram
          </a>
          <a
            href="emmanueladewunmi51@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <h2 className="footer__inner__mid">NS DECOR</h2>
        <div className="footer__inner__right">
          <Link href="/contact">Shop</Link>
          <Link href="/contact">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Showreel</Link>
        </div>
      </div>
      <div className="footer__date">
        <p>&copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
