'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import '@/styles/components/SpecificationSection.scss';
import { useGSAP } from '@gsap/react';
import AnimatedLink from './AnimatedLink';

// ✅ Import local image
import CraftmanImage from '../public/images/craftman.jpg';

const SpecificationSection = () => {
  const container = useRef();
  const imageRef = useRef(null);

  // ✅ Store images in a const array
  const images = [CraftmanImage];

  useGSAP(() => {
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: 'top 60%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
    });

    tl.to(image, {
      ease: 'power4.easeInOut',
      duration: 3,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    }).to(
      image,
      {
        duration: 3,
        scale: 1,
      },
      '<',
    );
  }, []);

  return (
    <div className="specPage">
      <div className="specPage__container" ref={container}>
        <h2 data-animation="h">Chairs in Harmony: Natural Materials, Modern Craft</h2>
        <p data-animation="h" className="specPage__container__paragraph">
        Whether it&apos;s the warmth of wood, the strength of metal, or the clarity of acrylic, chairs often unite multiple materials to create both beauty and durability.

        </p>
        <div className="specPage__container__imageBox">
          {images.map((image, i) => (
            <Image
              key={i}
              ref={imageRef}
              src={image}
              alt="Craftman Image"
              className="specPage__container__imageBox__image"
              width={0}
              height={0}
              sizes="100vw"
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8fv1oPQAINAMEp+xU5QAAAABJRU5ErkJggg=="
            />
          ))}
        </div>
        <p className="specPage__container__bottomText">
          <AnimatedLink type="heading" url="/contact">
            Explore our collection
          </AnimatedLink>
        </p>
      </div>
    </div>
  );
};

export default SpecificationSection;
