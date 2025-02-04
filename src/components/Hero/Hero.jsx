import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Viswanadh Reddy Alavala</h1>
        <p className={styles.description}>
          I'm a Full-stack developer with expertise in HTML, CSS, JavaScript, Java, Spring-Boot, MySQL, MernStack Terminology. I've gained hands-on experience from a internship at Excelr by contributing my skills in building an E-commerce application and actively seeking job opportunities.!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="src\components\Hero\WhatsApp_Image_2025-02-01_at_14.41.26_00c18403-removebg-preview.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
