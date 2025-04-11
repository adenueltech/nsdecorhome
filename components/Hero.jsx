'use client';

import '@/styles/components/Hero.scss';
import '@/styles/pages/Homepage.scss';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import Button from './Button';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
// import imageSrc from '@/assets/images/875.jpg';
import NavMenu from './NavMenu';
import { split } from '@/animations/text';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { useGSAP } from '@gsap/react';
import Scene from './Scene';



const Hero = () => {
  const app = useRef(null);
  const title = useRef(null);
  const footerText = useRef(null);
  const footer = useRef(null);
  const image = useRef(null);
  const container = useRef();

  const isDesktop = useMediaQuery({ query: '(min-width: 1050px)' });

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
    const init = () => {
      tl.from(app.current, { ease: 'linear', autoAlpha: 0 }).to(app.current, {
        ease: 'linear',
        autoAlpha: 1,
      });
    };

    init();
    split();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1050px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top 100%',
            end: 'bottom top',
            scrub: 4,
            ease: 'power4.easeInOut',
          },
        });

        tl.fromTo(title.current, { y: '0vh' }, { y: '-37.5vh' }).fromTo(
          footer.current,
          { y: '-22.5vh' },
          { y: '-53.75vh' },
          '<+=35%',
        );
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <div className="homePage">
      <NavMenu />
      <div className="main" ref={app}>
        <p className="main__heading" data-animation="custom">
        NS Deco
        </p>
        <div className="main__about">
        <p className="main__about__text">
  <span data-animation="opacIn">
    Step into a space where elegance meets intention.
  </span>{' '}
  <br />
  <span data-animation="opacIn">
    Each piece in our collection is thoughtfully chosen
  </span>{' '}
  <br />
  <span data-animation="opacIn">
    to bring timeless charm and elevated style to your home.
  </span>
</p>

          <div className="main__about__button">
            <Button href="/contact" color="milch">
              Explore Collection
            </Button>
          </div>

          <div ref={container}>
            <div className="main__about__box">
              <h1 ref={title}>
              <span data-animation="blurIn">MODERN GRACE</span> <br />
<span data-animation="blurIn"> CRAFTED TO LAST</span> <br />
<span data-animation="blurIn"> DESIGNED WITH</span> <br />
<span data-animation="blurIn"> PURPOSE & BEAUTY</span>

              </h1>
            </div>

            <div ref={footer}>
              <div ref={image} className="main__about__model">
                {isDesktop ? (
                  <Scene />
                ) : (
                  <Image
                    height={280}
                    width={230}
                    src="https://res.cloudinary.com/dqfzpmj9n/image/upload/v1719805828/875_sfafe7.jpg"
                    alt="Model"
                    className="main__about__model__image"
                  />
                )}
              </div>
              <h1
                ref={footerText}
                className="main__about__footerText"
                data-animation="blurIn"
              >
                LUXURY AT YOUR DOORSTEP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
