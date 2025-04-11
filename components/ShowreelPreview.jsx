'use client';

import React from 'react';
import { gsap } from '@/lib/gsap';
import '@/styles/components/ShowreelPreview.scss';
import Image from 'next/image';
import Button from './Button';
import { useGSAP } from '@gsap/react';

// ✅ Import local images like in the previous example
import CraftmanImage from '../public/images/bbb.jpg';

const ShowreelPreview = () => {
  // Store image in an array like in your HomeAboutSection
  const images = [CraftmanImage];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 500px)', () => {
      gsap.utils.toArray('.sReelP__imageContainer').forEach((container) => {
        let image = container.querySelector('img');
        gsap.to(image, {
          y: () => image.offsetHeight - container.offsetHeight,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.to('.sReelP__textContainer', {
        scrollTrigger: {
          trigger: '.sReelP__textContainer',
          pin: true,
          start: 'top-=2% top',
          end: 'bottom top',
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="sReelP">
      <div className="sReelP__imageContainer">
        {/* Use the local image from the images array */}
        {images.map((image, i) => (
          <Image
            key={`image_${i}`}
            src={image}
            alt={`Craftman image ${i + 1}`}
            className="sReelP__imageContainer__image"
            width={0}
            height={0}
            sizes="100vw"
            priority
            placeholder="blur"
          />
        ))}
      </div>
      <div className="sReelP__textContainer">
        <p data-animation="h" className="sReelP__textContainer__text">
        NS Deco stands for comfort redefined. We craft purposeful pieces that transform your home into a refined retreat—where elegance and ease coexist.
        </p>
        <div className="sReelP__textContainer__button">
          <Button href="/contact" color="brown">
          Take a Look
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowreelPreview;
