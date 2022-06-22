import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Home: NextPage = () => {
  const tl: any = useRef();
  const text = useRef();
  const textSelector = gsap.utils.selector(text);

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(textSelector(".textWrap"), { duration: 0.5, y: -100 });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className="textWrap">
          <span className={styles.textTop}>Hello</span>
          <br />
        </h1>
        <h1 className="textWrap">
          <span className={styles.textSecond}>World</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
