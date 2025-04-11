'use client';

import React, { useRef } from 'react';
import '@/styles/components/Contact.scss';
import Button from './Button';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__box">
        <div className="contact__box__top">
          <p>Reach out to us</p>
        </div>
        <div className="contact__box__bottom">
          <p className="contact__box__bottom__first">
          Thank you for exploring our furniture collection!
Please note that this is a demo website—purchases are not enabled.
This project showcases our design and web development skills.
          </p>
          <p className="contact__box__bottom__second">
          Whether you’re interested in a similar project or have web development needs,
          we’re here to help. Reach out to us via email, and let’s discuss how we can create something extraordinary for you!
          </p>
          <div className="contact__box__bottom__button">
            <a
              href="emmanueladewunmi51@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="brown">Contact us</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
