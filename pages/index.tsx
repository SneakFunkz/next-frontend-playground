import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import sky from "../public/static/sky.jpg";

// CSS SCROLL SNAP

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl: any = useRef();
  const topLineText: any = useRef();
  const textSecondLine: any = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(topLineText.current, {
        duration: 0.6,
        opacity: 1,
        y: -100,
        ease: Power3.easeIn,
      })
      .to(textSecondLine.current, {
        duration: 0.6,
        opacity: 1,
        y: -100,
        ease: Power3.easeIn,
      });
  }, []);

  const image: any = useRef();
  const imageContainer: any = useRef();

  useLayoutEffect(() => {
    gsap.to(image.current, {
      scrollTrigger: {
        trigger: imageContainer.current,
        pin: true,
        start: "top",
        end: "+=5000",
        markers: true,
        scrub: true,
        toggleActions: "play none none reverse",
        anticipatePin: 1,
      },
      scale: 2,
    });
  });

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className="textWrap">
            <span className={styles.titleText} ref={topLineText} id="topText">
              Hello
            </span>
          </h1>
          <h1 className="textWrap">
            <span className={styles.titleText} ref={textSecondLine}>
              World
            </span>
          </h1>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.imageContainer} ref={imageContainer}>
          <div ref={image} className={styles.image}>
            <Image
              alt=""
              src={sky}
              layout="intrinsic"
              className={styles.imageComponent}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
