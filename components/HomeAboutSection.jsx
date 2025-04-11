'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import '@/styles/components/HomeAboutSection.scss';
import Button from './Button';

// ✅ Import local images from your assets folder
import Picture1 from '../public/images/cc3.jpeg';
import Picture2 from '../public/images/cc2.jpg';

const HomeAboutSection = () => {
  const images = [Picture1, Picture2]; // ✅ use the imported local images
  const imagesRef = useRef([]);
  const container = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1050px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 4,
          },
        });

        tl.fromTo(imagesRef.current[0], { y: '9.25vh' }, { y: '-2.25vh' })
          .fromTo(imagesRef.current[1], { y: '10.25vh' }, { y: '-15.25vh' }, 0);
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <div className="homeAbout" ref={container}>
      <div className="homeAbout__wrapper">
        <div className="homeAbout__wrapper__images">
          {images.map((image, i) => (
            <div
              key={`i_${i}`}
              ref={(el) => (imagesRef.current[i] = el)}
              className="homeAbout__wrapper__image"
            >
              <Image
                src={image}
                alt={`Furniture ${i + 1}`}
                fill
                priority
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        <div className="homeAbout__wrapper__text">
          <h2 data-animation="h">
          Discover furniture and décor that blend timeless elegance with modern creativity.
          </h2>

          <div className="homeAbout__wrapper__text__paragraph">
            <p data-animation="h">
            Crafted with care, our furniture brings together modern beauty and classic comfort to create spaces that feel truly yours.
            </p>
          </div>

          <Button href="/contact" color="brown">
            About us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
